export function lienCommandeWhatsApp({ nom, tel, adresse, pack }) {
  const lignes = [
    'Bonjour Art Nymorr, je souhaite commander.',
    pack ? `Pack : ${pack.nom} — ${pack.prix} MAD` : 'Pack : à choisir avec vous',
    `Prénom : ${nom.trim()}`,
    `Téléphone : ${tel.trim()}`,
    `Adresse : ${adresse.trim()}`,
  ]
  return `https://wa.me/212688023241?text=${encodeURIComponent(lignes.join('\n'))}`
}
