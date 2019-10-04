import * as React from 'react'

// tslint:disable-next-line: no-implicit-dependencies
import { storiesOf } from '@storybook/react'

import Modal from '.'
import Button from '../../atoms/Button'
import { ButtonTypes } from '../../atoms/Button/button.component'

storiesOf('Molecules|Modal', module).add('As Default', () => (
  <Modal
    header="Hello modal"
    footer={
      <>
        <Button buttonType={ButtonTypes.SECONDARY}>Cancel</Button>&nbsp;
        <Button buttonType={ButtonTypes.PRIMARY}>Accept</Button>
      </>
    }
  >
    <p>Modal</p>
  </Modal>
))
