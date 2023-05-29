/* ----------------------------
// GitHub - VitorDiniz100
// v1.0.0
// ------------------------- */

import React from 'react'

/* ----------------------------
// AccordionContext
// ------------------------- */

interface ContextProps {
  activeAccordion: number | null
  type: 'single' | 'multiple'
  addActiveAccordion: (id: number) => void
}

const Context = React.createContext({} as ContextProps)

/* ----------------------------
// AccordionProvider
// ------------------------- */

interface AccordionProviderProps {
  type: 'single' | 'multiple'
  children: React.ReactNode
}

function AccordionProvider({ type, children }: AccordionProviderProps) {
  const [activeAccordion, setActiveAccordion] = React.useState<number | null>(
    null,
  )

  function addActiveAccordion(id: number) {
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
  element: React.ReactNode
  activeElement?: React.ReactNode
}

interface AccordionItemProps {
  title: string
  icon?: IconProps
  slideDuration?: number
  children?: React.ReactNode
  onTrigger?: () => void
}

function AccordionItem({
  title,
  icon,
  slideDuration = 400,
  children,
  onTrigger = () => {},
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(true)

  const { activeAccordion, type, addActiveAccordion } =
    React.useContext(Context)

  const id = React.useMemo(
    () => Number(new Date()) * Math.floor(Math.random() * 9999),
    [],
  )

  const contentRef = React.useRef<HTMLDivElement>(null)

  const contentHeight = React.useRef<number>(0)

  const dataState = children ? (isOpen ? 'open' : 'closed') : 'uncontrolled'

  const contentStyles: React.CSSProperties = {
    height:
      contentHeight.current === 0
        ? 'auto'
        : isOpen
        ? `${contentHeight.current}px`
        : '0',
    overflow: 'hidden',
    transition: `height ${slideDuration}ms`,
  }

  function handleToggleContent() {
    if (type === 'single' && children) {
      addActiveAccordion(id)
    }

    setIsOpen(!isOpen)
    onTrigger()
  }

  React.useLayoutEffect(() => {
    if (contentHeight.current === 0 && contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight
      setIsOpen(false)
    }
  }, [])

  React.useEffect(() => {
    if (activeAccordion !== id && type === 'single') {
      setIsOpen(false)
    }
  }, [activeAccordion, type, id])

  if (!type) return null

  return (
    <div className="accordion-item" data-state={dataState}>
      <div
        className="accordion-header"
        data-state={dataState}
        onClick={handleToggleContent}
      >
        <span className="accordion-title" data-state={dataState}>
          {title}
        </span>

        {icon && (
          <span className="accordion-icon" data-state={dataState}>
            {icon.activeElement && children && isOpen
              ? icon.activeElement
              : icon.element}
          </span>
        )}
      </div>

      <div
        className="accordion-content"
        data-state={dataState}
        style={contentStyles}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  )
}

export { AccordionProvider, AccordionItem }
