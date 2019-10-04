import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Icon, { IconTypes } from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Icon /> rendering', () => {
  it('should render Icon', () => {
    const wrapper = shallow(<Icon iconComponent={IconTypes.Facebook} />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<Icon iconComponent={IconTypes.Facebook} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
