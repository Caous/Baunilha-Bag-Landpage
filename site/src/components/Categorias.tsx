import { CATEGORIES } from '../data/site'

export function Categorias() {
  return (
    <section id="categorias" className="scrolly" data-scrolly="1">
      <div className="scrolly-pin" data-spin="1">
        <div className="scrolly-intro" data-sintro="1">
          <p className="eyebrow">02 / O que fazemos</p>
          <h2 className="heading">
            Costura sem catálogo de <em>possibilidades</em>.
          </h2>
          <p className="lead">Do acessório que acompanha sua rotina ao projeto que existe apenas na sua cabeça.</p>
          <p className="mono-note">Role para percorrer as oito frentes do atelier</p>
        </div>
        {CATEGORIES.map(cat => (
          <div className="sframe" data-sframe="1" key={cat.index}>
            <div className="sframe-img" data-sframe-img="1">
              <img src={cat.image} alt={cat.alt} loading="lazy" />
            </div>
            <div className="sframe-txt" data-sframe-txt="1">
              <p className="idx">{cat.index} / 08 — {cat.tag}</p>
              <h3>{cat.title}</h3>
              <a href={cat.href} className="explore">Explorar →</a>
            </div>
            <p className="sframe-brand">Baunilha Bag — atelier</p>
          </div>
        ))}
      </div>
    </section>
  )
}
