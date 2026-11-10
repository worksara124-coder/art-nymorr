import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const conteneur = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En production, la page est déjà pré-rendue en HTML (bon pour le SEO) :
// React « hydrate » ce HTML au lieu de tout reconstruire.
if (conteneur.hasChildNodes()) {
  hydrateRoot(conteneur, app)
} else {
  createRoot(conteneur).render(app)
}
