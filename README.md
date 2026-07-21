# Método HMP Landing Page

Landing page profissional para o Método HMP — Hipopressivos, Mobilidade e Posturais.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Links comerciais

Edite os placeholders em `src/lib/site.ts`:

- `amazon`
- `whatsapp`
- `course`
- `leadList`

## Estrutura

- `src/app/page.tsx`: composição da landing page.
- `src/app/*/page.tsx`: páginas institucionais da marca.
- `src/components`: seções reutilizáveis.
- `src/lib/site.ts`: conteúdo, links e listas da página.
- `src/content/locales/pt-BR.ts`: navegação, footer e conteúdo institucional em português.
- `public/hmp-body-map.svg`: asset visual local do método.

## Arquitetura internacional

O conteúdo institucional foi separado da camada visual em `src/content/locales`.
Para futuras traduções, crie arquivos como:

- `src/content/locales/en.ts`
- `src/content/locales/es.ts`

Depois, conecte seleção de locale por rota, domínio ou middleware conforme a estratégia comercial.

## Páginas criadas

- `/`
- `/metodo`
- `/autor`
- `/livro`
- `/curso-online`
- `/curso-presencial`
- `/eventos`
- `/blog`
- `/artigos-cientificos`
- `/depoimentos`
- `/faq`
- `/contato`
- `/politica-de-privacidade`
- `/termos-de-uso`
- `/direitos-autorais`

## Substituir placeholders

- Hero/video institucional: `src/components/hero.tsx`
- Acervo visual: `mediaPlaceholders` em `src/lib/site.ts`
- Resultados Reais: `realResults` em `src/lib/site.ts`
- Depoimentos: `testimonials` em `src/lib/site.ts`

## SEO

- Metadados principais: `src/app/layout.tsx`
- Dados estruturados: `src/app/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
