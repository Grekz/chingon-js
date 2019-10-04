import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import ButtonGroup from '.'
import Button from '../../atoms/Button'
import { ButtonTypes } from '../../atoms/Button/button.component'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

const { PRIMARY } = ButtonTypes

describe('<ButtonGroup /> rendering', () => {
  it('should render ButtonGroup', () => {
    const wrapper = shallow(
      <ButtonGroup>
        <Button buttonType={PRIMARY}>Left</Button>
        <Button buttonType={PRIMARY}>Center</Button>
        <Button buttonType={PRIMARY}>Right</Button>
      </ButtonGroup>
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
      <ButtonGroup>
        <Button buttonType={PRIMARY}>Left</Button>
        <Button buttonType={PRIMARY}>Center</Button>
        <Button buttonType={PRIMARY}>Right</Button>
      </ButtonGroup>
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
