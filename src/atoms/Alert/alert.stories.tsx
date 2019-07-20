import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Alert from '.'
import { AlertTypes } from './alert.component'

const { PRIMARY, SECONDARY, SUCCESS, WARNING, DANGER, INFO } = AlertTypes

storiesOf('Atoms|Alert', module).add('With different skins', () => (
  <>
    <Alert alertType={PRIMARY} />
    <Alert alertType={SECONDARY} />
    <Alert alertType={SUCCESS} />
    <Alert alertType={WARNING} />
    <Alert alertType={DANGER} />
    <Alert alertType={INFO} />
  </>
))
