const WHATSAPP_NUMBER = '5511958348764'

export const INSTAGRAM_URL = 'https://www.instagram.com/baunilha_bags/'
export const STORE_URL = '#produtos'

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA_MAIN = waLink('Olá, Valéria! Vi o site da Baunilha Bag e gostaria de conversar.')
export const WA_SOB_MEDIDA = waLink('Olá, Valéria! Vi o site da Baunilha Bag e gostaria de pedir uma peça sob medida.')
export const WA_AVALIACAO = waLink('Olá, Valéria! Tenho uma peça que precisa de ajuste ou reparo e gostaria de uma avaliação.')

export interface Category {
  index: string
  tag: string
  title: string
  image: string
  alt: string
  href: string
}

export const CATEGORIES: Category[] = [
  { index: '01', tag: 'Femininas & masculinas', title: 'Bolsas', image: '/images/bolsas.webp', alt: 'Bolsa artesanal estruturada em lona marfim', href: '#produtos' },
  { index: '02', tag: 'Rotina & viagem', title: 'Nécessaires', image: '/images/necessaires.webp', alt: 'Nécessaire em lona cream com zíper caramelo', href: '#produtos' },
  { index: '03', tag: 'Acolchoado', title: 'Porta-notebook', image: '/images/porta-notebook.webp', alt: 'Porta-notebook acolchoado em matelassê cream', href: '#produtos' },
  { index: '04', tag: 'Casa & estúdio', title: 'Organizadores', image: '/images/organizadores.webp', alt: 'Organizadores artesanais em tecido', href: '#produtos' },
  { index: '05', tag: 'Sóbrias & funcionais', title: 'Peças masculinas', image: '/images/masculinas.webp', alt: 'Nécessaire masculina em lona encerada cacau', href: '#produtos' },
  { index: '06', tag: 'Roupas & bolsas', title: 'Ajustes & reparos', image: '/images/ajustes-reparos.webp', alt: 'Reparo artesanal de peça em tecido', href: '#ajustes' },
  { index: '07', tag: 'Do seu jeito', title: 'Projetos sob medida', image: '/images/linho-textura.webp', alt: 'Tecido de linho natural para projetos sob medida', href: '#personalizacao' },
  { index: '08', tag: 'Séries pequenas', title: 'Edições especiais', image: '/images/forro-etiqueta.webp', alt: 'Forro listrado com etiqueta costurada de edição especial', href: '#personalizacao' },
]

export interface Product {
  category: string
  name: string
  price: string
  front: string
  back: string
  alt: string
}

export const PRODUCTS: Product[] = [
  {
    category: 'Acessórios / 01',
    name: 'Nécessaire Siena',
    price: 'R$ 89',
    front: '/images/necessaires.webp',
    back: '/images/forro-etiqueta.webp',
    alt: 'Nécessaire Siena em lona cream com zíper caramelo',
  },
  {
    category: 'Bolsas / 02',
    name: 'Bolsa Aurora',
    price: 'R$ 189',
    front: '/images/bolsas.webp',
    back: '/images/linho-textura.webp',
    alt: 'Bolsa Aurora estruturada em lona marfim com alças cacau',
  },
  {
    category: 'Trabalho / 03',
    name: 'Porta-notebook Verona',
    price: 'R$ 149',
    front: '/images/porta-notebook.webp',
    back: '/images/costura-reta.webp',
    alt: 'Porta-notebook Verona acolchoado em matelassê cream',
  },
  {
    category: 'Masculino / 04',
    name: 'Nécessaire Cedro',
    price: 'R$ 119',
    front: '/images/masculinas.webp',
    back: '/images/forro-etiqueta.webp',
    alt: 'Nécessaire Cedro masculina em lona encerada cacau',
  },
]

export interface ProcessStep {
  label: string
  quote: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  { label: 'Etapa 01 — Ideia', quote: '“Você conta o que precisa. A gente começa a imaginar.”' },
  { label: 'Etapa 02 — Material', quote: '“Tecidos, cores, estruturas e detalhes são escolhidos para cada projeto.”' },
  { label: 'Etapa 03 — Corte', quote: '“O tecido começa a ganhar forma.”' },
  { label: 'Etapa 04 — Costura', quote: '“Cada parte encontra seu lugar.”' },
  { label: 'Etapa 05 — Acabamento', quote: '“Detalhes que fazem uma peça artesanal parecer simples — mesmo quando não é.”' },
  { label: 'Etapa 06 — Pronto', quote: '“Uma peça criada especialmente para acompanhar você.”' },
]

export const IDEA_OPTIONS = [
  { label: 'Quero um porta-notebook', message: 'Olá, Valéria! Vi o site da Baunilha Bag e gostaria de conversar sobre um porta-notebook personalizado.' },
  { label: 'Quero uma bolsa', message: 'Olá, Valéria! Vi o site da Baunilha Bag e gostaria de conversar sobre uma bolsa personalizada.' },
  { label: 'Quero uma nécessaire', message: 'Olá, Valéria! Vi o site da Baunilha Bag e gostaria de conversar sobre uma nécessaire personalizada.' },
  { label: 'Quero adaptar uma peça', message: 'Olá, Valéria! Vi o site da Baunilha Bag e gostaria de adaptar uma peça que já tenho.' },
  { label: 'Preciso de um ajuste', message: 'Olá, Valéria! Vi o site da Baunilha Bag e preciso de um ajuste em uma peça.' },
  { label: 'Tenho outra ideia', message: 'Olá, Valéria! Vi o site da Baunilha Bag e tenho uma ideia diferente para conversar com você.' },
]

export const REPAIR_SERVICES = [
  'Ajustes em roupas',
  'Pequenos reparos',
  'Reforço de costura',
  'Troca de zíper',
  'Reparos em produtos de tecido',
  'Adaptações',
  'Reformas simples de peças',
]

export const DETAIL_FIGURES = [
  { image: '/images/costura-reta.webp', alt: 'Macro da costura reta em linha caramelo', caption: 'Costura / ponto reto' },
  { image: '/images/ziper-latao.webp', alt: 'Macro do zíper de latão sobre matelassê marfim', caption: 'Zíper / ferragem' },
  { image: '/images/forro-etiqueta.webp', alt: 'Macro do forro listrado e etiqueta costurada', caption: 'Forro / etiqueta' },
  { image: '/images/linho-textura.webp', alt: 'Macro da textura do linho natural', caption: 'Tecido / textura' },
]

export const INSTAGRAM_IMAGES = [
  { image: '/images/costura-reta.webp', alt: 'Detalhe de costura' },
  { image: '/images/atelier-costura.webp', alt: 'Mãos costurando' },
  { image: '/images/ferramenta-2.webp', alt: 'Carretel de linha caramelo' },
  { image: '/images/linho-textura.webp', alt: 'Textura de linho' },
  { image: '/images/forro-etiqueta.webp', alt: 'Forro e etiqueta' },
  { image: '/images/organizadores.webp', alt: 'Organizadores em tecido' },
]

export const FLOAT_OBJECTS = [
  { image: '/images/ferramenta-1.webp', className: 'float-obj float-obj-1', anim: 'a' },
  { image: '/images/ferramenta-2.webp', className: 'float-obj float-obj-2', anim: 'b' },
  { image: '/images/ferramenta-3.webp', className: 'float-obj float-obj-3', anim: 'a' },
  { image: '/images/ajustes-reparos.webp', className: 'float-obj float-obj-4', anim: 'b' },
  { image: '/images/ferramenta-4.webp', className: 'float-obj float-obj-5', anim: 'a' },
  { image: '/images/ferramenta-4.webp', className: 'float-obj float-obj-6', anim: 'a' },
]

export const TESTIMONIAL_PLACEHOLDERS = [
  'A primeira história contada por um cliente vai morar aqui.',
  'Recebeu uma peça da Baunilha Bag? Conte para a gente.',
  'Avaliações reais, uma peça de cada vez.',
]
