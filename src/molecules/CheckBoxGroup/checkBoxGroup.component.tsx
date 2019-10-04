import styled from '@emotion/styled'
import * as React from 'react'
import CheckBox from '../../atoms/CheckBox'

interface ICheckBoxGroupProps {
  options?: string[]
}

type CheckBoxGroupType = React.SFC<ICheckBoxGroupProps>

const CheckBoxGroup = (props: ICheckBoxGroupProps) => {
  const { options } = props
  return options ? (
    <CheckBoxGroupWrapper>
      {options.map((item, index) => (
        <CheckBox id={`checkBox_${index}`} key={index}>
          {item}
        </CheckBox>
      ))}
    </CheckBoxGroupWrapper>
  ) : null
}

const CheckBoxGroupWrapper: CheckBoxGroupType = styled.div``

export default CheckBoxGroup
