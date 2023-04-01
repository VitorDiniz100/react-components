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

export default function Item({
  title,
  icon,
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

    if (contentHeight === 0 && contentRef.current) {
      setContentHeight(contentRef.current.clientHeight)
      setIsOpen(false)
    }
  }, [activeAccordion, contentHeight, type, id])

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
          overflow: 'hidden',
          transition: `height ${slideDuration}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
