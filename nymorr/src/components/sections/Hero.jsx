import photoGalerie from '../../assets/photo-pack-galerie.webp'
import { Coche, Fleche } from '../ui/Icons.jsx'
import Reassurance from '../ui/Reassurance.jsx'
import PreuveSociale from '../ui/PreuveSociale.jsx'
import BoutonCommande from '../commande/BoutonCommande.jsx'
import { DEVISE, PRIX_MIN } from '../../data/landing.js'

// Hero : accroche, titre, proposition de valeur, 3 bénéfices, CTA, réassurance, preuve sociale
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <p className="hero__hook">
            <span className="dot" aria-hidden="true" /> Packs de 1 à 3 tableaux · dès {PRIX_MIN} {DEVISE}
          </p>
          <h1 className="h1">
            Des tableaux décoratifs qui <span className="h1__accent">transforment</span> vos murs
          </h1>
          <p className="lead">
            Des œuvres abstraites et inspirées de l’Afrique, déjà pensées pour aller ensemble : vous choisissez le
            pack, nous vous aidons à composer le mur.
          </p>
          <ul className="hero__benefits">
            <li><Coche /> Des tableaux assortis, sans risque de fausse note</li>
            <li><Coche /> 1, 2 ou 3 tableaux selon la taille de votre mur</li>
            <li><Coche /> Formats 30 × 40 et 40 × 60 cm</li>
          </ul>
          <div className="hero__ctas">
            <BoutonCommande>
              Choisir mon pack <Fleche />
            </BoutonCommande>
            <a href="#packs" className="btn btn--outline-light">Voir les prix</a>
          </div>
          <Reassurance clair />
          <PreuveSociale />
        </div>

        <figure className="hero__visual">
          <img
            className="hero__photo"
            src={photoGalerie}
            alt="Pack Galerie Art Nymorr : trois tableaux encadrés accrochés au mur"
            width="960"
            height="720"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption className="hero__tag">
            <b>Pack Galerie</b>
            <span>3 tableaux · 649 {DEVISE}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
