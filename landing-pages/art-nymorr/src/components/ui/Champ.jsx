import { Alerte } from './Icons.jsx'

export default function Champ({ id, label, optionnel, erreur, children }) {
  return (
    <div className={'field' + (erreur ? ' is-error' : '')}>
      <label htmlFor={id}>
        {label} {optionnel && <span>(facultatif)</span>}
      </label>
      {children}
      {erreur && (
        <p className="err" id={id + '-err'} role="alert">
          <Alerte />
          {erreur}
        </p>
      )}
    </div>
  )
}
