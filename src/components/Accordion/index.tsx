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

export function Item({
  title,
  icon,
  slideDuration = 400,
  children,
}: PropsWithChildren<ItemProps>) {
  const [firstRender, setFirstRender] = useState<boolean>(false)
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(true)
  const [accordionContentHeight, setAccordionContentHeight] =
    useState<number>(0)
  const [accordionId, setAccordionId] = useState<string>('')

  const { activeAccordion, type, addActiveAccordion } =
    useContext(AccordionContext)

  const contentRef = useRef<HTMLDivElement>(null)

  const id = uuid()

  function handleToggleContent() {
    if (type === 'single') {
      addActiveAccordion(accordionId)
    }

    setAccordionIsOpen(!accordionIsOpen)
  }

  useEffect(() => {
    if (!firstRender && contentRef.current) {
      setFirstRender(true)
      setAccordionIsOpen(false)
      setAccordionContentHeight(contentRef.current.clientHeight)
    }
  }, [firstRender])

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
    >
      <S.AccordionHeader className="accordion-header">
        <S.AccordionTrigger
          className={
            accordionIsOpen ? 'accordion-trigger active' : 'accordion-trigger'
          }
          firstRender={firstRender}
          isOpen={accordionIsOpen}
          icon={icon}
          onClick={handleToggleContent}
        >
          <span>{title}</span>
          {icon && icon.activeElement && accordionIsOpen
            ? icon.activeElement
            : icon?.defaultElement}
        </S.AccordionTrigger>
      </S.AccordionHeader>
      <S.AccordionBody
        className={
          accordionIsOpen ? 'accordion-body visible' : 'accordion-body'
        }
        ref={contentRef}
        firstRender={firstRender}
        isOpen={accordionIsOpen}
        contentHeight={accordionContentHeight}
        slideDuration={slideDuration}
      >
        {children}
      </S.AccordionBody>
    </S.AccordionItem>
  )
}
