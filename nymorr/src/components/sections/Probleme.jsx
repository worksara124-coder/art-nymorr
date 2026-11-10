import { DOULEURS } from '../../data/landing.js'

// Problème (douleurs du client) + Agitation (encadré : ce que ça coûte)
export default function Probleme() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec__head">
          <p className="kicker">Vous vous reconnaissez ?</p>
          <h2 className="h2">Décorer un mur, ça a l’air simple… jusqu’au moment de choisir.</h2>
        </div>
        <div className="problem">
          <ul className="pains">
            {DOULEURS.map((d, i) => (
              <li key={d} className="pain">
                <span className="pain__n" aria-hidden="true">{i + 1}</span>
                <p>{d}</p>
              </li>
            ))}
          </ul>
          <aside className="agitation">
            <p className="agitation__title">Ce que ça coûte vraiment</p>
            <p>
              Un mur vide, c’est une pièce qui paraît inachevée, un salon qui manque de chaleur, et un choix qu’on
              repousse de mois en mois.
            </p>
            <p className="agitation__key">
              Le problème, ce n’est pas votre goût : c’est qu’on vend les tableaux un par un, sans penser à
              l’ensemble.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
