import { useCallback } from 'react'
import { WA_SOB_MEDIDA } from '../data/site'

export function Hero() {
  // React não renderiza o atributo `muted` no HTML, o que bloqueia o autoplay
  // em navegadores mobile — força via DOM e dispara o play manualmente.
  const videoRef = useCallback((el: HTMLVideoElement | null) => {
    if (!el) return
    el.muted = true
    el.defaultMuted = true
    el.setAttribute('muted', '')
    // iOS antigo exige o atributo webkit-playsinline; sem inline o Safari
    // exibe o botão de play nativo sobre o vídeo.
    el.setAttribute('webkit-playsinline', '')
    el.removeAttribute('controls')
    const tryPlay = () => {
      if (el.paused) el.play().catch(() => {})
    }
    tryPlay()
    // Se o primeiro play falhar (aba em segundo plano, modo economia de energia,
    // mídia ainda carregando), tenta de novo quando o vídeo estiver pronto,
    // a aba voltar ao foco ou em qualquer primeira interação (toque, rolagem, clique).
    el.addEventListener('loadedmetadata', tryPlay, { once: true })
    el.addEventListener('canplay', tryPlay, { once: true })
    el.addEventListener('canplaythrough', tryPlay, { once: true })
    document.addEventListener('visibilitychange', tryPlay)
    window.addEventListener('touchstart', tryPlay, { once: true, passive: true })
    window.addEventListener('pointerdown', tryPlay, { once: true, passive: true })
    window.addEventListener('scroll', tryPlay, { once: true, passive: true })
  }, [])

  return (
    <section id="topo" className="hero" data-hero="1">
      <div className="hero-media" data-hero-media="1">
        <video
          ref={videoRef}
          src="/video/atelier-hero.mp4"
          poster="/images/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controls={false}
          preload="auto"
          aria-label="Vídeo do atelier: mãos alisando tecido de linho cru sobre a mesa"
        />
        <div className="hero-overlay-x" />
        <div className="hero-overlay-y" />
      </div>
      <span aria-hidden="true" className="fiber fiber-1" />
      <span aria-hidden="true" className="fiber fiber-2" />
      <span aria-hidden="true" className="fiber fiber-3" />
      <div className="hero-content" data-hero-content="1">
        <p className="eyebrow">Atelier de costura artesanal — São Paulo</p>
        <h1 className="heading hero-title" data-lines="1">
          <span className="line-mask"><span className="line" data-line="1">Feito à mão.</span></span>
          <span className="line-mask">
            <span className="line" data-line="1">Pensado para <em>durar</em>.</span>
          </span>
        </h1>
        <p className="hero-lead" data-reveal="1">
          Peças artesanais, acessórios e projetos em tecido criados um a um no atelier Baunilha Bags.
        </p>
        <div className="hero-ctas" data-reveal="1">
          <a href="#produtos" className="btn btn-dark" data-magnetic="1">Conhecer as peças</a>
          <a href={WA_SOB_MEDIDA} target="_blank" rel="noopener noreferrer" className="btn btn-outline" data-magnetic="1">
            Pedir algo sob medida
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="hero-scroll-hint">
        <span className="mono-note">Role para entrar no atelier</span>
        <span className="dash" />
      </div>
    </section>
  )
}
