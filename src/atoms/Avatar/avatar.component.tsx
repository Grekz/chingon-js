import styled from '@emotion/styled'
import * as React from 'react'

interface IAvatarProps {
  content: string
  backgroundColor?: string
  hasImage?: boolean
  size?: string
}

type AvatarType = React.SFC<IAvatarProps>

const Avatar = (props: IAvatarProps) => (
  <AvatarWrapper {...props}>
    {props.hasImage ? null : <span>{props.content}</span>}
  </AvatarWrapper>
)
Avatar.defaultProps = {
  backgroundColor: 'none',
  size: '100px',
}

const AvatarWrapper: AvatarType = styled.div`
  display: inline-flex;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ content, hasImage }) =>
    hasImage ? `url(${content})` : null};
  background-size: 100%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  align-content: center;
  text-align: center;
  flex-flow: row wrap;
  vertical-align: top;
  > span {
    width: 100%;
    font-size: 2rem;
  }
`

export default Avatar
