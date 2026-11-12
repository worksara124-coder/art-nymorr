import { useCommandeModal } from '../../context/CommandeContext.jsx'
import { PACKS } from '../../data/packs.js'
import { lienCommandeWhatsApp } from '../../utils/commandeWhatsApp.js'

export default function FormulaireHero() {
  const { pack, setPack } = useCommandeModal()
  function contacter(event) {
    event.preventDefault()
    const champs = new FormData(event.currentTarget)
    window.location.assign(lienCommandeWhatsApp({
      nom: champs.get('prenom'), tel: champs.get('telephone'),
      adresse: champs.get('adresse'), pack: PACKS.find((p) => p.id === champs.get('pack')),
    }))
  }

  return (
    <form className="hero-form" onSubmit={contacter}>
      <label className="hero-form__full">
        <span>Prénom *</span>
        <input name="prenom" autoComplete="given-name" placeholder="Votre prénom" required maxLength={80} />
      </label>
      <label>
        <span>Packs (optionnel)</span>
        <select name="pack" value={pack} onChange={(event) => setPack(event.target.value)}>
          <option value="">Choisir un pack</option>
          {PACKS.map((pack) => <option key={pack.id} value={pack.id}>{pack.nom} · {pack.prix} MAD</option>)}
        </select>
      </label>
      <label>
        <span>Téléphone *</span>
        <input name="telephone" type="tel" autoComplete="tel" placeholder="06…" required pattern="[+0-9 ()-]{8,20}" />
      </label>
      <label className="hero-form__full">
        <span>Adresse de livraison *</span>
        <input name="adresse" autoComplete="street-address" placeholder="Rue, quartier, ville et code postal" required maxLength={300} pattern=".*\S.*" />
      </label>
      <button className="btn btn--accent hero-form__full" type="submit">Commander</button>
      <p className="hero-form__full">Ouvre WhatsApp avec votre message à vérifier et à envoyer.</p>
    </form>
  )
}
