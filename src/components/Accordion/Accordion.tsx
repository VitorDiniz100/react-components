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
}

function Item({
  title,
  icon,
  slideDuration = 400,
  children,
}: PropsWithChildren<ItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [contentHeight, setContentHeight] = useState<number>(0)

  const { activeAccordion, type, addActiveAccordion } = useContext(Context)

  const dataState = isOpen ? 'open' : 'closed'

  const contentRef = useRef<HTMLDivElement>(null)

  const id = useMemo(() => {
    return uuid()
  }, [])

  function handleToggleContent() {
    setIsOpen(!isOpen)

    if (type === 'single') {
      addActiveAccordion(id)
    }
  }

  useEffect(() => {
    if (contentHeight === 0 && contentRef.current) {
      setContentHeight(contentRef.current.clientHeight)
      setIsOpen(false)
    }
  }, [contentHeight, isOpen])

  useEffect(() => {
    if (activeAccordion !== id && type === 'single') {
      setIsOpen(false)
    }
  }, [activeAccordion, type, id])

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
      <div
        className="accordion-content"
        data-state={dataState}
        ref={contentRef}
        style={{
          height:
            contentHeight === 0 ? 'auto' : isOpen ? `${contentHeight}px` : '0',
          overflow: 'hidden',
          transition: `height ${slideDuration}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export { Provider, Item }
