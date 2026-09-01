import { PRODUCTS, STORE_URL } from '../data/site'

export function Produtos() {
  return (
    <section id="produtos" className="section produtos">
      <div className="produtos-inner">
        <div className="produtos-head">
          <div>
            <p className="eyebrow">Shop / Peças disponíveis</p>
            <h2 className="heading produtos-title" data-lines="1">
              <span className="line-mask"><span className="line" data-line="1">Feitos à mão.</span></span>
              <span className="line-mask">
                <span className="line" data-line="1">Prontos para encontrar <em>alguém</em>.</span>
              </span>
            </h2>
          </div>
          <p className="mono-note">Peças ilustrativas — loja em breve</p>
        </div>
        <div className="produtos-grid">
          {PRODUCTS.map(prod => (
            <article className="prod-card" key={prod.name}>
              <a href={STORE_URL} className="prod-media" aria-label={`Ver ${prod.name} na loja`}>
                <img className="prod-front" src={prod.front} alt={prod.alt} loading="lazy" />
                <img className="prod-back" src={prod.back} alt="" aria-hidden="true" loading="lazy" />
              </a>
              <div className="prod-info">
                <p className="prod-cat">{prod.category}</p>
                <h3>{prod.name}</h3>
                <p className="prod-price">{prod.price}</p>
              </div>
              <div className="prod-actions">
                <a href={STORE_URL} className="btn btn-outline">Ver peça</a>
                <a href={STORE_URL} className="btn btn-dark">Comprar</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
