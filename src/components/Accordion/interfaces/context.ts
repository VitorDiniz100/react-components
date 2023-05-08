export interface ContextProps {
  activeAccordion: string
  type: 'single' | 'multiple'
  addActiveAccordion: (id: string) => void
}
