import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Progress from '.'

storiesOf('Atoms|Progress', module).add('As Default', () => (
  <Progress max={100} progress={20} />
))
