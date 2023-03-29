import styled, { css } from 'styled-components'
import {
  AccordionContentStyledProps,
  AccordionTriggerStyledProps,
} from './interfaces'

const AccordionFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

const AccordionFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const AccordionRoot = styled(AccordionFlexCol)``

export const AccordionItem = styled(AccordionFlexCol)``

export const AccordionHeader = styled(AccordionFlexCol)``

export const AccordionTrigger = styled(
  AccordionFlexRow,
)<AccordionTriggerStyledProps>`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  svg {
    transition: transform 0.2s;

    ${(props) =>
      props.isOpen && props.icon?.rotateElement
        ? css`
            transform: rotate(-180deg);
          `
        : ''}
  }
`

export const AccordionContent = styled(
  AccordionFlexCol,
)<AccordionContentStyledProps>`
  height: 0;
  overflow: hidden;
  transition: height ${(props) => props.slideDuration}ms;

  ${(props) => {
    if (!props.firstRender) {
      return css`
        height: auto;
      `
    }

    if (props.isOpen) {
      return css`
        height: ${props.contentHeight}px;
      `
    }
  }}
`
