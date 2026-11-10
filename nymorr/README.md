# Nymorr — landing page Art Nymorr (React + Vite)

Landing page de vente des packs de tableaux Art Nymorr, construite selon le guide SYO WEB
« Anatomie d’une landing page ». Tous les boutons d’action ouvrent un **formulaire de commande en popup**.

## Démarrer

```bash
npm install
npm run dev
```

## Organisation du code

- `src/pages/Home.jsx` : assemble les sections dans l’ordre du guide (header → hero → bandeau → problème/agitation → solution → collection → témoignages → packs → FAQ → CTA final → footer).
- `src/context/CommandeContext.jsx` : pack sélectionné + ouverture/fermeture de la popup, partagés dans toute la page.
- `src/components/commande/` :
  - `ModalCommande.jsx` : la popup (choix du pack, prénom, téléphone, erreurs, confirmation). Accessible : Échap pour fermer, focus gardé dans la popup, retour au bouton d’origine.
  - `BoutonCommande.jsx` : bouton qui ouvre la popup, avec un pack présélectionné si besoin (`<BoutonCommande pack="galerie">`).
  - `BarreMobile.jsx` : barre « Choisir mon pack » collée en bas de l’écran sur mobile.
- `src/components/sections/` : Hero, Bandeau, Probleme, Solution (+ Etapes), Collection, Avis, Packs, Faq, CtaFinal.
- `src/components/layout/` : Header et Footer. `src/components/ui/` : Cadre, Champ, Icons, Reassurance, PreuveSociale.
- `src/components/seo/DonneesStructurees.jsx` : données structurées (organisation, packs avec prix, FAQ).
- `src/data/` : contenu modifiable sans toucher aux composants — `packs.js` (prix, formats), `oeuvres.js`, `etapes.js`, `faq.js`, `landing.js` (prix de départ, chiffres du bandeau, douleurs, réassurance).
- `src/hooks/useCommande.js` + `src/utils/validerCommande.js` : état et validation du formulaire.
- `src/styles/landing.css` : styles de la page. `src/index.css` : couleurs et polices de la charte du logo.

## SEO

- Le build pré-rend la page en HTML (`src/entry-server.jsx` + `prerender.js`) et génère `robots.txt` et `sitemap.xml`.
- L’adresse du site se configure dans `site.config.js` (à remplacer avant la mise en ligne).

```bash
npm run lint
npm run build
npm run preview
```

## À compléter

- Prix (249 / 449 / 649 MAD) et formats (30 × 40 et 40 × 60 cm) : propositions à valider dans `src/data/packs.js`.
- Preuve sociale, témoignages, coordonnées et textes entre crochets : uniquement avec des informations réelles.
- Le formulaire est une démonstration : brancher l’envoi réel dans `src/hooks/useCommande.js` (fonction `soumettre`).
