import styled from '@emotion/styled'
import * as React from 'react'
import Radio from '../../atoms/Radio'

interface IRadioGroupProps {
  options?: string[]
}

type RadioGroupType = React.SFC<IRadioGroupProps>

const RadioGroup = (props: IRadioGroupProps) => {
  const [selected, setSelected] = React.useState('')

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSelected(event.currentTarget.id)
  }

  const { options } = props
  return options ? (
    <RadioGroupWrapper>
      {options.map((item, index) => (
        <Radio
          id={`radio_${index}`}
          checked={selected === `radio_${index}`}
          key={index}
          onChange={handleOnChange}
        >
          {item}
        </Radio>
      ))}
    </RadioGroupWrapper>
  ) : null
}

const RadioGroupWrapper: RadioGroupType = styled.div``

export default RadioGroup
