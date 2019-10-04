import styled from '@emotion/styled'
import * as React from 'react'

interface IInputProps {
  type: InputTypes
  value?: string
  placeholder?: string
  label: string
}

type InputTypes = 'text' | 'number' | 'password' | 'email'

const Input = ({ value, placeholder, label }: IInputProps) => (
  <InputWrapper>
    {label ? <label>{label}</label> : null}
    <input type="text" value={value} placeholder={placeholder} />
  </InputWrapper>
)

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  > label {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  > input {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
    display: block;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`

export default Input
