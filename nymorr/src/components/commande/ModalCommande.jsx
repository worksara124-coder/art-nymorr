import { lienCommandeWhatsApp } from '../../utils/commandeWhatsApp.js'
import { useEffect, useRef } from 'react'
import { PACKS } from '../../data/packs.js'
import { DEVISE } from '../../data/landing.js'
import { useCommandeModal } from '../../context/CommandeContext.jsx'
import useCommande from '../../hooks/useCommande.js'
import { Coche, Fermer } from '../ui/Icons.jsx'
import Champ from '../ui/Champ.jsx'
import Reassurance from '../ui/Reassurance.jsx'

// Commande : pack, prénom, téléphone et adresse, transmise via WhatsApp.
export default function ModalCommande() {
  const { ouvert, fermer, pack, setPack } = useCommandeModal()
  const packChoisi = PACKS.find((p) => p.id === pack)
  const { valeurs, erreurs, envoye, changer, soumettre, recommencer } = useCommande(packChoisi)
  const boite = useRef(null)
  const declencheur = useRef(null)

  // Ouverture : bloque le défilement, place le focus dans la popup, gère Échap et la touche Tab
  useEffect(() => {
    if (!ouvert) return undefined
    declencheur.current = document.activeElement
    const scroll = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const premier = boite.current?.querySelector('input, select, button.is-on, button')
    premier?.focus()

    const clavier = (ev) => {
      if (ev.key === 'Escape') fermer()
      if (ev.key !== 'Tab' || !boite.current) return
      const focusables = boite.current.querySelectorAll('button, input, select, a[href], [tabindex]:not([tabindex="-1"])')
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
              Votre demande{packChoisi ? ` pour le ${packChoisi.nom} (${packChoisi.prix} ${DEVISE})` : ''} est prête. Confirmez l’envoi du message dans WhatsApp pour nous la transmettre.
            </p>
            <a className="btn btn--accent" href={lienCommandeWhatsApp({ ...valeurs, pack: packChoisi })}>Commander</a>
            <button type="button" className="btn btn--dark" onClick={fermerEtReinitialiser}>Fermer</button>
          </div>
        ) : (
          <form className="form" onSubmit={soumettre} noValidate>
            <div className="modal__head">
              <p className="modal__step">Vos informations de commande</p>
              <h2 id="modal-titre" className="modal__title">Commandez votre pack</h2>
              <p className="modal__text">Complétez vos coordonnées pour préparer votre commande sur WhatsApp.</p>
            </div>

            <fieldset className="choix">
              <legend className="lbl">1. Votre pack (optionnel)</legend>
              <div className="choix__grid">
                {PACKS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={'choix__item' + (pack === p.id ? ' is-on' : '')}
                    aria-pressed={pack === p.id}
                    onClick={() => setPack(pack === p.id ? '' : p.id)}
                  >
                    <img src={p.photo} alt="" width="960" height="720" loading="lazy" decoding="async" />
                    <span className="choix__name">{p.court}</span>
                    <span className="choix__meta">{p.nombre}</span>
                    <span className="choix__price">{p.prix} {DEVISE}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <p className="note">Cliquez à nouveau sur le pack sélectionné pour le désélectionner.</p>

            <div className="f-row">
              <Champ id="nom" label="2. Votre prénom" erreur={erreurs.nom}>
                <input id="nom" type="text" autoComplete="given-name" placeholder="Ex. Salma" value={valeurs.nom} onChange={changer('nom')} aria-invalid={!!erreurs.nom} aria-describedby={erreurs.nom ? 'nom-err' : undefined} />
              </Champ>
              <Champ id="tel" label="3. Votre téléphone" erreur={erreurs.tel}>
                <input id="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 00 00 00 00" value={valeurs.tel} onChange={changer('tel')} aria-invalid={!!erreurs.tel} aria-describedby={erreurs.tel ? 'tel-err' : undefined} />
              </Champ>
            </div>

            <Champ id="adresse" label="4. Votre adresse de livraison" erreur={erreurs.adresse}>
              <input id="adresse" type="text" autoComplete="street-address" placeholder="Rue, quartier, ville et code postal" required value={valeurs.adresse} onChange={changer('adresse')} aria-invalid={!!erreurs.adresse} aria-describedby={erreurs.adresse ? 'adresse-err' : undefined} />
            </Champ>

            <button type="submit" className="btn btn--accent btn--full btn--lg">
              Commander
            </button>
            <Reassurance />
            <p className="note">WhatsApp s’ouvrira avec votre commande. Appuyez sur Envoyer pour nous la transmettre.</p>
          </form>
        )}
      </div>
    </div>
  )
}
