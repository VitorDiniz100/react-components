import styled, { css } from 'styled-components'
import { BodyStyledProps, TriggerStyledProps } from './interfaces'

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Root = styled(BaseContainer)``

export const Item = styled(BaseContainer)``

export const Header = styled(BaseContainer)``

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

export const Body = styled(BaseContainer)<BodyStyledProps>`
  height: 0;
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
