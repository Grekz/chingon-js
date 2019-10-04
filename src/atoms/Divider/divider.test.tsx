import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Divider from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Divider /> rendering', () => {
  it('should render Divider', () => {
    const wrapper = shallow(<Divider color="orange" />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<Divider color="orange" />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
