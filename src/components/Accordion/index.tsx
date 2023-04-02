import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { ContextProps, RootProps, ItemProps } from './interfaces'

import uuid from 'react-uuid'

const Context = createContext({} as ContextProps)

export function AccordionRoot({
  type = 'single',
  children,
}: PropsWithChildren<RootProps>) {
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

export function AccordionItem({
  title,
  icon,
  height = 0,
  overflow = false,
  slideDuration = 400,
  children,
}: PropsWithChildren<ItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [contentHeight, setContentHeight] = useState<number>(0)

  const { activeAccordion, type, addActiveAccordion } = useContext(Context)

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
    if (contentHeight === 0 && contentHeight === 0 && contentRef.current) {
      setContentHeight(contentRef.current.clientHeight)
      setIsOpen(false)
    }

    if (contentHeight === 0 && height > 0) {
      setContentHeight(height)
      setIsOpen(false)
    }
  }, [contentHeight, height])

  useEffect(() => {
    if (activeAccordion !== id && type === 'single') {
      setIsOpen(false)
    }
  }, [activeAccordion, type, id])

  return (
    <div className="accordion-item" data-state={isOpen ? 'open' : 'closed'}>
      <div className="accordion-header">
        <button
          className={isOpen ? 'accordion-trigger active' : 'accordion-trigger'}
          onClick={handleToggleContent}
        >
          <span className="accordion-title">{title}</span>

          {icon?.type === 'html' && icon.src && (
            <img
              src={icon.activeSrc && isOpen ? icon.activeSrc : icon.src}
              alt=""
            />
          )}

          {icon?.type === 'jsx' &&
            icon.component &&
            (icon.activeComponent && isOpen
              ? icon.activeComponent
              : icon.component)}
        </button>
      </div>
      <div
        className={
          isOpen ? 'accordion-content open' : 'accordion-content closed'
        }
        ref={contentRef}
        style={{
          height: `${contentHeight === 0 ? 'auto' : ''} ${
            isOpen ? `${contentHeight}px` : 0
          }`,
          overflow: overflow ? 'auto' : 'hidden',
          transition: `height ${slideDuration}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
