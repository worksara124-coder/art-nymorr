import { OEUVRES } from '../../data/oeuvres.js'

export default function Cadre({ oeuvre, decorative = false, prioritaire = false }) {
  const o = OEUVRES[oeuvre]
  return (
    <div className="frame">
      <img
        className="pic"
        src={o.image}
        alt={decorative ? '' : o.alt}
        width="560"
        height="805"
        loading={prioritaire ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={prioritaire ? 'high' : undefined}
      />
    </div>
  )
}
