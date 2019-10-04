import styled from '@emotion/styled'
import * as React from 'react'

interface IBadgeProps {
  status: BadgeStatusType
  content?: string
  fontColor?: string
  size?: string
}

export type BadgeStatusType = 'online' | 'away' | 'busy' | 'offline'

const Badge = ({ status, content, fontColor, size }: IBadgeProps) => {
  return (
    <BadgeWrapper status={status} fontColor={fontColor} size={size}>
      {content ? <span>{content}</span> : null}
    </BadgeWrapper>
  )
}

Badge.defaultProps = {
  fontColor: '#fff',
  size: '30px',
}

const getStatusColor = (status: BadgeStatusType) => {
  switch (status) {
    case 'online':
      return 'green'
    case 'away':
      return 'yellow'
    case 'busy':
      return 'red'
    case 'offline':
      return 'lightgray'
    default:
      return 'lightgray'
  }
}

const BadgeWrapper = styled.div`
  background-color: ${({ status }: IBadgeProps) => getStatusColor(status)};
  padding: 0.5rem;
  border-radius: 50%;
  color: ${({ fontColor }: IBadgeProps) => fontColor};
  width: ${({ size }: IBadgeProps) => size};
  height: ${({ size }: IBadgeProps) => size};
  display: inline-flex;
  align-content: center;
  text-align: center;
  flex-flow: row wrap;
  vertical-align: top;
  > span {
    width: 100%;
  }
`

export default Badge
