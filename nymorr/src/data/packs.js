import photoSolo from '../assets/photo-pack-solo.webp'
import photoDuo from '../assets/photo-pack-duo.webp'
import photoGalerie from '../assets/photo-pack-galerie.webp'

// Prix en MAD (nombres) et formats : à ajuster si besoin
export const PACKS = [
  {
    id: 'solo',
    nom: 'Pack Solo',
    court: 'Solo',
    nombre: '1 tableau',
    description: 'Une œuvre unique pour donner du caractère à une entrée, une chambre ou un bureau.',
    prix: 249,
    format: '30 × 40 cm',
    photo: photoSolo,
    oeuvres: ['femme'],
    avantages: ['1 tableau au choix dans la collection', 'Format 30 × 40 cm', 'Idéal pour un petit mur ou une entrée'],
  },
  {
    id: 'duo',
    nom: 'Pack Duo',
    court: 'Duo',
    nombre: '2 tableaux',
    description: "Deux œuvres pensées ensemble, idéales au-dessus d'un canapé, d'un lit ou d'une console.",
    prix: 449,
    economie: '49 MAD de moins que 2 Packs Solo',
    format: '2 × 30 × 40 cm',
    photo: photoDuo,
    oeuvres: ['cercles', 'arches'],
    avantages: ['2 tableaux assortis au choix', 'Format 2 × 30 × 40 cm', 'Conseil pour harmoniser le duo', 'Idéal au-dessus d’un canapé ou d’un lit'],
    badge: 'Le plus polyvalent',
    sombre: true,
  },
  {
    id: 'galerie',
    nom: 'Pack Galerie',
    court: 'Galerie',
    badge: 'Le plus vendu',
    nombre: '3 tableaux',
    description: 'Une composition murale complète pour transformer un grand mur en véritable galerie.',
    prix: 649,
    format: '2 × 30 × 40 cm + 1 × 40 × 60 cm',
    photo: photoGalerie,
    oeuvres: ['cercles', 'femme', 'arches'],
    avantages: ['3 tableaux composés ensemble', 'Formats 30 × 40 cm + 40 × 60 cm au centre', 'Proposition de disposition murale', 'Idéal pour un grand mur de salon'],
  },
]
