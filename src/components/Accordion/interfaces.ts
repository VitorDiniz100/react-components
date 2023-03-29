import { ReactNode } from 'react'

type TypeRoot = 'single' | 'multiple'

interface SlideProps {
  duration: number
}

interface IconProps {
  element: ReactNode
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
  slide: SlideProps
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
  name: string
  icon?: IconProps
  slide?: SlideProps
}
