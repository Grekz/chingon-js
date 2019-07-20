import styled from '@emotion/styled'
import * as React from 'react'

interface ITextProps {
  children?: React.ReactNode | string
  type?: TextType
  color?: string
}

type TextType = 'h1' | 'h2' | 'h3' | 'span'

const TextWrapper = (props: ITextProps) => {
  const { children, color, type } = props
  switch (type) {
    case 'h1':
      return <H1Wrapper color={color}>{children}</H1Wrapper>
    case 'h2':
      return <H2Wrapper color={color}>{children}</H2Wrapper>
    case 'h3':
      return <H3Wrapper color={color}>{children}</H3Wrapper>
    case 'span':
      return <SpanWrapper color={color}>{children}</SpanWrapper>
    default:
      return <SpanWrapper color={color}>{children}</SpanWrapper>
  }
}

const Text = (props: ITextProps) => {
  const { type, color, children } = props
  return TextWrapper({ color, children, type })
}

Text.defaultProps = {
  children: 'Sample text',
  color: '#000',
  type: 'span',
}

const SpanWrapper = styled.span`
  color: ${props => props.color};
`

const H1Wrapper = styled.h1`
  color: ${props => props.color};
`

const H2Wrapper = styled.h2`
  color: ${props => props.color};
`

const H3Wrapper = styled.h3`
  color: ${props => props.color};
`

export default Text
