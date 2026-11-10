import { Coche, Fleche } from '../ui/Icons.jsx'
import Reassurance from '../ui/Reassurance.jsx'
import BoutonCommande from '../commande/BoutonCommande.jsx'
import { DEVISE, PRIX_MIN } from '../../data/landing.js'

// CTA final : rappel de la promesse + bouton qui ouvre le formulaire popup + réassurance
export default function CtaFinal() {
  return (
    <section id="commande" className="sec">
      <div className="wrap">
        <div className="final">
          <p className="kicker kicker--light">Dernière étape</p>
          <h2 className="final__title">Transformez vos murs avec le bon pack</h2>
          <p className="final__text">
            Choisissez votre pack, laissez votre prénom et votre téléphone : nous vous rappelons pour composer votre
            sélection avec vous.
          </p>
          <ul className="final__points">
            <li><Coche /> Prix affiché, dès {PRIX_MIN} {DEVISE}</li>
            <li><Coche /> Conseil pour choisir vos œuvres</li>
            <li><Coche /> Formulaire en 3 champs</li>
          </ul>
          <BoutonCommande className="btn btn--accent btn--lg">
            Réserver mon pack <Fleche />
          </BoutonCommande>
          <Reassurance clair />
        </div>
      </div>
    </section>
  )
}
