import { createContext } from 'react'

interface ContextProps {
  activeAccordion: string
  type: 'single' | 'multiple'
  addActiveAccordion: (id: string) => void
}

export const Context = createContext({} as ContextProps)
