import styled from '@emotion/styled'
import * as React from 'react'

interface IAlertProps {
  alertType: AlertTypes
  children?: React.ReactNode | string
  role?: string
}

type AlertType = React.SFC<IAlertProps>

export enum AlertTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

const Alert: AlertType = props => (
  <AlertWrapper role="alert" alertType={props.alertType}>
    {props.children}
  </AlertWrapper>
)

Alert.defaultProps = {
  alertType: AlertTypes.PRIMARY,
  children: 'A simple alert component - Check it out',
}

// Skins

interface ISkin {
  backgroundColor: string
  borderColor: string
  fontColor: string
}

const primary: ISkin = {
  backgroundColor: '#cce5ff',
  borderColor: '#b8daff',
  fontColor: '#004085',
}

const secondary: ISkin = {
  backgroundColor: '#e2e3e5',
  borderColor: '#d6d8db',
  fontColor: '#383d41',
}

const success: ISkin = {
  backgroundColor: '#d4edda',
  borderColor: '#c3e6cb',
  fontColor: '#155724',
}
const danger: ISkin = {
  backgroundColor: '#f8d7da',
  borderColor: '#f5c6cb',
  fontColor: '#721c24',
}

const warning: ISkin = {
  backgroundColor: '#fff3cd',
  borderColor: '#ffeeba',
  fontColor: '#856404',
}

const info: ISkin = {
  backgroundColor: '#d1ecf1',
  borderColor: '#bee5eb',
  fontColor: '#0c5460',
}

const getSkinProp = (alertType: AlertTypes, prop: string): string => {
  const { PRIMARY, SECONDARY, SUCCESS, WARNING, DANGER, INFO } = AlertTypes
  switch (alertType) {
    case PRIMARY:
      return primary[prop]
    case SECONDARY:
      return secondary[prop]
    case SUCCESS:
      return success[prop]
    case WARNING:
      return warning[prop]
    case DANGER:
      return danger[prop]
    case INFO:
      return info[prop]
    default:
      return primary[prop]
  }
}

const AlertWrapper: AlertType = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: ${({ alertType }): string => getSkinProp(alertType, 'fontColor')};
  background-color: ${({ alertType }): string =>
    getSkinProp(alertType, 'backgroundColor')};
  border-color: ${({ alertType }): string =>
    getSkinProp(alertType, 'borderColor')};
`

export default Alert
