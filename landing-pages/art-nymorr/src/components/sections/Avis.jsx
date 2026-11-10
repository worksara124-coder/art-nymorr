// Témoignages : uniquement des avis réels (prénom, photo, résultat) — règle du guide SYO WEB
export default function Avis() {
  return (
    <section className="sec sec--paper">
      <div className="wrap">
        <div className="sec__head sec__head--split">
          <div>
            <p className="kicker">Témoignages</p>
            <h2 className="h2">Ils ont habillé leurs murs avec Art Nymorr</h2>
          </div>
          <p className="lead lead--sm">Avis réels uniquement : prénom, photo du tableau chez le client et ce qui a changé.</p>
        </div>
        <div className="grid3 rail">
          {[0, 1, 2].map((i) => (
            <figure key={i} className="ph">
              <span className="ph__photo" aria-hidden="true" />
              <div className="ph__line" style={{ width: '92%' }} />
              <div className="ph__line" style={{ width: '70%' }} />
              <figcaption>[Témoignage client à intégrer · prénom, ville, pack choisi]</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
