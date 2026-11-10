import { useEffect, useRef } from 'react'
import { PACKS } from '../../data/packs.js'
import { DEVISE } from '../../data/landing.js'
import { useCommandeModal } from '../../context/CommandeContext.jsx'
import useCommande from '../../hooks/useCommande.js'
import { Coche, Fermer } from '../ui/Icons.jsx'
import Champ from '../ui/Champ.jsx'
import Reassurance from '../ui/Reassurance.jsx'

// Formulaire de commande en popup : pack + prénom + téléphone (3 champs, guide SYO WEB)
export default function ModalCommande() {
  const { ouvert, fermer, pack, setPack } = useCommandeModal()
  const { valeurs, erreurs, envoye, changer, soumettre, recommencer } = useCommande()
  const boite = useRef(null)
  const declencheur = useRef(null)
  const packChoisi = PACKS.find((p) => p.id === pack)

  // Ouverture : bloque le défilement, place le focus dans la popup, gère Échap et la touche Tab
  useEffect(() => {
    if (!ouvert) return undefined
    declencheur.current = document.activeElement
    const scroll = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const premier = boite.current?.querySelector('input, button.is-on, button')
    premier?.focus()

    const clavier = (ev) => {
      if (ev.key === 'Escape') fermer()
      if (ev.key !== 'Tab' || !boite.current) return
      const focusables = boite.current.querySelectorAll('button, input, a[href], [tabindex]:not([tabindex="-1"])')
      const liste = Array.from(focusables).filter((el) => !el.disabled)
      if (!liste.length) return
      const debut = liste[0]
      const fin = liste[liste.length - 1]
      if (ev.shiftKey && document.activeElement === debut) {
        ev.preventDefault()
        fin.focus()
      } else if (!ev.shiftKey && document.activeElement === fin) {
        ev.preventDefault()
        debut.focus()
      }
    }
    document.addEventListener('keydown', clavier)
    return () => {
      document.removeEventListener('keydown', clavier)
      document.body.style.overflow = scroll
      declencheur.current?.focus?.()
    }
  }, [ouvert, fermer])

  if (!ouvert) return null

  const fermerEtReinitialiser = () => {
    fermer()
    if (envoye) recommencer()
  }

  return (
    <div className="modal" onMouseDown={(ev) => ev.target === ev.currentTarget && fermerEtReinitialiser()}>
      <div className="modal__box" role="dialog" aria-modal="true" aria-labelledby="modal-titre" ref={boite}>
        <button type="button" className="modal__close" onClick={fermerEtReinitialiser} aria-label="Fermer le formulaire">
          <Fermer />
        </button>

        {envoye ? (
          <div className="done" role="status">
            <span className="done__icon"><Coche /></span>
            <h2 id="modal-titre" className="done__title">Merci {valeurs.nom.trim().split(/\s+/)[0]} !</h2>
            <p className="done__text">
              Votre demande pour le {packChoisi.nom} ({packChoisi.prix} {DEVISE}) est prête. Art Nymorr vous rappelle
              pour composer votre sélection.
            </p>
            <p className="note">Démonstration : aucune donnée n’a été envoyée.</p>
            <button type="button" className="btn btn--dark" onClick={fermerEtReinitialiser}>Fermer</button>
          </div>
        ) : (
          <form className="form" onSubmit={soumettre} noValidate>
            <div className="modal__head">
              <p className="modal__step">3 champs, c’est tout</p>
              <h2 id="modal-titre" className="modal__title">Réservez votre pack</h2>
              <p className="modal__text">Nous vous rappelons pour composer votre sélection avec vous.</p>
            </div>

            <fieldset className="choix">
              <legend className="lbl">1. Votre pack</legend>
              <div className="choix__grid">
                {PACKS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={'choix__item' + (pack === p.id ? ' is-on' : '')}
                    aria-pressed={pack === p.id}
                    onClick={() => setPack(p.id)}
                  >
                    <img src={p.photo} alt="" width="960" height="720" loading="lazy" decoding="async" />
                    <span className="choix__name">{p.court}</span>
                    <span className="choix__meta">{p.nombre}</span>
                    <span className="choix__price">{p.prix} {DEVISE}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="f-row">
              <Champ id="nom" label="2. Votre prénom" erreur={erreurs.nom}>
                <input id="nom" type="text" autoComplete="given-name" placeholder="Ex. Salma" value={valeurs.nom} onChange={changer('nom')} aria-invalid={!!erreurs.nom} aria-describedby={erreurs.nom ? 'nom-err' : undefined} />
              </Champ>
              <Champ id="tel" label="3. Votre téléphone" erreur={erreurs.tel}>
                <input id="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 00 00 00 00" value={valeurs.tel} onChange={changer('tel')} aria-invalid={!!erreurs.tel} aria-describedby={erreurs.tel ? 'tel-err' : undefined} />
              </Champ>
            </div>

            <button type="submit" className="btn btn--accent btn--full btn--lg">
              Réserver mon {packChoisi.nom} · {packChoisi.prix} {DEVISE}
            </button>
            <Reassurance />
            <p className="note">Prototype de démonstration : ce formulaire n’envoie aucune donnée.</p>
          </form>
        )}
      </div>
    </div>
  )
}
