import { useScrollFX } from './hooks/useScrollFX'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { StitchDivider } from './components/StitchDivider'
import { Atelier } from './components/Atelier'
import { Categorias } from './components/Categorias'
import { Ferramentas } from './components/Ferramentas'
import { Processo } from './components/Processo'
import { Produtos } from './components/Produtos'
import { Personalizacao } from './components/Personalizacao'
import { Ajustes } from './components/Ajustes'
import { Detalhes } from './components/Detalhes'
import { Sobre } from './components/Sobre'
import { Avaliacoes } from './components/Avaliacoes'
import { Instagram } from './components/Instagram'
import { CtaFinal } from './components/CtaFinal'
import { Footer } from './components/Footer'
import { WhatsAppFab } from './components/WhatsAppFab'

export default function App() {
  useScrollFX()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StitchDivider />
        <Atelier />
        <Categorias />
        <Ferramentas />
        <Processo />
        <Produtos />
        <Personalizacao />
        <Ajustes />
        <Detalhes />
        <Sobre />
        <Avaliacoes />
        <Instagram />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
