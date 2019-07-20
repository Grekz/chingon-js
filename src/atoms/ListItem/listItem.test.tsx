import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import ListItem from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<ListItem /> rendering', () => {
  it('should render ListItem', () => {
    const wrapper = shallow(<ListItem>List item</ListItem>)
    expect(wrapper).toHaveLength(1)
  })
  it('should render active ListItem', () => {
    const wrapper = shallow(<ListItem isActive>List item</ListItem>)
    expect(wrapper).toHaveLength(1)
  })
  it('should match ListItem snapshot', () => {
    const wrapper = shallow(<ListItem>List item</ListItem>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
