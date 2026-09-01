import { INSTAGRAM_IMAGES, INSTAGRAM_URL } from '../data/site'

export function Instagram() {
  return (
    <section id="instagram" className="section instagram">
      <div className="instagram-inner">
        <div className="instagram-head">
          <h2 className="heading instagram-title" data-lines="1">
            <span className="line-mask">
              <span className="line" data-line="1">Do atelier para o <em>seu feed</em>.</span>
            </span>
          </h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" data-magnetic="1">
            Acompanhar no Instagram
          </a>
        </div>
        <div className="instagram-grid">
          {INSTAGRAM_IMAGES.map(item => (
            <a
              key={item.image + item.alt}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bastidores no Instagram"
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
