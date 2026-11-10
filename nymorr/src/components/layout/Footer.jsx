import logoClair from '../../assets/logo-art-nymorr-clair.webp'

const annee = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cols">
          <div className="footer__brand">
            <p className="logo">
              <img src={logoClair} alt="Art Nymorr — tableaux décoratifs" width="480" height="191" loading="lazy" />
            </p>
            <p>Tableaux décoratifs et art mural : œuvres abstraites et africaines en packs de 1, 2 ou 3 tableaux.</p>
          </div>
          <div>
            <p className="footer__title">Contact</p>
            <ul>
              <li>[Téléphone / WhatsApp]</li>
              <li>[E-mail]</li>
              <li>[Instagram]</li>
            </ul>
          </div>
          <div>
            <p className="footer__title">Informations</p>
            <ul>
              <li><a href="#cgv">Conditions de vente</a></li>
              <li><a href="#mentions">Mentions légales</a></li>
              <li><a href="#confidentialite">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        <p className="footer__copy">© {annee} Art Nymorr</p>
      </div>
    </footer>
  )
}
