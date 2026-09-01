import { INSTAGRAM_URL, WA_MAIN } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <a href="#topo" className="footer-logo">Baunilha Bag</a>
        <nav aria-label="Rodapé">
          <a href="#produtos">Produtos</a>
          <a href="#personalizacao">Sob medida</a>
          <a href="#ajustes">Ajustes</a>
          <a href="#sobre">Sobre</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={WA_MAIN} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
        <div className="footer-meta">
          <span className="made">Feito à mão</span>
          <span className="copy">© {new Date().getFullYear()} Baunilha Bag</span>
        </div>
      </div>
    </footer>
  )
}
