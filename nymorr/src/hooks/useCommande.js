import { useState } from 'react'
import { lienCommandeWhatsApp } from '../utils/commandeWhatsApp.js'
import valider from '../utils/validerCommande.js'

// Validation des coordonnées avant ouverture de WhatsApp.
const VIDE = { nom: '', tel: '', adresse: '' }

export default function useCommande(pack) {
  const [valeurs, setValeurs] = useState(VIDE)
  const [erreurs, setErreurs] = useState({})
  const [essaye, setEssaye] = useState(false)
  const [envoye, setEnvoye] = useState(false)

  const changer = (champ) => (ev) => {
    const suivant = { ...valeurs, [champ]: ev.target.value }
    setValeurs(suivant)
    if (essaye) setErreurs(valider(suivant))
  }

  const soumettre = (ev) => {
    ev.preventDefault()
    const e = valider(valeurs)
    setErreurs(e)
    setEssaye(true)
    if (Object.keys(e).length === 0) {
      setEnvoye(true)
      window.location.assign(lienCommandeWhatsApp({ ...valeurs, pack }))
    }
  }

  const recommencer = () => {
    setValeurs(VIDE)
    setErreurs({})
    setEssaye(false)
    setEnvoye(false)
  }

  return { valeurs, erreurs, envoye, changer, soumettre, recommencer }
}
