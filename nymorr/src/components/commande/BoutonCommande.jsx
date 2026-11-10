import { useCommandeModal } from '../../context/CommandeContext.jsx'

// Bouton qui ouvre le formulaire popup (optionnellement avec un pack présélectionné)
export default function BoutonCommande({ pack, className = 'btn btn--accent', children }) {
  const { ouvrir } = useCommandeModal()
  return (
    <button type="button" className={className} onClick={() => ouvrir(pack)} aria-haspopup="dialog">
      {children}
    </button>
  )
}
