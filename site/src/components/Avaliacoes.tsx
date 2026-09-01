import { TESTIMONIAL_PLACEHOLDERS } from '../data/site'

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="section avaliacoes">
      <div className="avaliacoes-inner">
        <p className="eyebrow">09 / Quem recebeu</p>
        <h2 className="heading avaliacoes-title" data-lines="1">
          <span className="line-mask"><span className="line" data-line="1">Feito para alguém.</span></span>
          <span className="line-mask">
            <span className="line" data-line="1">Contado por quem <em>recebeu</em>.</span>
          </span>
        </h2>
        <div className="avaliacoes-grid">
          {TESTIMONIAL_PLACEHOLDERS.map(text => (
            <div className="avaliacao-card" data-reveal="1" key={text}>
              <p className="meta">Nome — Produto — Cidade</p>
              <p className="quote">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
