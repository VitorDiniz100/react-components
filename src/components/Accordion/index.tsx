import {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { RootProps, ItemProps } from './interfaces'
import { Context } from './Context'
import uuid from 'react-uuid'

import * as S from './styles'

export function Root({
  type = 'single',
  children,
}: PropsWithChildren<RootProps>) {
  const [activeAccordion, setActiveAccordion] = useState<string>('')

  function addActiveAccordion(id: string) {
    setActiveAccordion(id)
  }

  return (
    <Context.Provider value={{ activeAccordion, type, addActiveAccordion }}>
      <S.Root className="accordion-root" data-type={type}>
        {children}
      </S.Root>
    </Context.Provider>
  )
}

export function Item({
  title,
  icon,
  slideDuration = 400,
  children,
}: PropsWithChildren<ItemProps>) {
  const [id, setId] = useState<string>('')
  const [contentHeight, setContentHeight] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const { activeAccordion, type, addActiveAccordion } = useContext(Context)

  const contentRef = useRef<HTMLDivElement>(null)

  const generatedId = uuid()

  function handleToggleContent() {
    if (type === 'single') {
      addActiveAccordion(id)
    }

    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (!id.length && type === 'single') {
      setId(generatedId)
    }

    if (activeAccordion !== id && type === 'single') {
      setIsOpen(false)
    }

    if (contentHeight === 0 && contentRef.current) {
      setContentHeight(contentRef.current.clientHeight)
      setIsOpen(false)
    }
  }, [activeAccordion, contentHeight, type, id, generatedId])

  return (
    <S.Item className="accordion-item" data-state={isOpen ? 'open' : 'close'}>
      <S.Header className="accordion-header">
        <S.Trigger
          className={isOpen ? 'accordion-trigger active' : 'accordion-trigger'}
          isOpen={isOpen}
          icon={icon}
          onClick={handleToggleContent}
        >
          <S.Title className="accordion-title">{title}</S.Title>

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
        </S.Trigger>
      </S.Header>
      <S.Body
        className={isOpen ? 'accordion-body visible' : 'accordion-body'}
        ref={contentRef}
        isOpen={isOpen}
        contentHeight={contentHeight}
        slideDuration={slideDuration}
      >
        {children}
      </S.Body>
    </S.Item>
  )
}
