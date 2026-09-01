# Baunilha Bag — Landing Page

Landing page do atelier de costura artesanal **Baunilha Bag** (São Paulo), da Valéria: bolsas, nécessaires, porta-notebooks, organizadores, peças sob medida e serviços de ajustes & reparos, com atendimento direto pelo WhatsApp.

O site foi originalmente desenhado como um canvas de design (`Baunilha Bag.dc.html`) e foi convertido em um projeto **React + TypeScript (Vite)** versionável e pronto para deploy na **Vercel**, mantendo o mesmo conteúdo, imagens e animações.

## Estrutura do repositório

```
├── Baunilha Bag.dc.html   # Design original (referência)
├── support.js             # Runtime do canvas de design (referência)
├── uploads/               # Imagens coladas no canvas (referência)
└── site/                  # ✅ Projeto React + TypeScript (deploy)
    ├── index.html         # HTML com SEO completo (meta, OG, JSON-LD)
    ├── vercel.json        # Headers de cache para assets
    ├── public/
    │   ├── images/        # Imagens otimizadas em WebP
    │   ├── video/         # Vídeo do hero
    │   ├── robots.txt
    │   └── sitemap.xml
    ├── scripts/
    │   └── optimize-images.mjs  # Conversão PNG → WebP (sharp)
    └── src/
        ├── components/    # Um componente por seção da página
        ├── data/site.ts   # Conteúdo: produtos, categorias, links de WhatsApp
        ├── hooks/useScrollFX.ts  # Animações GSAP + ScrollTrigger + Lenis
        └── styles/global.css
```

## Rodando localmente

```bash
cd site
npm install
npm run dev       # http://localhost:5173
```

Outros comandos:

```bash
npm run build     # Type-check (tsc) + build de produção em dist/
npm run preview   # Serve o build de produção localmente
```

## Deploy na Vercel

1. Importe o repositório na [Vercel](https://vercel.com/new).
2. Em **Root Directory**, selecione `site`.
3. O framework **Vite** é detectado automaticamente (build `npm run build`, output `dist/`). Nada mais a configurar.

Após o primeiro deploy, atualize o domínio real (se for diferente de `baunilha-bag.vercel.app`) nos seguintes pontos:

- `site/index.html` — `canonical`, `og:url`, `og:image`, `twitter:image` e JSON-LD
- `site/public/robots.txt` — URL do sitemap
- `site/public/sitemap.xml` — `<loc>`

## Conteúdo e contato

- Número do WhatsApp, links do Instagram, produtos, preços e textos ficam centralizados em [site/src/data/site.ts](site/src/data/site.ts).
- As mensagens pré-preenchidas do WhatsApp (geral, sob medida, avaliação de ajuste e as opções da seção "Sob medida") também estão nesse arquivo.

## SEO implementado

- `<html lang="pt-BR">`, title e meta description descritivos com palavras-chave locais
- Open Graph + Twitter Card com imagem
- JSON-LD `LocalBusiness` com endereço, Instagram e ofertas dos produtos
- `robots.txt` + `sitemap.xml`
- Hierarquia semântica: um único `h1` (hero), `h2` por seção, `h3` em cards
- Imagens com `alt` descritivo, `loading="lazy"` abaixo da dobra e convertidas para WebP (~100 MB → ~2 MB no total)
- Cache imutável de 1 ano para imagens/vídeo/assets via `vercel.json`

## Acessibilidade e performance

- `prefers-reduced-motion` desativa todas as animações
- Navegação por teclado com `focus-visible` estilizado
- Vídeo do hero com `muted`/`playsInline`/`preload="metadata"` e poster
- Animações (GSAP, ScrollTrigger, Lenis) instaladas via npm — sem CDNs de terceiros

## Otimizando novas imagens

Coloque PNGs em `site/public/images/` e rode:

```bash
cd site
node scripts/optimize-images.mjs
```

O script redimensiona para no máximo 1600px de largura, converte para WebP (qualidade 80) e remove o PNG original.
