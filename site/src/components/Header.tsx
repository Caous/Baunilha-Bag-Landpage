import { WA_MAIN } from '../data/site'

export function Header() {
  return (
    <header className="site-header" data-header="1">
      <a href="#topo" className="site-logo">Baunilha Bag</a>
      <nav className="site-nav" aria-label="Navegação principal">
        <a href="#produtos" className="nav-link">Peças</a>
        <a href="#personalizacao" className="nav-link">Sob medida</a>
        <a href="#ajustes" className="nav-link">Ajustes</a>
        <a href="#sobre" className="nav-link">Sobre</a>
        <a href={WA_MAIN} target="_blank" rel="noopener noreferrer" className="nav-cta" data-magnetic="1">
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
