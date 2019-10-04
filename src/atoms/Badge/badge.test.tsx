import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Badge from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Badge /> rendering', () => {
  it('should render Badge', () => {
    const wrapper = shallow(<Badge status="online" content="4" />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<Badge status="online" content="4" />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
