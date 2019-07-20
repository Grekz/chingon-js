import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Text from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Text /> rendering', () => {
  it('should render Text h1', () => {
    const wrapper = shallow(<Text type="h1" />)
    expect(wrapper).toHaveLength(1)
  })
  it('should render Text h2', () => {
    const wrapper = shallow(<Text type="h2" />)
    expect(wrapper).toHaveLength(1)
  })
  it('should render Text h3', () => {
    const wrapper = shallow(<Text type="h3" />)
    expect(wrapper).toHaveLength(1)
  })
  it('should render Text span', () => {
    const wrapper = shallow(<Text type="span" />)
    expect(wrapper).toHaveLength(1)
  })
  it('should match the snapshot for Text h1', () => {
    const wrapper = shallow(<Text type="h1" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
