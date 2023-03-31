import styled, { css } from 'styled-components'
import {
  AccordionContentStyledProps,
  AccordionTriggerStyledProps,
} from './interfaces'

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionRoot = styled(BaseContainer)``

export const AccordionItem = styled(BaseContainer)``

export const AccordionHeader = styled(BaseContainer)``

export const AccordionTrigger = styled.button<AccordionTriggerStyledProps>`
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  svg,
  img {
    transition: transform
      ${(props) =>
        props.icon?.rotateTime ? `${props.icon.rotateTime}ms` : '200ms'};

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

export const AccordionTitle = styled.span`
  font-size: 1rem;
`

export const AccordionBody = styled(BaseContainer)<AccordionContentStyledProps>`
  height: 0;
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
