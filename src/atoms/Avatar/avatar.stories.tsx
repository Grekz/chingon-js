import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Avatar from '.'

storiesOf('Atoms|Avatar', module).add('As Default', () => (
  <>
    <Avatar content="AC" backgroundColor="lightgray" />
    <Avatar
      size="150px"
      content="https://avatars1.githubusercontent.com/u/3975603"
      hasImage={true}
    />
  </>
))
