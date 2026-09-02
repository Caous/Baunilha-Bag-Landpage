export function Sobre() {
  return (
    <section id="sobre" className="section sobre">
      <div className="sobre-grid">
        <div className="sobre-figure img-reveal" data-imgreveal="1">
          <img
            data-parallax="1"
            src="/images/valeria.webp"
            alt="Valéria examinando um tecido marfim no atelier"
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow">08 / Sobre</p>
          <h2 className="heading sobre-title" data-lines="1">
            <span className="line-mask"><span className="line" data-line="1">Por trás de cada peça,</span></span>
            <span className="line-mask">
              <span className="line" data-line="1">existem <em>duas mãos</em>.</span>
            </span>
          </h2>
          <p className="body-text" data-reveal="1">Baunilha Bags é o atelier da Valéria.</p>
          <p className="body-text" data-reveal="1">
            Um espaço onde tecido, experiência e cuidado se transformam em peças feitas para acompanhar pessoas de
            verdade.
          </p>
          <p className="body-text" data-reveal="1" style={{ fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
            Cada projeto passa pelas mãos dela — do primeiro corte ao último acabamento.
          </p>
        </div>
      </div>
    </section>
  )
}
