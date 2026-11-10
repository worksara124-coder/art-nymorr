import { Croix, Fleche } from '../ui/Icons.jsx'
import Reassurance from '../ui/Reassurance.jsx'
import BoutonCommande from '../commande/BoutonCommande.jsx'
import Etapes from './Etapes.jsx'
import { PLUS_BESOIN } from '../../data/landing.js'

// Solution : « la bonne nouvelle », ce dont le client n'a plus besoin, puis les étapes
export default function Solution() {
  return (
    <section className="sec sec--soft">
      <div className="wrap">
        <div className="sec__head">
          <p className="kicker">La solution</p>
          <h2 className="h2">La bonne nouvelle : vos tableaux sont déjà assortis.</h2>
          <div className="nomore">
            <span className="nomore__title">Vous n’avez plus besoin de</span>
            {PLUS_BESOIN.map((t) => (
              <span key={t} className="nomore__chip">
                <Croix />
                {t}
              </span>
            ))}
          </div>
        </div>
        <Etapes />
        <div className="cta-row">
          <BoutonCommande>
            Choisir mon pack <Fleche />
          </BoutonCommande>
          <Reassurance />
        </div>
      </div>
    </section>
  )
}
