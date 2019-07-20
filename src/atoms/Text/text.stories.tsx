import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Text from '.'

storiesOf('Atoms|Text', module).add('As Default', () => (
  <>
    <Text color="red" type="h1">
      Hello
    </Text>
    <Text color="magenta" type="h2">
      Hello
    </Text>
    <Text type="h3">Hello</Text>
    <Text type="span">Hello</Text>
  </>
))
