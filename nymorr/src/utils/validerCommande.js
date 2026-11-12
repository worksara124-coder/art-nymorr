export default function valider(v) {
  const e = {}
  if (!v.nom.trim()) e.nom = 'Indiquez votre prénom.'
  if (v.tel.replace(/[^0-9]/g, '').length < 8) e.tel = 'Indiquez un numéro valide pour que nous puissions vous rappeler.'
  if (!v.adresse.trim()) e.adresse = 'Indiquez votre adresse de livraison.'
  return e
}
