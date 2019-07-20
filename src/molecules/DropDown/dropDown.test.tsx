import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import DropDown from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<DropDown /> rendering', () => {
  it('should render DropDown', () => {
    const wrapper = shallow(
      <DropDown
        title="My drop down"
        options={['Option 1', 'Option 2', 'Option 3']}
      />
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
      <DropDown
        title="My drop down"
        options={['Option 1', 'Option 2', 'Option 3']}
      />
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
