// Textes généraux de la landing page (structure du guide SYO WEB)

export const DEVISE = 'MAD'
export const PRIX_MIN = 249

// Bandeau de preuve : uniquement des faits vérifiables de l'offre (pas de chiffres inventés)
export const FAITS = [
  { valeur: '3', label: 'packs au choix' },
  { valeur: '1 à 3', label: 'tableaux par pack' },
  { valeur: `${PRIX_MIN} ${DEVISE}`, label: 'prix de départ' },
  { valeur: '30 × 40', label: 'et 40 × 60 cm' },
]

// Section Problème : les situations vécues par le client
export const DOULEURS = [
  'Vous avez emménagé ou refait votre déco, mais vos murs restent vides.',
  'Vous avez peur de choisir des tableaux qui ne vont pas ensemble.',
  'Vous ne savez pas quelle taille prendre pour votre mur.',
  'En magasin, vous ne trouvez que des cadres sans caractère, ou des œuvres hors budget.',
]

// Section Solution : ce dont le client n'a plus besoin
export const PLUS_BESOIN = [
  'Courir les magasins de décoration',
  'Deviner les bonnes tailles',
  'Assortir les couleurs vous-même',
]

// Réassurance affichée sous les boutons
export const REASSURANCE = 'Commande confirmée avec vous par téléphone avant l’envoi.'
