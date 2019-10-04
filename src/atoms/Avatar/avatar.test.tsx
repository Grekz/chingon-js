import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Avatar from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Avatar /> rendering', () => {
  it('should render Avatar', () => {
    const wrapper = shallow(
      <Avatar
        size="150px"
        content="https://avatars1.githubusercontent.com/u/3975603"
        hasImage={true}
      />
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
      <Avatar
        size="150px"
        content="https://avatars1.githubusercontent.com/u/3975603"
        hasImage={true}
      />
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
