import styled from '@emotion/styled'
import * as React from 'react'

interface IButtonProps {
  buttonType: ButtonTypes
  children?: React.ReactNode | string
  role?: string
}

type ButtonType = React.SFC<IButtonProps>

export enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

const Button: ButtonType = props => (
  <ButtonWrapper role="button" buttonType={props.buttonType}>
    {props.children}
  </ButtonWrapper>
)

Button.defaultProps = {
  buttonType: ButtonTypes.PRIMARY,
  children: 'A simple button',
}

// Skins

interface ISkin {
  backgroundColor: string
  borderColor: string
  fontColor: string
}

const primary: ISkin = {
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  fontColor: '#fff',
}

const primaryHover: ISkin = {
  backgroundColor: '#0069d9',
  borderColor: '#0062cc',
  fontColor: '#fff',
}

const secondary: ISkin = {
  backgroundColor: '#6c757d',
  borderColor: '#6c757d',
  fontColor: '#fff',
}

const secondaryHover: ISkin = {
  backgroundColor: '#5a6268',
  borderColor: '#545b62',
  fontColor: '#fff',
}

const success: ISkin = {
  backgroundColor: '#28a745',
  borderColor: '#28a745',
  fontColor: '#fff',
}

const successHover: ISkin = {
  backgroundColor: '#218838',
  borderColor: '#1e7e34',
  fontColor: '#fff',
}

const danger: ISkin = {
  backgroundColor: '#dc3545',
  borderColor: '#dc3545',
  fontColor: '#fff',
}

const dangerHover: ISkin = {
  backgroundColor: '#c82333',
  borderColor: '#bd2130',
  fontColor: '#fff',
}

const warning: ISkin = {
  backgroundColor: '#ffc107',
  borderColor: '#ffc107',
  fontColor: '#212529',
}
const warningHover: ISkin = {
  backgroundColor: '#e0a800',
  borderColor: '#d39e00',
  fontColor: '#212529',
}

const info: ISkin = {
  backgroundColor: '#17a2b8',
  borderColor: '#17a2b8',
  fontColor: '#fff',
}
const infoHover: ISkin = {
  backgroundColor: '#138496',
  borderColor: '#117a8b',
  fontColor: '#fff',
}

const getSkinProp = (
  buttonType: ButtonTypes,
  prop: string,
  isHover?: boolean
): string => {
  const { PRIMARY, SECONDARY, SUCCESS, WARNING, DANGER, INFO } = ButtonTypes
  switch (buttonType) {
    case PRIMARY:
      return isHover ? primaryHover[prop] : primary[prop]
    case SECONDARY:
      return isHover ? secondaryHover[prop] : secondary[prop]
    case SUCCESS:
      return isHover ? successHover[prop] : success[prop]
    case WARNING:
      return isHover ? warningHover[prop] : warning[prop]
    case DANGER:
      return isHover ? dangerHover[prop] : danger[prop]
    case INFO:
      return isHover ? infoHover[prop] : info[prop]
    default:
      return primary[prop]
  }
}

const ButtonWrapper: ButtonType = styled.button`
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${({ buttonType }): string => getSkinProp(buttonType, 'fontColor')};
  background-color: ${({ buttonType }): string =>
    getSkinProp(buttonType, 'backgroundColor')};
  border-color: ${({ buttonType }): string =>
    getSkinProp(buttonType, 'borderColor')};
  &:hover {
    color: ${({ buttonType }): string =>
      getSkinProp(buttonType, 'fontColor', true)};
    background-color: ${({ buttonType }): string =>
      getSkinProp(buttonType, 'backgroundColor', true)};
    border-color: ${({ buttonType }): string =>
      getSkinProp(buttonType, 'borderColor', true)};
  }
`

export default Button
