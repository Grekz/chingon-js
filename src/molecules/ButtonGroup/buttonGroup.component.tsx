import styled from '@emotion/styled'
import * as React from 'react'

import { ButtonType } from '../../atoms/Button'

interface IButtonGroupProps {
  children: ButtonType[] | ButtonType
  role: string
}

export type ButtonGroupType = React.SFC<IButtonGroupProps>

const ButtonGroup = props => (
  <ButtonGroupWrapper role="group">{props.children}</ButtonGroupWrapper>
)

ButtonGroup.defaultProps = {}

const ButtonGroupWrapper: ButtonGroupType = styled.div`
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  > button:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  > button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export default ButtonGroup
