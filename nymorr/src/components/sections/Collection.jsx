import { OEUVRES } from '../../data/oeuvres.js'
import { PACKS } from '../../data/packs.js'
import Cadre from '../ui/Cadre.jsx'
import { Fleche } from '../ui/Icons.jsx'

// Bénéfices détaillés : les œuvres de la collection
export default function Collection() {
  return (
    <section id="collection" className="sec">
      <div className="wrap">
        <div className="sec__head">
          <p className="kicker">La collection</p>
          <h2 className="h2">Tableaux abstraits et africains, faits pour aller ensemble</h2>
          <p className="lead">
            Des tons terre, ocre et sable qui s’accordent entre eux : chaque œuvre se marie avec les autres, seule ou
            en composition.
          </p>
        </div>
        <p className="swipe-hint">
          <Fleche /> Faites glisser pour voir les œuvres
        </p>
        <div className="grid3 rail">
          {Object.entries(OEUVRES).map(([id, o]) => (
            <figure key={id} className="oeuvre">
              <div className="oeuvre__wall">
                <Cadre oeuvre={id} />
              </div>
              <figcaption className="oeuvre__info">
                <span className="oeuvre__title">{o.titre}</span>
                <span className="oeuvre__format">{o.format}</span>
                <span className="oeuvre__packs">
                  {PACKS.filter((p) => p.oeuvres.includes(id)).map((p) => (
                    <span key={p.id} className="tag">{p.court}</span>
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
