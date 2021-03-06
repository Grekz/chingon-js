import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import RadioGroup from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<RadioGroup /> rendering', () => {
  it('should render RadioGroup', () => {
    const wrapper = shallow(<RadioGroup options={['Hello', 'World']} />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<RadioGroup options={['Hello', 'World']} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
