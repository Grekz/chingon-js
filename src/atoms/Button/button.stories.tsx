import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Button from '.'
import { ButtonTypes } from './button.component'

const { PRIMARY, SECONDARY, SUCCESS, WARNING, DANGER, INFO } = ButtonTypes

storiesOf('Atoms|Button', module).add('As Default', () => (
  <>
    <Button buttonType={PRIMARY}>Primary</Button>
    &nbsp;
    <Button buttonType={SECONDARY}>Secondary</Button>
    &nbsp;
    <Button buttonType={SUCCESS}>Success</Button>
    &nbsp;
    <Button buttonType={WARNING}>Warning</Button>
    &nbsp;
    <Button buttonType={DANGER}>Danger</Button>
    &nbsp;
    <Button buttonType={INFO}>Info</Button>
    &nbsp;
  </>
))
