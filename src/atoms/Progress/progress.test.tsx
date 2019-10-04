import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Progress from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Progress /> rendering', () => {
  it('should render Progress', () => {
    const wrapper = shallow(<Progress max={100} progress={20} />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(<Progress max={100} progress={20} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
