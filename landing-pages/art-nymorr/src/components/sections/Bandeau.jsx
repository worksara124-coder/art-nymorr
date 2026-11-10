import { FAITS } from '../../data/landing.js'

// Bandeau de preuve : faits clés de l'offre
export default function Bandeau() {
  return (
    <section className="facts" aria-label="L’offre en chiffres">
      <div className="wrap facts__grid">
        {FAITS.map((f) => (
          <p key={f.label} className="fact">
            <b>{f.valeur}</b>
            <span>{f.label}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
