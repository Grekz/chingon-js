// @flow
import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Atoms|Button', module).add('As Default', () => (
  <Button>Some button</Button>
))
