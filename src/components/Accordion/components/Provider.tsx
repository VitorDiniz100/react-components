import { PropsWithChildren, useState } from 'react'
import { Context } from './Context'

export interface ProviderProps {
  type?: 'single' | 'multiple'
}

export default function Provider({
  type = 'single',
  children,
}: PropsWithChildren<ProviderProps>) {
  const [activeAccordion, setActiveAccordion] = useState<string>('')

  function addActiveAccordion(id: string) {
    setActiveAccordion(id)
  }

  return (
    <Context.Provider value={{ activeAccordion, type, addActiveAccordion }}>
      {children}
    </Context.Provider>
  )
}
