import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import serializer, { matchers } from 'jest-emotion'
import * as React from 'react'

import Alert from '.'
import { AlertTypes } from './alert.component'

configure({ adapter: new Adapter() })
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

const { PRIMARY } = AlertTypes

describe('<Alert /> rendering', () => {
  it('should render Alert', () => {
    const wrapper = shallow(<Alert alertType={PRIMARY} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
