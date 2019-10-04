import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import RadioGroup from '.'

storiesOf('Molecules|RadioGroup', module).add('As Default', () => (
  <RadioGroup options={['Hello', 'World']} />
))
