import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Icon, { IconTypes } from '.'

storiesOf('Atoms|Icon', module).add('As Default', () => {
  return <Icon iconComponent={IconTypes.Facebook} size="100px" />
})
