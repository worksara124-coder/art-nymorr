import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { SITE_URL } from './site.config.js'

// Rend l'adresse du site disponible partout (index.html via %VITE_SITE_URL%, et import.meta.env dans React).
// Elle se modifie dans site.config.js.
process.env.VITE_SITE_URL = SITE_URL

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
