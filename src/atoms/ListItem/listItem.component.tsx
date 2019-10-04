import styled from '@emotion/styled'
import * as React from 'react'

interface IListItemProps {
  activeBackgroundColor?: string
  activeBorderColor?: string
  activeColor?: string
  backgroundColor?: string
  borderColor?: string
  children: React.ReactNode
  color?: string
  hoverBackgroundColor?: string
  isActive?: boolean
}

export type ListItemType = React.SFC<IListItemProps>

const ListItem = (props: IListItemProps) => (
  <ListItemWrapper {...props}>{props.children}</ListItemWrapper>
)

ListItem.defaultProps = {
  activeBackgroundColor: '#007bff',
  activeBorderColor: '#007bff',
  activeColor: '#fff',
  backgroundColor: '#fff',
  borderColor: 'rgba(0, 0, 0, 0.125)',
  color: '#000',
  hoverBackgroundColor: '#f8f9fa',
  isActive: false,
}

const ListItemWrapper: ListItemType = styled.div`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: ${props =>
    props.isActive ? props.activeBackgroundColor : props.backgroundColor};
  border: 1px solid
    ${props => (props.isActive ? props.activeBorderColor : props.borderColor)};
  color: ${props => (props.isActive ? props.activeColor : props.color)};
  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  &:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  &:hover,
  &:focus {
    z-index: 1;
    text-decoration: none;
    background-color: ${props =>
      props.isActive
        ? props.activeBackgroundColor
        : props.hoverBackgroundColor};
    color: ${props => (props.isActive ? props.activeColor : props.color)};
  }
`

export default ListItem
