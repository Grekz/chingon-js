import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import List from '.'
import ListItem from '../../atoms/ListItem'

storiesOf('Molecules|List', module).add('As Default', () => (
  <List>
    <ListItem>List item</ListItem>
    <ListItem>List item</ListItem>
    <ListItem isActive>Active list item</ListItem>
  </List>
))
