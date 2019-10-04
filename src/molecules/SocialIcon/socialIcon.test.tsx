import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import SocialIcon from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<List /> rendering', () => {
  it('should render SocialIcon', () => {
    const wrapper = shallow(<SocialIcon type="Facebook" />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<SocialIcon type="Facebook" />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
