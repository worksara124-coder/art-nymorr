import { OEUVRES } from '../../data/oeuvres.js'
import { PACKS } from '../../data/packs.js'
import { Coche } from '../ui/Icons.jsx'
import Reassurance from '../ui/Reassurance.jsx'
import { DEVISE } from '../../data/landing.js'

export default function Packs({ pack, setPack }) {
  return (
    <section id="packs" className="sec">
      <div className="wrap">
        <div className="sec__head sec__head--split">
          <div>
            <p className="kicker">Nos 3 packs</p>
            <h2 className="h2">Un tableau, un duo ou tout un mur : à vous de choisir.</h2>
          </div>
          <p className="lead lead--sm">Prix clairs, formats indiqués, œuvres au choix dans la collection.</p>
        </div>

        {/* Onglets visibles uniquement sur mobile */}
        <div className="pack-tabs" role="group" aria-label="Choisir un pack">
          {PACKS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={'ptab' + (pack === p.id ? ' is-on' : '')}
              aria-pressed={pack === p.id}
              onClick={() => setPack(p.id)}
            >
              {p.court}
              <small>{p.prix} {DEVISE}</small>
            </button>
          ))}
        </div>

        <div className="grid3 packs-grid">
          {PACKS.map((p) => (
            <article
              key={p.id}
              className={'pack' + (p.sombre ? ' pack--dark' : '') + (pack === p.id ? ' is-selected' : '')}
            >
              {p.badge && <span className="badge">{p.badge}</span>}
              <img
                className="pack__photo"
                src={p.photo}
                alt={`${p.nom} : ${p.oeuvres.map((o) => OEUVRES[o].titre).join(', ')}`}
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="pack__count">{p.nombre}</p>
                <h3 className="pack__name">{p.nom}</h3>
              </div>
              <p className="pack__desc">{p.description}</p>
              <div className="price">
                <p className="price__main">
                  <b>{p.prix}</b>
                  <span>{DEVISE}</span>
                </p>
                {p.economie && <p className="price__save">{p.economie}</p>}
              </div>
              <ul className="feat">
                {p.avantages.map((a) => (
                  <li key={a}>
                    <Coche />
                    {a}
                  </li>
                ))}
              </ul>
              <a
                href="#commande"
                className={'btn btn--full ' + (p.sombre ? 'btn--accent' : 'btn--ghost')}
                onClick={() => setPack(p.id)}
              >
                Choisir le {p.nom}
              </a>
            </article>
          ))}
        </div>
        <Reassurance />
      </div>
    </section>
  )
}
