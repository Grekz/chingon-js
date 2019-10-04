import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import CheckBoxGroup from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<CheckBoxGroup /> rendering', () => {
  it('should render CheckBoxGroup', () => {
    const wrapper = shallow(<CheckBoxGroup options={['Hello', 'World']} />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<CheckBoxGroup options={['Hello', 'World']} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
