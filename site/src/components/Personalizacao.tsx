import { useState } from 'react'
import { IDEA_OPTIONS, WA_MAIN, waLink } from '../data/site'

export function Personalizacao() {
  const [selected, setSelected] = useState<number | null>(null)
  const ctaHref = selected === null ? WA_MAIN : waLink(IDEA_OPTIONS[selected].message)

  return (
    <section id="personalizacao" className="personalizacao">
      <div className="personalizacao-inner">
        <p className="eyebrow">05 / Sob medida</p>
        <h2 className="heading personalizacao-title" data-lines="1">
          <span className="line-mask"><span className="line" data-line="1">Não encontrou o que imaginou?</span></span>
          <span className="line-mask">
            <span className="line" data-line="1"><em>Melhor ainda.</em></span>
          </span>
        </h2>
        <p className="personalizacao-sub" data-reveal="1">Conte sua ideia para a Valéria.</p>
        <p className="personalizacao-lead" data-reveal="1">
          Podemos adaptar medidas, tecidos, cores, divisórias, alças, formatos e detalhes para criar algo especialmente
          para você.
        </p>
        <div className="personalizacao-figures">
          <figure>
            <img src="/images/necessaires.webp" alt="Nécessaire sob medida em lona cream" loading="lazy" />
            <figcaption>Medidas do seu jeito</figcaption>
          </figure>
          <figure>
            <img src="/images/forro-etiqueta.webp" alt="Forro e divisórias internas escolhidos para cada projeto" loading="lazy" />
            <figcaption>Forro &amp; divisórias</figcaption>
          </figure>
          <figure>
            <img src="/images/linho-textura.webp" alt="Tecidos e cores escolhidos com você" loading="lazy" />
            <figcaption>Tecidos &amp; cores</figcaption>
          </figure>
        </div>
        <p className="personalizacao-hint">Escolha um ponto de partida — a mensagem já chega pronta no WhatsApp</p>
        <div role="group" aria-label="Escolha o tipo de pedido" className="idea-group">
          {IDEA_OPTIONS.map((idea, i) => (
            <button
              key={idea.label}
              type="button"
              className={`idea-btn${selected === i ? ' active' : ''}`}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              {idea.label}
            </button>
          ))}
        </div>
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="idea-cta" data-magnetic="1">
          Conversar com a Valéria
        </a>
      </div>
    </section>
  )
}
