import styled from '@emotion/styled'
import * as React from 'react'

import Button from '../../atoms/Button'
import { ButtonTypes } from '../../atoms/Button/button.component'
import ListItem from '../../atoms/ListItem'
import List from '../List'

interface IDropDownProps {
  options?: string[]
  title?: string
}

type DropDownType = React.SFC<IDropDownProps>

const DropDown = ({ title = '', options }: IDropDownProps) => {
  const [isOpen, setOpen] = React.useState(false)
  const handleOnClick = () => setOpen(!isOpen)
  return (
    <DropDownWrapper>
      {options && title ? (
        <>
          <Button buttonType={ButtonTypes.PRIMARY} onClick={handleOnClick}>
            {title}
          </Button>
          {isOpen ? (
            <List>
              {options.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          ) : null}
        </>
      ) : null}
    </DropDownWrapper>
  )
}

const DropDownWrapper: DropDownType = styled.div`
  position: relative;
  > button::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    margin-left: 5px;
  }
`
export default DropDown
