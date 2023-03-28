import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
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

  function addActiveAccordion(id: string) {
    setActiveAccordion(id)
  }

  return (
    <AccordionContext.Provider
      value={{ activeAccordion, type, addActiveAccordion }}
    >
      <S.AccordionRoot className="accordion-root" data-type={type}>
        {children}
      </S.AccordionRoot>
    </AccordionContext.Provider>
  )
}

export function Item({ title, icon, children }: PropsWithChildren<ItemProps>) {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false)
  const [accordionId, setAccordionId] = useState<string>('')

  const { activeAccordion, type, addActiveAccordion } =
    useContext(AccordionContext)

  const id = uuid()

  function handleToggleContent() {
    if (type === 'single') {
      addActiveAccordion(accordionId)
    }

    setAccordionIsOpen(!accordionIsOpen)
  }

  useEffect(() => {
    if (!accordionId.length && type === 'single') {
      setAccordionId(id)
    }

    if (activeAccordion !== accordionId && type === 'single') {
      setAccordionIsOpen(false)
    }
  }, [activeAccordion, type, accordionId, id])

  return (
    <S.AccordionItem
      className="accordion-item"
      data-state={accordionIsOpen ? 'open' : 'close'}
      isOpen={accordionIsOpen}
    >
      <S.AccordionHeader className="accordion-header" isOpen={accordionIsOpen}>
        <S.AccordionTrigger
          className={
            accordionIsOpen ? 'accordion-trigger active' : 'accordion-trigger'
          }
          onClick={handleToggleContent}
          isOpen={accordionIsOpen}
        >
          <span>{title}</span>
          {icon && icon.element}
        </S.AccordionTrigger>
      </S.AccordionHeader>
      <S.AccordionContent
        className={
          accordionIsOpen ? 'accordion-content visible' : 'accordion-content'
        }
        isOpen={accordionIsOpen}
      >
        {children}
      </S.AccordionContent>
    </S.AccordionItem>
  )
}
