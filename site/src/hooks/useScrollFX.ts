import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

/**
 * Porta todas as animações da página original (GSAP + ScrollTrigger + Lenis):
 * reveals de texto e imagem, parallax, scrollytelling das categorias,
 * repulsão das ferramentas flutuantes, progresso do processo,
 * galeria horizontal de detalhes e botões magnéticos.
 */
export function useScrollFX() {
  useEffect(() => {
    const ctx = gsap.context(() => {})
    const off: Array<() => void> = []
    const on = (
      el: HTMLElement | Window,
      ev: string,
      fn: EventListenerOrEventListenerObject,
    ) => {
      el.addEventListener(ev, fn)
      off.push(() => el.removeEventListener(ev, fn))
    }

    const q = (s: string) => document.querySelector<HTMLElement>(s)
    const qa = (s: string) => Array.from(document.querySelectorAll<HTMLElement>(s))
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches

    const heroVid = q('[data-hero-media] video') as HTMLVideoElement | null
    if (heroVid) {
      heroVid.muted = true
      heroVid.volume = 0
      heroVid.play().catch(() => {})
    }

    // Header sólido após 40px de rolagem
    const header = q('[data-header]')
    const setHeader = (y: number) => header?.classList.toggle('solid', y > 40)

    let lenis: Lenis | null = null
    let rafId = 0

    if (!reduced) {
      lenis = new Lenis({ lerp: 0.09 })
      // Exposto para a modal de produto travar/destravar a rolagem suave.
      ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis
      const raf = (t: number) => {
        lenis!.raf(t)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
      lenis.on('scroll', (e: { scroll: number }) => {
        ScrollTrigger.update()
        setHeader(e.scroll)
      })
      qa('a[href^="#"]').forEach(a =>
        on(a, 'click', ev => {
          const href = a.getAttribute('href')
          if (!href || href === '#') return
          const t = q(href)
          if (t) {
            ev.preventDefault()
            lenis!.scrollTo(t, { offset: -60 })
          }
        }),
      )
    } else {
      on(window, 'scroll', () => setHeader(window.scrollY))
    }

    let sweepTimer: ReturnType<typeof setInterval> | undefined

    if (!reduced) {
      ctx.add(() => {
        // Revelação de linhas de título
        qa('[data-lines]').forEach(h => {
          gsap.from(h.querySelectorAll('[data-line]'), {
            yPercent: 110,
            duration: 1.1,
            ease: 'power4.out',
            stagger: 0.12,
            scrollTrigger: { trigger: h, start: 'top 95%', once: true },
          })
        })
        qa('[data-reveal]').forEach(el =>
          gsap.from(el, {
            y: 34,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 95%', once: true },
          }),
        )
        qa('[data-imgreveal]').forEach(el =>
          gsap.fromTo(
            el,
            { clipPath: 'inset(0 0 100% 0)' },
            {
              clipPath: 'inset(0 0 0% 0)',
              duration: 1.3,
              ease: 'power4.inOut',
              scrollTrigger: { trigger: el, start: 'top 85%' },
            },
          ),
        )
        qa('[data-parallax]').forEach(el =>
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          ),
        )

        // Hero: zoom do vídeo + fade do conteúdo
        gsap.to('[data-hero-media]', {
          scale: 1.14,
          ease: 'none',
          scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('[data-hero-content]', {
          opacity: 0,
          y: -50,
          ease: 'none',
          scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: '45% top', scrub: true },
        })

        // Linha pontilhada que "costura" ao rolar
        const stitch = q('[data-stitchline]')
        if (stitch)
          gsap.to(stitch, {
            width: '86%',
            ease: 'none',
            scrollTrigger: { trigger: stitch, start: 'top 95%', end: 'top 40%', scrub: true },
          })

        // Scrollytelling: categorias pinadas com scrub
        const scrolly = q('[data-scrolly]')
        if (scrolly) {
          const sframes = qa('[data-sframe]')
          const sintro = q('[data-sintro]')
          const stl = gsap.timeline({
            scrollTrigger: {
              trigger: scrolly,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.4,
              pin: q('[data-spin]'),
              pinSpacing: false,
            },
          })
          if (sintro) stl.to(sintro, { opacity: 0, scale: 0.94, y: -60, duration: 0.8, ease: 'none' }, 0.5)
          sframes.forEach((f, i) => {
            const img = f.querySelector('[data-sframe-img]')
            const txt = f.querySelector('[data-sframe-txt]')
            const t = 1 + i * 2
            stl.fromTo(f, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'none' }, t)
            if (img) stl.fromTo(img, { yPercent: 16, scale: 1.14 }, { yPercent: 0, scale: 1, duration: 2, ease: 'none' }, t)
            if (txt) stl.fromTo(txt, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'none' }, t + 0.15)
            if (i < sframes.length - 1)
              stl.to(f, { opacity: 0, yPercent: -7, scale: 0.965, duration: 0.45, ease: 'none' }, t + 1.55)
          })
        }

        // Etapas do processo acendem quando ativas
        qa('[data-step]').forEach(step => {
          ScrollTrigger.create({
            trigger: step,
            start: 'top 62%',
            end: 'bottom 30%',
            onToggle: self => {
              step.style.opacity = self.isActive ? '1' : '.35'
            },
          })
        })
        const prog = q('[data-progress]')
        if (prog)
          gsap.to(prog, {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: prog.parentElement, start: 'top 60%', end: 'bottom 40%', scrub: true },
          })

        // Galeria horizontal de detalhes
        const hsec = q('[data-hsec]')
        const track = q('[data-htrack]')
        if (hsec && track) {
          const dist = () => Math.max(0, track.scrollWidth - hsec.clientWidth + 80)
          gsap.to(track, {
            x: () => -dist(),
            ease: 'none',
            scrollTrigger: {
              trigger: hsec,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => '+=' + dist(),
              invalidateOnRefresh: true,
            },
          })
        }
      })

      // Segurança: nunca deixar texto invisível se um trigger falhar
      let sweeps = 0
      sweepTimer = setInterval(() => {
        qa('[data-line], [data-reveal]').forEach(el => {
          const r = el.getBoundingClientRect()
          if (r.top < innerHeight * 0.9 && r.bottom > 0) {
            const st = getComputedStyle(el)
            if (st.opacity === '0' || st.transform.includes('matrix'))
              gsap.to(el, { yPercent: 0, y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
          }
        })
        if (++sweeps > 10) clearInterval(sweepTimer)
      }, 1000)

      // Repulsão das ferramentas flutuantes
      const fsec = q('[data-floatsec]')
      const objs = qa('[data-float-obj]')
      if (fsec && objs.length && canHover) {
        const tos = objs.map(o => ({
          el: o,
          x: gsap.quickTo(o, 'x', { duration: 0.9, ease: 'power2.out' }),
          y: gsap.quickTo(o, 'y', { duration: 0.9, ease: 'power2.out' }),
        }))
        on(fsec, 'mousemove', ev => {
          const e = ev as MouseEvent
          tos.forEach(t => {
            const r = t.el.getBoundingClientRect()
            const cx = r.left + r.width / 2
            const cy = r.top + r.height / 2
            const dx = cx - e.clientX
            const dy = cy - e.clientY
            const d = Math.hypot(dx, dy) || 1
            if (d < 220) {
              const f = ((220 - d) / 220) * 70
              t.x((dx / d) * f)
              t.y((dy / d) * f)
            } else {
              t.x(0)
              t.y(0)
            }
          })
        })
        on(fsec, 'mouseleave', () => tos.forEach(t => { t.x(0); t.y(0) }))
      }

      // Botões magnéticos
      if (canHover)
        qa('[data-magnetic]').forEach(b => {
          const bx = gsap.quickTo(b, 'x', { duration: 0.4, ease: 'power3.out' })
          const by = gsap.quickTo(b, 'y', { duration: 0.4, ease: 'power3.out' })
          on(b, 'mousemove', ev => {
            const e = ev as MouseEvent
            const r = b.getBoundingClientRect()
            bx((e.clientX - r.left - r.width / 2) * 0.18)
            by((e.clientY - r.top - r.height / 2) * 0.3)
          })
          on(b, 'mouseleave', () => { bx(0); by(0) })
        })

      const refresh = setTimeout(() => ScrollTrigger.refresh(), 600)
      off.push(() => clearTimeout(refresh))
    }

    return () => {
      delete (window as unknown as { __lenis?: Lenis }).__lenis
      if (sweepTimer) clearInterval(sweepTimer)
      off.forEach(f => f())
      if (rafId) cancelAnimationFrame(rafId)
      lenis?.destroy()
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
}
