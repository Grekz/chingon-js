import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import SocialIcon from '.'

storiesOf('Molecules|Social Icon', module).add('As Default', () => (
  <SocialIcon type="LinkedIn" size="100px" />
))
