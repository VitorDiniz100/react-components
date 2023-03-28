import styled, { css } from 'styled-components'

interface AccordionItemProps {
  isOpen: boolean
}

export const AccordionRoot = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionItem = styled.div<AccordionItemProps>`
  display: flex;
  flex-direction: column;
`

export const AccordionHeader = styled.div<AccordionItemProps>`
  display: block;
`

export const AccordionTrigger = styled.div<AccordionItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const AccordionContent = styled.div<AccordionItemProps>`
  ${(props) =>
    props.isOpen
      ? css`
          height: auto;
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          height: 0;
          opacity: 0;
          pointer-events: none;
        `}
`
