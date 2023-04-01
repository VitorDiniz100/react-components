import { PropsWithChildren, useCallback, useState } from 'react'
import { RootProps } from './interfaces'
import { Context } from './Context'

import * as S from './styles'

export default function Root({
  type = 'single',
  children,
}: PropsWithChildren<RootProps>) {
  const [activeAccordion, setActiveAccordion] = useState<string>('')

  const addActiveAccordion = useCallback((id: string) => {
    setActiveAccordion(id)
  }, [])

  return (
    <Context.Provider value={{ activeAccordion, type, addActiveAccordion }}>
      <S.Root className="accordion-root" data-type={type}>
        {children}
      </S.Root>
    </Context.Provider>
  )
}
