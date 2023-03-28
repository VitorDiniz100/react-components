import styled, { css } from 'styled-components'
import { AccordionStyledProps } from './interfaces'

export const AccordionRoot = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionItem = styled.div<AccordionStyledProps>`
  display: flex;
  flex-direction: column;
`

export const AccordionHeader = styled.div<AccordionStyledProps>`
  display: block;
`

export const AccordionTrigger = styled.div<AccordionStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const AccordionContent = styled.div<AccordionStyledProps>`
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
