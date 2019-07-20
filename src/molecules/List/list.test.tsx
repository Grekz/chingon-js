import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'
import List from '.'
import ListItem from '../../atoms/ListItem'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('<List /> rendering', () => {
  it('should render List', () => {
    const wrapper = shallow(
      <List>
        <ListItem>List item</ListItem>
        <ListItem isActive>List item</ListItem>
        <ListItem>List item</ListItem>
      </List>
    )
    expect(wrapper).toHaveLength(1)
  })
  it('should match snapshot', () => {
    const tree = shallow(
      <List>
        <ListItem>List item</ListItem>
        <ListItem isActive>List item</ListItem>
        <ListItem>List item</ListItem>
      </List>
    )
    expect(toJson(tree)).toMatchSnapshot()
  })
})
