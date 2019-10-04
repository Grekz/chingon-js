import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Radio from '.'

storiesOf('Atoms|Radio', module).add('As Default', () => (
  <Radio id="myRadio">Radio button</Radio>
))
