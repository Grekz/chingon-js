import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'

import Modal from '.'
import Button from '../../atoms/Button'
import { ButtonTypes } from '../../atoms/Button/button.component'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<List /> rendering', () => {
  it('should render List', () => {
    const wrapper = shallow(
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
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
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
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
