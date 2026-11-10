# Art Nymorr — landing page React

## Démarrer

Depuis le dossier `landing-pages/art-nymorr` :

```bash
npm ci
npm run dev
```

## Organisation du code

- `src/App.jsx` : affiche uniquement la page Home.
- `src/pages/Home.jsx` : assemble les sections et partage le pack sélectionné.
- `src/components/layout/` : Header et Footer.
- `src/components/sections/` : Hero, Bandeau, Probleme, Solution (+ Etapes), Collection, Avis, Packs, Faq et Commande — dans l’ordre du guide SYO WEB « Anatomie d’une landing page ».
- `src/components/ui/` contient aussi `Reassurance` (texte sous les boutons) et `PreuveSociale` (emplacement à remplacer par une vraie note ou un vrai nombre de clients).
- `src/components/ui/` : Cadre, Champ et icônes réutilisables.
- `src/components/seo/` : données structurées JSON-LD.
- `src/data/` : œuvres, packs (prix et formats), étapes, questions fréquentes, et `landing.js` (prix de départ, bandeau de chiffres, douleurs du client, réassurance).
- `src/hooks/useCommande.js` : état et actions du formulaire.
- `src/utils/validerCommande.js` : validation des coordonnées.
- `src/styles/landing.css` : styles de la landing page.
- `src/index.css` : styles globaux et variables.
- `src/assets/` : images et logos.

## Modifier le contenu

Modifiez les titres et images des œuvres dans `src/data/oeuvres.js`, les prix et offres dans `src/data/packs.js`, les étapes dans `src/data/etapes.js` et les réponses dans `src/data/faq.js`.
L’adresse publique du site se configure dans `site.config.js`.

## Vérifications et production

```bash
npm run lint
npm run build
npm run preview
```

Le build conserve le pré-rendu HTML ainsi que la génération de robots.txt et sitemap.xml.
Le formulaire reste une démonstration : il valide les champs mais ne transmet aucune commande.
Les prix (249 / 449 / 649 MAD) et formats (30 × 40 et 40 × 60 cm) sont des propositions à valider. La preuve sociale, les témoignages, les coordonnées et les textes entre crochets restent à compléter avec des informations réelles.

L’archive ne contient pas node_modules : `npm ci` installe les dépendances adaptées à votre système.
