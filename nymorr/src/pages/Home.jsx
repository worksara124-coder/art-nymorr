import DonneesStructurees from '../components/seo/DonneesStructurees.jsx'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import Hero from '../components/sections/Hero.jsx'
import Bandeau from '../components/sections/Bandeau.jsx'
import Probleme from '../components/sections/Probleme.jsx'
import Solution from '../components/sections/Solution.jsx'
import Collection from '../components/sections/Collection.jsx'
import Avis from '../components/sections/Avis.jsx'
import Packs from '../components/sections/Packs.jsx'
import Faq from '../components/sections/Faq.jsx'
import CtaFinal from '../components/sections/CtaFinal.jsx'
import ModalCommande from '../components/commande/ModalCommande.jsx'
import BarreMobile from '../components/commande/BarreMobile.jsx'
import { CommandeProvider } from '../context/CommandeContext.jsx'
import '../styles/landing.css'

// Ordre des sections : guide « Anatomie d'une landing page » SYO WEB
// capter → convaincre → rassurer → faire agir. Tous les boutons d'action ouvrent la popup.
export default function Home() {
  return (
    <CommandeProvider>
      <DonneesStructurees />
      <Header />            {/* 1. Header : logo + 1 CTA */}
      <main>
        <Hero />            {/* 2. Hero */}
        <Bandeau />         {/* 3. Bandeau de preuve */}
        <Probleme />        {/* 4-5. Problème + Agitation */}
        <Solution />        {/* 6. Solution + étapes */}
        <Collection />      {/* 7. Bénéfices détaillés : les œuvres */}
        <Avis />            {/* 8. Témoignages */}
        <Packs />           {/* 9. Offre / tarifs */}
        <Faq />             {/* 10. FAQ */}
        <CtaFinal />        {/* 11. CTA final */}
      </main>
      <Footer />            {/* 12. Footer */}
      <BarreMobile />
      <ModalCommande />
    </CommandeProvider>
  )
}
