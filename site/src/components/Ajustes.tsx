import { REPAIR_SERVICES, WA_AVALIACAO } from '../data/site'

export function Ajustes() {
  return (
    <section id="ajustes" className="section ajustes">
      <div className="ajustes-grid">
        <div>
          <p className="eyebrow">06 / Ajustes &amp; reparos</p>
          <h2 className="heading ajustes-title" data-lines="1">
            <span className="line-mask"><span className="line" data-line="1">Às vezes você não precisa de algo novo.</span></span>
            <span className="line-mask">
              <span className="line" data-line="1">Só precisa <em>cuidar melhor</em> do que já tem.</span>
            </span>
          </h2>
          <p className="body-text" data-reveal="1" style={{ marginBottom: 30 }}>
            Aquela bolsa com a alça gasta, o zíper que travou, a calça que só precisa de uma barra: traga para o
            atelier. A Valéria avalia a peça e devolve com a mesma costura cuidadosa das peças novas.
          </p>
          <a href={WA_AVALIACAO} target="_blank" rel="noopener noreferrer" className="btn btn-outline" data-magnetic="1">
            Pedir uma avaliação
          </a>
          <p className="ajustes-note">Orçamento pelo WhatsApp, após avaliação da peça</p>
          <div className="ajustes-photos">
            <img src="/images/ziper-latao.webp" alt="Troca de zíper com ferragem de latão" loading="lazy" />
            <img src="/images/costura-reta.webp" alt="Reforço de costura em ponto reto" loading="lazy" />
          </div>
        </div>
        <ul className="ajustes-list">
          {REPAIR_SERVICES.map((service, i) => (
            <li data-reveal="1" key={service}>
              {service}
              <span>{String(i + 1).padStart(2, '0')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
