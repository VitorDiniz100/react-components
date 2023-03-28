import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { AccordionContextProps, RootProps, ItemProps } from './interfaces'
import uuid from 'react-uuid'

import * as S from './styles'

const AccordionContext = createContext({} as AccordionContextProps)

export function Root({
  type = 'single',
  children,
}: PropsWithChildren<RootProps>) {
  const [activeAccordion, setActiveAccordion] = useState<string>('')

  const typeRoot = type

  function addActiveAccordion(id: string) {
    setActiveAccordion(id)
  }

  return (
    <AccordionContext.Provider
      value={{ activeAccordion, typeRoot, addActiveAccordion }}
    >
      <S.AccordionRoot className="accordion-root" data-type={typeRoot}>
        {children}
      </S.AccordionRoot>
    </AccordionContext.Provider>
  )
}

export function Item({ title, icon, children }: PropsWithChildren<ItemProps>) {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false)
  const [accordionId, setAccordionId] = useState<string>('')

  const id = uuid()

  const { activeAccordion, typeRoot, addActiveAccordion } =
    useContext(AccordionContext)

  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  function handleToggleContent() {
    if (typeRoot === 'single') {
      addActiveAccordion(accordionId)
    }

    setAccordionIsOpen(!accordionIsOpen)
  }

  useEffect(() => {
    if (!accordionId.length && typeRoot === 'single') {
      setAccordionId(id)
    }

    if (activeAccordion !== accordionId && typeRoot === 'single') {
      setAccordionIsOpen(false)
      triggerRef.current?.classList.remove('active')
      contentRef.current?.classList.remove('open')
    }
  }, [activeAccordion, typeRoot, accordionId, id])

  return (
    <S.AccordionItem
      className="accordion-item"
      data-state={accordionIsOpen ? 'open' : 'close'}
      isOpen={accordionIsOpen}
    >
      <S.AccordionHeader className="accordion-header" isOpen={accordionIsOpen}>
        <S.AccordionTrigger
          className={`accordion-trigger ${accordionIsOpen ? 'active' : ''}`}
          onClick={handleToggleContent}
          ref={triggerRef}
          isOpen={accordionIsOpen}
        >
          <span>{title}</span>
          {icon && icon.element}
        </S.AccordionTrigger>
      </S.AccordionHeader>
      <S.AccordionContent
        className={`accordion-content ${
          accordionIsOpen ? 'accordion-opened' : 'accordion-closed'
        }`}
        ref={contentRef}
        isOpen={accordionIsOpen}
      >
        {children}
      </S.AccordionContent>
    </S.AccordionItem>
  )
}
