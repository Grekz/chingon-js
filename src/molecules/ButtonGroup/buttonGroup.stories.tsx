import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Button from '../../atoms/Button'
import { ButtonTypes } from '../../atoms/Button/button.component'

import ButtonGroup from './'

const { PRIMARY } = ButtonTypes

storiesOf('Molecules|ButtonGroup', module).add('As Default', () => (
  <ButtonGroup>
    <Button buttonType={PRIMARY}>Left</Button>
    <Button buttonType={PRIMARY}>Center</Button>
    <Button buttonType={PRIMARY}>Right</Button>
  </ButtonGroup>
))
