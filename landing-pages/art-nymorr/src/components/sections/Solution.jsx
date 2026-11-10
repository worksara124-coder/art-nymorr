import { Croix, Fleche } from '../ui/Icons.jsx'
import Reassurance from '../ui/Reassurance.jsx'
import Etapes from './Etapes.jsx'
import { PLUS_BESOIN } from '../../data/landing.js'

// Solution : « la bonne nouvelle », ce dont le client n'a plus besoin, puis les étapes
export default function Solution() {
  return (
    <section className="sec sec--dark">
      <div className="wrap">
        <div className="sec__head sec__head--split">
          <div>
            <p className="kicker kicker--ochre">La solution</p>
            <h2 className="h2">La bonne nouvelle : vos tableaux sont déjà assortis.</h2>
          </div>
          <div className="nomore">
            <p className="nomore__title">Vous n’avez plus besoin de :</p>
            <ul>
              {PLUS_BESOIN.map((t) => (
                <li key={t}>
                  <Croix />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Etapes />
        <div className="cta-row">
          <a href="#packs" className="btn btn--accent">
            Découvrir les packs <Fleche />
          </a>
          <Reassurance clair />
        </div>
      </div>
    </section>
  )
}
