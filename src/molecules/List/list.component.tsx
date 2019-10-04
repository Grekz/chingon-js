import * as React from 'react'
import styled from '@emotion/styled'

import { ListItemType } from '../../atoms/ListItem/listItem.component'

interface IListProps {
  children?: ListItemType[] | ListItemType
  role: string
}

type ListType = React.SFC<IListProps>

const List = props => <ListWrapper role="group">{props.children}</ListWrapper>

const ListWrapper: ListType = styled.div`
  display: flex;
  flex-direction: column;
`

export default List
