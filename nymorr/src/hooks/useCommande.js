import { useState } from 'react'
import valider from '../utils/validerCommande.js'

// Formulaire court (guide SYO WEB) : pack + prénom + téléphone
const VIDE = { nom: '', tel: '' }

export default function useCommande() {
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
      // Démonstration : aucune donnée n'est envoyée.
      // Pour un envoi réel, passer le pack sélectionné à ce hook et connecter une API.
      setEnvoye(true)
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
