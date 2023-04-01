import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ItemProps } from './interfaces'
import { Context } from './Context'
import uuid from 'react-uuid'

import * as S from './styles'

export default function Item({
  title,
  icon,
  slideDuration = 400,
  children,
}: PropsWithChildren<ItemProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [bodyHeight, setBodyHeight] = useState<number>(0)

  const { activeAccordion, type, addActiveAccordion } = useContext(Context)

  const bodyRef = useRef<HTMLDivElement>(null)

  const id = useMemo(() => {
    return uuid()
  }, [])

  const handleToggleContent = useCallback(() => {
    if (type === 'single') {
      addActiveAccordion(id)
    }

    setIsOpen(!isOpen)
  }, [isOpen, id, type, addActiveAccordion])

  useEffect(() => {
    if (activeAccordion !== id && type === 'single') {
      setIsOpen(false)
    }

    if (bodyHeight === 0 && bodyRef.current) {
      setBodyHeight(bodyRef.current.clientHeight)
      setIsOpen(false)
    }
  }, [activeAccordion, bodyHeight, type, id])

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
        ref={bodyRef}
        isOpen={isOpen}
        bodyHeight={bodyHeight}
        slideDuration={slideDuration}
      >
        {children}
      </S.Body>
    </S.Item>
  )
}
