import styled, { css } from 'styled-components'

interface ContentProps {
  isOpen: boolean
}

export const AccordionRoot = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionHeader = styled.div`
  display: block;
`

export const AccordionTrigger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const AccordionContent = styled.div<ContentProps>`
  ${(props) =>
    props.isOpen
      ? css`
          height: auto;
          opacity: 1;
        `
      : css`
          height: 0;
          opacity: 0;
        `}
`
