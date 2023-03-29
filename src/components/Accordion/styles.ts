import styled, { css } from 'styled-components'
import {
  AccordionContentStyledProps,
  AccordionTriggerStyledProps,
} from './interfaces'

export const AccordionRoot = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionTrigger = styled.div<AccordionTriggerStyledProps>`
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

export const AccordionContent = styled.div<AccordionContentStyledProps>`
  height: 0;
  overflow: hidden;
  transition: height ${(props) => props.slide.duration}ms;

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
