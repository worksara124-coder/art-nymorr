// Pré-rendu SEO : injecte le HTML complet de la page dans dist/index.html
// et génère robots.txt + sitemap.xml à partir de l'adresse définie dans site.config.js.
import fs from 'node:fs'
import { SITE_URL } from './site.config.js'

const site = SITE_URL.replace(/\/$/, '')

if (!site || site.includes('votre-domaine')) {
  console.warn('\n⚠  Adresse du site non définie : remplace « votre-domaine.com » dans site.config.js avant la mise en ligne.\n')
}

const { render } = await import('./dist-ssr/entry-server.js')

const fichier = 'dist/index.html'
const html = fs.readFileSync(fichier, 'utf8')
if (!html.includes('<div id="root"></div>')) {
  throw new Error('Conteneur <div id="root"></div> introuvable dans dist/index.html')
}
fs.writeFileSync(fichier, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))

fs.writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)

const aujourdhui = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}/</loc>
    <lastmod>${aujourdhui}</lastmod>
  </url>
</urlset>
`,
)

fs.rmSync('dist-ssr', { recursive: true, force: true })
console.log('✓ Page pré-rendue + robots.txt + sitemap.xml générés dans dist/')
