import { FLOAT_OBJECTS } from '../data/site'

export function Ferramentas() {
  return (
    <section className="floatsec" data-floatsec="1">
      {FLOAT_OBJECTS.map((obj, i) => (
        <div key={i} className={`${obj.className} anim-${obj.anim}`} data-float-obj="1">
          <img src={obj.image} alt="" aria-hidden="true" loading="lazy" />
        </div>
      ))}
      <div className="floatsec-title">
        <p className="eyebrow">03 / Ferramentas</p>
        <h2 className="heading" data-lines="1">
          <span className="line-mask"><span className="line" data-line="1">Tudo começa com algumas ferramentas</span></span>
          <span className="line-mask">
            <span className="line" data-line="1">e uma <em>boa ideia</em>.</span>
          </span>
        </h2>
      </div>
    </section>
  )
}
