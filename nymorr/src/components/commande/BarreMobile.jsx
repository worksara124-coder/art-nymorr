import { useEffect, useState } from 'react'
import { useCommandeModal } from '../../context/CommandeContext.jsx'
import { DEVISE, PRIX_MIN } from '../../data/landing.js'

// Barre d'action collée en bas de l'écran sur mobile (apparaît après le premier écran)
export default function BarreMobile() {
  const { ouvrir, ouvert } = useCommandeModal()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const surDefilement = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    surDefilement()
    window.addEventListener('scroll', surDefilement, { passive: true })
    return () => window.removeEventListener('scroll', surDefilement)
  }, [])

  return (
    <div className={'mbar' + (visible && !ouvert ? ' is-visible' : '')} aria-hidden={!visible || ouvert}>
      <p className="mbar__text">
        <b>Packs de 1 à 3 tableaux</b>
        <span>dès {PRIX_MIN} {DEVISE}</span>
      </p>
      <button type="button" className="btn btn--accent" onClick={() => ouvrir()} tabIndex={visible && !ouvert ? 0 : -1} aria-haspopup="dialog">
        Choisir mon pack
      </button>
    </div>
  )
}
