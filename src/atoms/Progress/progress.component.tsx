import styled from '@emotion/styled'
import * as React from 'react'

interface IProgressProps {
  progress: number
  max: number
  color: 'string'
  backColor: 'string'
  children?: React.ReactNode
}

const Progress = (props: IProgressProps) => (
  <ProgressWrapper {...props}>
    <div>{props.children}</div>
  </ProgressWrapper>
)

Progress.defaultProps = {
  backColor: '#e9ecef',
  color: '#007bff',
  max: 100,
  progress: 30,
}

const ProgressWrapper = styled.div`
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: ${({ backColor }: IProgressProps) => backColor};
  border-radius: 0.25rem;
  > div {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: ${({ color }: IProgressProps) => color};
    transition: width 0.6s ease;
    width: ${({ progress, max }: IProgressProps) =>
      `${(progress / max) * 100}%`};
  }
`

export default Progress
