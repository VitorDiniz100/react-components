type TypeRoot = 'single' | 'multiple'

type SlideDuration = number

interface IconProps {
  type: 'html' | 'jsx'
  component?: JSX.Element
  activeComponent?: JSX.Element
  src?: string
  activeSrc?: string
  rotate?: boolean
  rotateTime?: number
}

export interface AccordionItemStyledProps {
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
