import styled from '@emotion/styled'
import * as React from 'react'
interface IButton {
  color?: string
}

type ButtonType = React.SFC<IButton>

const WrapperButton: ButtonType = styled.button`
  color: ${(props: IButton) => props.color};
  background: aqua;
`

const Button: ButtonType = props => (
  <WrapperButton>{props.children}</WrapperButton>
)

export default Button
