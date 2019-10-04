import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import CheckBox from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<CheckBox /> rendering', () => {
  it('should render CheckBox', () => {
    const wrapper = shallow(
      <CheckBox checked id="myCheckBox">
        Checkbox button
      </CheckBox>
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
      <CheckBox checked id="myCheckBox">
        Checkbox button
      </CheckBox>
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
