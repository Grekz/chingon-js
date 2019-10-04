import styled from '@emotion/styled'
import * as React from 'react'

interface IInputProps {
  id: string
  checked?: boolean
  type?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

type InputType = React.SFC<IInputProps>

interface ILabelProps {
  children: React.ReactNode
  htmlFor?: string
}

interface IRadioProps extends IInputProps, ILabelProps {}

type LabelType = React.SFC<ILabelProps>

const Radio = ({ checked = false, children, id, onChange }: IRadioProps) => (
  <RadioWrapper>
    <RadioInput id={id} type="radio" checked={checked} onChange={onChange} />
    <RadioLabel htmlFor={id}>{children}</RadioLabel>
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
