import { ReactNode } from 'react'

type TypeRoot = 'single' | 'multiple'

type SlideDuration = number

interface IconProps {
  defaultElement: ReactNode
  activeElement?: ReactNode
  rotateElement?: boolean
}

export interface AccordionItemStyledProps {
  firstRender: boolean
  isOpen: boolean
}

export interface AccordionTriggerStyledProps extends AccordionItemStyledProps {
  icon?: IconProps
}

export interface AccordionContentStyledProps extends AccordionItemStyledProps {
  contentHeight: number
  slideDuration: SlideDuration
}

export interface AccordionContextProps {
  activeAccordion: string
  type: TypeRoot
  addActiveAccordion: (id: string) => void
}

export interface RootProps {
  type?: TypeRoot
}

export interface ItemProps {
  title: string
  icon?: IconProps
  slideDuration?: SlideDuration
}
