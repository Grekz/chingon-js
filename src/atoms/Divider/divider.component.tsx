import styled from '@emotion/styled'
import * as React from 'react'

interface IDividerProps {
  color?: string
}

type DividerType = React.SFC<IDividerProps>

const Divider = (props: IDividerProps) => <DividerWrapper {...props} />

const DividerWrapper: DividerType = styled.hr`
  color: ${({ color }) => color};
`

export default Divider
