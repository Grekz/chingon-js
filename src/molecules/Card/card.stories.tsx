import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Card from '.'

storiesOf('Molecules|Card', module).add('As Default', () => (
  <Card
    image="https://placeholder.pics/svg/300x180"
    altImage="Test placeholder"
    header="Title here"
  >
    Some body content goes here let's see it complete
  </Card>
))
