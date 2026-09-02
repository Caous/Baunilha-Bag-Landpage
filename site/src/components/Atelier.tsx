export function Atelier() {
  return (
    <section id="atelier" className="section atelier">
      <div className="atelier-grid">
        <div>
          <p className="eyebrow">01 / O Atelier</p>
          <h2 className="heading atelier-title" data-lines="1">
            <span className="line-mask"><span className="line" data-line="1">Algumas ideias começam no papel.</span></span>
            <span className="line-mask">
              <span className="line" data-line="1">As nossas começam no <em>tecido</em>.</span>
            </span>
          </h2>
          <p className="body-text" data-reveal="1">
            Na Baunilha Bags, cada peça passa pelas mãos da Valéria: escolha do tecido, corte, estrutura, costura e
            acabamento.
          </p>
          <p className="body-text" data-reveal="1" style={{ marginBottom: 6 }}>
            Não existe produção em massa.
          </p>
          <p className="body-text" data-reveal="1" style={{ fontWeight: 400, color: 'var(--ink)', margin: 0 }}>
            Existem peças feitas uma a uma.
          </p>
        </div>
        <div className="atelier-figure">
          <div className="img-reveal" data-imgreveal="1">
            <img
              data-parallax="1"
              src="/images/atelier-costura.webp"
              alt="Mãos da Valéria guiando o tecido na máquina de costura"
              loading="lazy"
            />
          </div>
          <div className="atelier-tags top-left" aria-hidden="true">
            <span className="tag-chip">CORTE</span>
            <span className="tag-chip">COSTURA</span>
          </div>
          <div className="atelier-tags bottom-right" aria-hidden="true">
            <span className="tag-chip">ACABAMENTO</span>
            <span className="tag-chip dark">FEITO À MÃO</span>
          </div>
        </div>
      </div>
    </section>
  )
}
