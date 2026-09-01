import { DETAIL_FIGURES } from '../data/site'

export function Detalhes() {
  return (
    <section id="detalhes" className="detalhes" data-hsec="1">
      <div className="detalhes-inner">
        <div className="detalhes-head">
          <p className="eyebrow">07 / Detalhes</p>
          <h2 className="heading detalhes-title" data-lines="1">
            <span className="line-mask"><span className="line" data-line="1">A qualidade mora onde</span></span>
            <span className="line-mask">
              <span className="line" data-line="1">quase <em>ninguém olha</em>.</span>
            </span>
          </h2>
        </div>
        <div className="detalhes-track" data-htrack="1">
          {DETAIL_FIGURES.map(fig => (
            <figure key={fig.caption}>
              <img src={fig.image} alt={fig.alt} loading="lazy" />
              <figcaption>{fig.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
