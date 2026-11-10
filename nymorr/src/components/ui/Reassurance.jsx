import { Bouclier } from './Icons.jsx'
import { REASSURANCE } from '../../data/landing.js'

// Réassurance affichée juste sous les boutons d'action
export default function Reassurance({ clair = false }) {
  return (
    <p className={'reassure' + (clair ? ' reassure--light' : '')}>
      <Bouclier />
      {REASSURANCE}
    </p>
  )
}
