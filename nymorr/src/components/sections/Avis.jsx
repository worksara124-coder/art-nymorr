import { Etoile } from '../ui/Icons.jsx'

// Exemples de maquette : remplacer par des témoignages authentiques avant publication.
const exemples = [
  { nom: 'Sarah', ville: 'Marrakech', pack: 'Pack Galerie', texte: 'Les trois tableaux donnent tout de suite du caractère au salon. Les teintes chaudes s’accordent très bien avec notre décoration.' },
  { nom: 'Yassine', ville: 'Casablanca', pack: 'Pack Duo', texte: 'Je cherchais deux tableaux qui fonctionnent ensemble au-dessus du canapé. Le duo apporte exactement la touche que j’imaginais.' },
  { nom: 'Imane', ville: 'Rabat', pack: 'Pack Solo', texte: 'Un seul tableau a suffi à habiller ce petit coin de la chambre. J’aime beaucoup le mélange de formes et de couleurs.' },
]

export default function Avis() {
  return (
    <section className="sec sec--soft" id="avis">
      <div className="wrap">
        <div className="sec__head">
          <p className="kicker">Avis · aperçu de la maquette</p>
          <h2 className="h2">Un nouvel esprit pour vos murs</h2>
          <p className="lead">Exemples fictifs pour illustrer la présentation. Ces textes ne sont pas des avis clients réels.</p>
        </div>
        <div className="grid3 rail">
          {exemples.map((avis) => (
            <figure key={avis.nom} className="review">
              <span className="review__label">Avis fictif · démonstration</span>
              <div className="review__stars" aria-label="5 étoiles, note fictive">
                {[0, 1, 2, 3, 4].map((i) => <Etoile key={i} />)}
              </div>
              <blockquote>« {avis.texte} »</blockquote>
              <figcaption>
                <span className="review__avatar" aria-hidden="true">{avis.nom[0]}</span>
                <span><b>{avis.nom} · {avis.ville}</b><small>{avis.pack} · profil fictif</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
