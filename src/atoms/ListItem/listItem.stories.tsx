import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import ListItem from '.'

storiesOf('Atoms|ListItem', module).add('As Default', () => (
  <>
    <ListItem>List item</ListItem>
    <ListItem isActive={true}>Active list item</ListItem>
    <ListItem>List item</ListItem>
  </>
))
