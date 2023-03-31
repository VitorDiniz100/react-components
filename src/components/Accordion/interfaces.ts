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

export interface ItemStyledProps {
  isOpen: boolean
}

export interface TriggerStyledProps extends ItemStyledProps {
  icon?: IconProps
}

export interface ContentStyledProps extends ItemStyledProps {
  contentHeight: number
  slideDuration: SlideDuration
}

export interface ContextProps {
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
