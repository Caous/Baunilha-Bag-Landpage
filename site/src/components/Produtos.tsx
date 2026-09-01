import { useState } from 'react'
import { PRODUCTS, waBuy, type Product } from '../data/site'
import { ProductModal } from './ProductModal'

export function Produtos() {
  const [selected, setSelected] = useState<Product | null>(null)

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
              <button
                type="button"
                className="prod-media"
                aria-label={`Ver fotos da peça ${prod.name}`}
                onClick={() => setSelected(prod)}
              >
                <img className="prod-front" src={prod.front} alt={prod.alt} loading="lazy" />
                <img className="prod-back" src={prod.back} alt="" aria-hidden="true" loading="lazy" />
              </button>
              <div className="prod-info">
                <p className="prod-cat">{prod.category}</p>
                <h3>{prod.name}</h3>
                <p className="prod-price">{prod.price}</p>
              </div>
              <div className="prod-actions">
                <button type="button" className="btn btn-outline" onClick={() => setSelected(prod)}>
                  Ver peça
                </button>
                <a
                  href={waBuy(prod.name, prod.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Comprar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
