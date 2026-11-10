import logo from '../../assets/logo-art-nymorr.webp'

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__in">
        <a href="#top" className="logo" aria-label="Art Nymorr, retour en haut">
          <img src={logo} alt="Art Nymorr — tableaux décoratifs" width="480" height="191" />
        </a>
        <a href="#commande" className="btn btn--sm">Choisir mon pack</a>
      </div>
    </header>
  )
}
