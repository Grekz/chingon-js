import styled from '@emotion/styled'
import * as React from 'react'

interface IInputProps {
  id: string
  isChecked?: boolean
  type?: string
}

type InputType = React.SFC<IInputProps>

interface ILabelProps {
  children: React.ReactNode
  for?: string
}

interface IRadioProps extends IInputProps, ILabelProps {}

type LabelType = React.SFC<ILabelProps>

const Radio = ({ isChecked = false, children, id }: IRadioProps) => (
  <RadioWrapper>
    <RadioInput id={id} type="radio" isChecked={isChecked} />
    <RadioLabel for={id}>{children}</RadioLabel>
  </RadioWrapper>
)

const RadioWrapper = styled.div`
  position: relative;
  display: block;
`

const RadioInput: InputType = styled.input`
  box-sizing: border-box;
  padding: 0;
`

const RadioLabel: LabelType = styled.label`
  display: inline-block;
`

export default Radio
