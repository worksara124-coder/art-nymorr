import { ETAPES } from '../../data/etapes.js'

// Liste des 3 étapes, affichée dans la section Solution
export default function Etapes() {
  return (
    <ol className="grid3 steps">
      {ETAPES.map((e, i) => (
        <li key={e.titre} className="step">
          <p className="step__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</p>
          <h3 className="step__title">{e.titre}</h3>
          <p className="step__text">{e.texte}</p>
        </li>
      ))}
    </ol>
  )
}
