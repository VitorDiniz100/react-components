import { ReactNode } from 'react'

type TypeRoot = 'single' | 'multiple'

export interface AccordionStyledProps {
  isOpen: boolean
}

export interface AccordionContextProps {
  activeAccordion: string
  typeRoot: TypeRoot
  addActiveAccordion: (id: string) => void
}

export interface RootProps {
  type?: TypeRoot
}

interface IconProps {
  element: ReactNode
}

export interface ItemProps {
  title: string
  icon?: IconProps
}
