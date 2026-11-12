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
              <li><a href="tel:+212688023241">06 88 02 32 41</a></li>
              <li><a href="https://wa.me/212688023241" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:info@nymorr.com">info@nymorr.com</a></li>
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
