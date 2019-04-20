import * as emotion from "emotion";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import serializer, { matchers } from "jest-emotion";
import * as React from "react";
import Button from ".";

configure({ adapter: new Adapter() });
expect.extend(matchers);
expect.addSnapshotSerializer(serializer);

describe("<Button /> rendering", () => {
  it("should render Button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  });
  it("hidden modal matches the snapshot", () => {
    const tree = shallow(<Button />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("shown modal matches the snapshot", () => {
    const tree = shallow(<Button color={"white"} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
