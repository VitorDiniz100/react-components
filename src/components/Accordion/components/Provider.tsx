import React from 'react'

import { ProviderProps } from '../interfaces/provider'
import { Context } from './Context'

export function Provider({ type, children }: ProviderProps) {
  const [activeAccordion, setActiveAccordion] = React.useState<string>('')

  function addActiveAccordion(id: string) {
    setActiveAccordion(id)
  }

  if (!type || !children) return null

  return (
    <Context.Provider value={{ activeAccordion, type, addActiveAccordion }}>
      <div className="accordion-provider" data-type={type}>
        {children}
      </div>
    </Context.Provider>
  )
}
