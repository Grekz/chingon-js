import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import CheckBox from '.'

storiesOf('Atoms|CheckBox', module).add('As Default', () => (
  <CheckBox checked={true} id="myCheckBox">
    Checkbox button
  </CheckBox>
))
