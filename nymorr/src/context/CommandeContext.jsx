import { createContext, useCallback, useContext, useMemo, useState } from 'react'

// Partage, dans toute la page, le pack choisi et l'ouverture du formulaire popup.
const CommandeContext = createContext(null)

export function CommandeProvider({ children }) {
  const [pack, setPack] = useState('')
  const [ouvert, setOuvert] = useState(false)

  // ouvrir() garde le pack actuel ; ouvrir('galerie') présélectionne un pack
  const ouvrir = useCallback((id) => {
    if (id) setPack(id)
    setOuvert(true)
  }, [])
  const fermer = useCallback(() => setOuvert(false), [])

  const valeur = useMemo(() => ({ pack, setPack, ouvert, ouvrir, fermer }), [pack, ouvert, ouvrir, fermer])
  return <CommandeContext.Provider value={valeur}>{children}</CommandeContext.Provider>
}

export function useCommandeModal() {
  const ctx = useContext(CommandeContext)
  if (!ctx) throw new Error('useCommandeModal doit être utilisé dans <CommandeProvider>')
  return ctx
}
