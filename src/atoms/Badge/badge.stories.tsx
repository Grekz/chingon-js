import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Badge from '.'

storiesOf('Atoms|Badge', module).add('As Default', () => (
  <Badge status="online" content="4" />
))
