import { PROCESS_STEPS } from '../data/site'

export function Processo() {
  return (
    <section id="processo" className="section processo">
      <div className="processo-grid">
        <div>
          <div className="processo-sticky">
            <p className="eyebrow">04 / Processo</p>
            <h2 className="heading processo-title" data-lines="1">
              <span className="line-mask"><span className="line" data-line="1">Da ideia à</span></span>
              <span className="line-mask">
                <span className="line" data-line="1"><em>última linha</em>.</span>
              </span>
            </h2>
            <div className="processo-figure img-reveal" data-imgreveal="1">
              <img
                data-parallax="1"
                src="/images/costura-reta.webp"
                alt="Costura reta em linha caramelo atravessando tecido cru"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="processo-steps">
          <div className="processo-rail" aria-hidden="true" />
          <div className="processo-progress" data-progress="1" aria-hidden="true" />
          <div className="processo-list">
            {PROCESS_STEPS.map(step => (
              <div className="processo-step" data-step="1" key={step.label}>
                <p className="step-label">{step.label}</p>
                <p className="step-quote">{step.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
