import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Input from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Input /> rendering', () => {
  it('should render Input', () => {
    const wrapper = shallow(
      <Input type="text" placeholder="Input text" label="Test label" />
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
      <Input type="text" placeholder="Input text" label="Test label" />
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
