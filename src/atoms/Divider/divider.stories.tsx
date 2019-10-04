import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Divider from '.'

storiesOf('Atoms|Divider', module).add('As Default', () => (
  <Divider color="orange" />
))
