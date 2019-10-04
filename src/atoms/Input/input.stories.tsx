import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Input from '.'

storiesOf('Atoms|Input', module).add('As Default', () => (
  <Input type="text" placeholder="Input text" label="Test label" />
))
