import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import DropDown from '.'

storiesOf('Molecules|DropDown', module).add('As Default', () => (
  <DropDown
    title="My drop down"
    options={['Option 1', 'Option 2', 'Option 3']}
  />
))
