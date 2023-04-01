import styled, { css } from 'styled-components'
import { BodyStyledProps, TriggerStyledProps } from './interfaces'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export const Trigger = styled.button<TriggerStyledProps>`
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

export const Title = styled.span`
  font-size: 1rem;
`

export const Body = styled.div<BodyStyledProps>`
  height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height ${(props) => props.slideDuration}ms;

  ${(props) => {
    if (props.bodyHeight === 0) {
      return css`
        height: auto;
      `
    }

    if (props.isOpen) {
      return css`
        height: ${props.bodyHeight}px;
      `
    }
  }}
`
