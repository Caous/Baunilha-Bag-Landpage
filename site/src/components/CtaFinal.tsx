import { WA_MAIN } from '../data/site'

export function CtaFinal() {
  return (
    <section className="cta-final">
      <h2 className="heading cta-final-title" data-lines="1">
        <span className="line-mask"><span className="line" data-line="1">Tem uma ideia?</span></span>
        <span className="line-mask">
          <span className="line" data-line="1">Vamos colocar no <em>tecido</em>.</span>
        </span>
      </h2>
      <p className="cta-final-lead" data-reveal="1">
        Produtos prontos, peças personalizadas, ajustes ou uma ideia completamente diferente.
      </p>
      <div className="cta-final-actions" data-reveal="1">
        <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" className="btn btn-dark" data-magnetic="1">
          Conversar com a Valéria
        </a>
        <a href="#produtos" className="btn btn-outline" data-magnetic="1">Ver produtos</a>
      </div>
      <p className="mono-note">Atendimento direto pelo WhatsApp</p>
    </section>
  )
}
