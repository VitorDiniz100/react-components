import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import uuid from 'react-uuid'

// -------------------------//
// AccordionContext
// -------------------------//

interface ContextProps {
  activeAccordion: string
  type: 'single' | 'multiple'
  addActiveAccordion: (id: string) => void
}

const Context = createContext({} as ContextProps)

/* ----------------------------
// AccordionProvider
// ------------------------- */

interface ProviderProps {
  type: 'single' | 'multiple'
}

function Provider({ type, children }: PropsWithChildren<ProviderProps>) {
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

/* ----------------------------
// AccordionItem
// ------------------------- */

interface IconProps {
  type: 'img' | 'node'
  children?: ReactNode
  activeChildren?: ReactNode
  src?: string
  activeSrc?: string
}

interface ItemProps {
  title: string
  icon?: IconProps
  slideDuration?: number
  uncontrolled?: boolean
  onTrigger?: () => void
}

function Item({
  title,
  icon,
  slideDuration = 400,
  uncontrolled = false,
  onTrigger = () => {},
  children,
}: PropsWithChildren<ItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [contentHeight, setContentHeight] = useState<number>(0)

  const { activeAccordion, type, addActiveAccordion } = useContext(Context)

  const dataState = uncontrolled ? 'uncontrolled' : isOpen ? 'open' : 'closed'

  const contentRef = useRef<HTMLDivElement>(null)

  const id = useMemo(() => {
    return uuid()
  }, [])

  function handleToggleContent() {
    setIsOpen(!isOpen)

    uncontrolled && onTrigger()

    type === 'single' && !uncontrolled && addActiveAccordion(id)
  }

  useEffect(() => {
    if (contentHeight === 0 && contentRef.current) {
      setContentHeight(contentRef.current.clientHeight)
      setIsOpen(false)
    }
  }, [contentHeight, isOpen])

  useEffect(() => {
    if (activeAccordion !== id && type === 'single' && !uncontrolled) {
      setIsOpen(false)
    }
  }, [activeAccordion, type, id, uncontrolled])

  if (!type) return null

  return (
    <div className="accordion-item" data-state={dataState}>
      <div className="accordion-header">
        <button className="accordion-trigger" onClick={handleToggleContent}>
          <span className="accordion-title">{title}</span>

          {icon?.type === 'img' && icon.src && (
            <img
              src={icon.activeSrc && isOpen ? icon.activeSrc : icon.src}
              alt=""
            />
          )}

          {icon?.type === 'node' &&
            icon.children &&
            (icon.activeChildren && isOpen
              ? icon.activeChildren
              : icon.children)}
        </button>
      </div>
      {children && !uncontrolled && (
        <div
          className="accordion-content"
          ref={contentRef}
          style={{
            height:
              contentHeight === 0
                ? 'auto'
                : isOpen
                ? `${contentHeight}px`
                : '0',
            overflow: 'hidden',
            transition: `height ${slideDuration}ms`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export { Provider, Item }
