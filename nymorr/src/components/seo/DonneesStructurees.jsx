import { FAQ } from '../../data/faq.js'
import { PACKS } from '../../data/packs.js'
import { DEVISE } from '../../data/landing.js'
import logo from '../../assets/logo-art-nymorr.webp'

// Adresse injectée par Vite depuis site.config.js.
const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

export default function DonneesStructurees() {
  // Seules les réponses complètes (sans [à compléter]) sont envoyées à Google
  const faq = FAQ.filter((f) => !f.r.includes('['))
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organisation`,
        name: 'Art Nymorr',
        email: 'info@nymorr.com',
        telephone: '+212688023241',
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}${logo}`,
        description: 'Tableaux décoratifs abstraits et africains, proposés en packs de 1, 2 ou 3 tableaux.',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#site`,
        url: `${SITE_URL}/`,
        name: 'Art Nymorr',
        inLanguage: 'fr',
        publisher: { '@id': `${SITE_URL}/#organisation` },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#page`,
        url: `${SITE_URL}/`,
        name: 'Tableaux décoratifs & packs muraux | Art Nymorr',
        inLanguage: 'fr',
        isPartOf: { '@id': `${SITE_URL}/#site` },
        about: { '@id': `${SITE_URL}/#organisation` },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 },
      },
      // Chaque pack = un produit avec son prix (MAD)
      ...PACKS.map((p) => ({
        '@type': 'Product',
        '@id': `${SITE_URL}/#${p.id}`,
        name: `${p.nom} — ${p.nombre} décoratifs`,
        description: `${p.description} Format : ${p.format}.`,
        image: `${SITE_URL}${p.photo}`,
        brand: { '@type': 'Brand', name: 'Art Nymorr' },
        offers: {
          '@type': 'Offer',
          price: String(p.prix),
          priceCurrency: DEVISE,
          url: `${SITE_URL}/#packs`,
        },
      })),
      ...(faq.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.r },
              })),
            },
          ]
        : []),
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
