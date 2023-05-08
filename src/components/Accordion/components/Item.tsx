import React from 'react'

import { ItemProps } from '../interfaces/item'
import { uuid } from '../utils/uuid'
import { Context } from './Context'

export function Item({
  title,
  icon,
  slideDuration = 400,
  uncontrolled = false,
  onActive = () => {},
  children,
}: ItemProps) {
  const [id] = React.useState(uuid())
  const [isOpen, setIsOpen] = React.useState<boolean>(true)

  const { activeAccordion, type, addActiveAccordion } =
    React.useContext(Context)

  const contentRef = React.useRef<HTMLDivElement>(null)

  const contentHeight = React.useRef<number>(0)

  const dataState = isOpen ? 'open' : 'closed'

  const dataControlled = uncontrolled ? 'false' : 'true'

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
    if (type === 'single' && !uncontrolled) addActiveAccordion(id)

    setIsOpen(!isOpen)
    onActive()
  }

  React.useEffect(() => {
    if (contentHeight.current === 0 && contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight
      setIsOpen(false)
    }
  }, [])

  React.useEffect(() => {
    if (activeAccordion !== id && type === 'single' && !uncontrolled) {
      setIsOpen(false)
    }
  }, [activeAccordion, type, id, uncontrolled])

  if (!type || !children) return null

  return (
    <div
      className="accordion-item"
      data-state={dataState}
      data-controlled={dataControlled}
    >
      <div
        className="accordion-header"
        data-state={dataState}
        data-controlled={dataControlled}
      >
        <button
          className="accordion-trigger"
          data-state={dataState}
          data-controlled={dataControlled}
          onClick={handleToggleContent}
        >
          <span
            className="accordion-title"
            data-state={dataState}
            data-controlled={dataControlled}
          >
            {title}
          </span>

          {icon &&
            (icon.activeElement && isOpen ? icon.activeElement : icon.element)}
        </button>
      </div>

      <div
        className="accordion-content"
        data-state={dataState}
        data-controlled={dataControlled}
        style={contentStyles}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  )
}
