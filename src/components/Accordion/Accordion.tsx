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

/* ----------------------------
// AccordionContext
// ------------------------- */

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
      <div className="accordion-provider" data-type={type}>
        {children}
      </div>
    </Context.Provider>
  )
}

/* ----------------------------
// AccordionItem
// ------------------------- */

interface IconProps {
  render: ReactNode
  activeElement?: ReactNode
}

interface ItemProps {
  title: string
  icon?: IconProps
  slideDuration?: number
  uncontrolled?: boolean
  onActive?: () => void
}

function Item({
  title,
  icon,
  slideDuration = 400,
  uncontrolled = false,
  onActive = Function,
  children,
}: PropsWithChildren<ItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const { activeAccordion, type, addActiveAccordion } = useContext(Context)

  const contentRef = useRef<HTMLDivElement>(null)

  const contentHeight = useRef<number>(0)

  const id = useMemo(() => uuid(), [])

  const dataState = isOpen ? 'open' : 'closed'

  const height =
    contentHeight.current === 0
      ? 'auto'
      : isOpen
      ? `${contentHeight.current}px`
      : '0'

  function handleToggleContent() {
    if (type === 'single' && !uncontrolled) addActiveAccordion(id)

    setIsOpen(!isOpen)
    onActive()
  }

  useEffect(() => {
    if (contentHeight.current === 0 && contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    if (activeAccordion !== id && type === 'single' && !uncontrolled) {
      setIsOpen(false)
    }
  }, [activeAccordion, type, id, uncontrolled])

  if (!type) return null

  return (
    <div className="accordion-item" data-state={dataState}>
      <div className="accordion-header" data-state={dataState}>
        <button
          className="accordion-trigger"
          data-state={dataState}
          onClick={handleToggleContent}
        >
          <span className="accordion-title" data-state={dataState}>
            {title}
          </span>

          {icon &&
            (icon.activeElement && isOpen ? icon.activeElement : icon.render)}
        </button>
      </div>

      <div
        className="accordion-content"
        data-state={dataState}
        style={{
          height,
          overflow: 'hidden',
          transition: `height ${slideDuration}ms`,
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  )
}

export { Provider, Item }
