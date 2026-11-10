import { Coche } from '../ui/Icons.jsx'
import { DOULEURS } from '../../data/landing.js'

// Problème (douleurs du client) + Agitation (encadré : ce que ça coûte)
export default function Probleme() {
  return (
    <section className="sec sec--paper">
      <div className="wrap problem">
        <div className="problem__text">
          <p className="kicker">Vous vous reconnaissez ?</p>
          <h2 className="h2">Décorer un mur, ça a l’air simple… jusqu’au moment de choisir.</h2>
          <ul className="pains">
            {DOULEURS.map((d) => (
              <li key={d}>
                <Coche />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <aside className="agitation">
          <p className="agitation__title">Ce que ça coûte vraiment</p>
          <p>
            Un mur vide, c’est une pièce qui paraît inachevée, un salon qui manque de chaleur, et un choix qu’on repousse
            de mois en mois.
          </p>
          <p className="agitation__key">
            Le problème, ce n’est pas votre goût : c’est qu’on vend les tableaux un par un, sans penser à l’ensemble.
          </p>
        </aside>
      </div>
    </section>
  )
}
