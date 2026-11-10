import { Plus } from '../ui/Icons.jsx'
import { FAQ } from '../../data/faq.js'

export default function Faq() {
  return (
    <section id="faq" className="sec sec--soft">
      <div className="wrap faq">
        <div className="sec__head">
          <p className="kicker">FAQ</p>
          <h2 className="h2">Vos questions avant de commander</h2>
        </div>
        <div className="faq__list">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <span className="plus" aria-hidden="true"><Plus /></span>
              </summary>
              <p className="faq__a">{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
