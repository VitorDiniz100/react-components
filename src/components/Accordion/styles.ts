import styled, { css } from 'styled-components'
import {
  AccordionContentStyledProps,
  AccordionTriggerStyledProps,
} from './interfaces'

export const AccordionRoot = styled.div``

export const AccordionItem = styled.div``

export const AccordionHeader = styled.div``

export const AccordionTrigger = styled.button<AccordionTriggerStyledProps>`
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  svg,
  img {
    transition: transform 0.2s;

    ${(props) =>
      props.isOpen &&
      props.icon?.rotate &&
      !props.icon.activeSrc &&
      !props.icon.activeComponent
        ? css`
            transform: rotate(-180deg);
          `
        : ''}
  }
`

export const AccordionBody = styled.div<AccordionContentStyledProps>`
  height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height ${(props) => props.slideDuration}ms;

  ${(props) => {
    if (props.contentHeight === 0) {
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
