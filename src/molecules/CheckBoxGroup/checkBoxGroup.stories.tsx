import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import CheckBoxGroup from '.'

storiesOf('Molecules|CheckBoxGroup', module).add('As Default', () => (
  <CheckBoxGroup options={['Hello', 'World']} />
))
