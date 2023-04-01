type TypeRoot = 'single' | 'multiple'

interface IconProps {
  type: 'html' | 'jsx'
  component?: JSX.Element
  activeComponent?: JSX.Element
  src?: string
  activeSrc?: string
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
  slideDuration?: number
}
