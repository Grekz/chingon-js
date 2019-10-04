import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Radio from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Radio /> rendering', () => {
  it('should render Radio', () => {
    const wrapper = shallow(<Radio id="myRadio">Radio button</Radio>)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<Radio id="myRadio">Radio button</Radio>)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
