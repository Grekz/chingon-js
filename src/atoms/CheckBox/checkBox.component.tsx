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

type LabelType = React.SFC<ILabelProps>

interface ICheckBoxProps extends IInputProps, ILabelProps {}

const CheckBox = ({
  checked = false,
  id,
  onChange,
  children,
}: ICheckBoxProps) => {
  const [isChecked, setChecked] = React.useState(checked)
  onChange =
    typeof onChange === 'function'
      ? onChange
      : (event: React.FormEvent<HTMLInputElement>) => {
          setChecked(!isChecked)
        }
  return (
    <CheckBoxWrapper>
      <CheckBoxInput
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <CheckBoxLabel htmlFor={id}>{children}</CheckBoxLabel>
    </CheckBoxWrapper>
  )
}

const CheckBoxWrapper = styled.div``

const CheckBoxInput: InputType = styled.input``

const CheckBoxLabel: LabelType = styled.label``

export default CheckBox
