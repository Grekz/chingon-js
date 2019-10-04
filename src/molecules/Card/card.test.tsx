import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import Card from '.'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<Card /> rendering', () => {
  it('should render Card', () => {
    const wrapper = shallow(
      <Card
        image="https://placeholder.pics/svg/300x180"
        altImage="Test placeholder"
        header="Title here"
      >
        Some body content goes here let's see it complete
      </Card>
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
      <Card
        image="https://placeholder.pics/svg/300x180"
        altImage="Test placeholder"
        header="Title here"
      >
        Some body content goes here let's see it complete
      </Card>
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
