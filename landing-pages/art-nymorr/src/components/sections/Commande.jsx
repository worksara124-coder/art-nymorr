import { PACKS } from '../../data/packs.js'
import { DEVISE, REASSURANCE } from '../../data/landing.js'
import { Coche } from '../ui/Icons.jsx'
import Champ from '../ui/Champ.jsx'
import Reassurance from '../ui/Reassurance.jsx'
import useCommande from '../../hooks/useCommande.js'

// CTA final : rappel de la promesse + formulaire court (pack, prénom, téléphone) + réassurance
export default function Commande({ pack, setPack }) {
  const { valeurs, erreurs, envoye, changer, soumettre, recommencer } = useCommande()
  const packChoisi = PACKS.find((p) => p.id === pack)

  return (
    <section id="commande" className="sec sec--ochre">
      <div className="wrap order">
        <div className="order__intro">
          <p className="kicker">Dernière étape</p>
          <h2 className="h2 h2--xl">Transformez vos murs avec le bon pack</h2>
          <p className="order__text">
            Choisissez votre pack, laissez votre prénom et votre téléphone : nous vous rappelons pour composer votre
            sélection avec vous.
          </p>
          <ul className="order__points">
            <li><Coche /> Prix affiché, sans surprise</li>
            <li><Coche /> Conseil pour choisir vos œuvres</li>
            <li><Coche /> {REASSURANCE}</li>
          </ul>
        </div>

        <div className="order__card">
          {envoye ? (
            <div className="done" role="status">
              <span className="done__icon"><Coche /></span>
              <h3 className="done__title">Merci {valeurs.nom.trim().split(/\s+/)[0]} !</h3>
              <p className="done__text">
                Votre demande pour le {packChoisi.nom} ({packChoisi.prix} {DEVISE}) est prête. Art Nymorr vous rappelle
                pour composer votre sélection.
              </p>
              <p className="note">Démonstration : aucune donnée n’a été envoyée.</p>
              <button type="button" className="btn btn--ghost" onClick={recommencer}>Recommencer</button>
            </div>
          ) : (
            <form className="form" onSubmit={soumettre} noValidate aria-label="Formulaire de commande">
              <fieldset className="form__packs">
                <legend className="lbl">1. Votre pack</legend>
                <div className="pills">
                  {PACKS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className={'pill' + (pack === p.id ? ' is-on' : '')}
                      aria-pressed={pack === p.id}
                      onClick={() => setPack(p.id)}
                    >
                      {p.court} <span className="pill__n">{p.prix} {DEVISE}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <Champ id="nom" label="2. Votre prénom" erreur={erreurs.nom}>
                <input id="nom" type="text" autoComplete="given-name" placeholder="Ex. Salma" value={valeurs.nom} onChange={changer('nom')} aria-invalid={!!erreurs.nom} aria-describedby={erreurs.nom ? 'nom-err' : undefined} />
              </Champ>
              <Champ id="tel" label="3. Votre téléphone" erreur={erreurs.tel}>
                <input id="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 00 00 00 00" value={valeurs.tel} onChange={changer('tel')} aria-invalid={!!erreurs.tel} aria-describedby={erreurs.tel ? 'tel-err' : undefined} />
              </Champ>

              <button type="submit" className="btn btn--full btn--lg">
                Réserver mon {packChoisi.nom} · {packChoisi.prix} {DEVISE}
              </button>
              <Reassurance />
              <p className="note">Prototype de démonstration : ce formulaire n’envoie aucune donnée.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
