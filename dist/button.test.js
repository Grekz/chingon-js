"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enzyme_1 = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const enzyme_to_json_1 = require("enzyme-to-json");
const jest_emotion_1 = require("jest-emotion");
const React = require("react");
const _1 = require(".");
enzyme_1.configure({ adapter: new Adapter() });
expect.extend(jest_emotion_1.matchers);
expect.addSnapshotSerializer(jest_emotion_1.default);
describe("<Button /> rendering", () => {
    it("should render Button", () => {
        const wrapper = enzyme_1.shallow(React.createElement(_1.default, null));
        expect(wrapper).toHaveLength(1);
    });
    it("hidden modal matches the snapshot", () => {
        const tree = enzyme_1.shallow(React.createElement(_1.default, null));
        expect(enzyme_to_json_1.default(tree)).toMatchSnapshot();
    });
    it("shown modal matches the snapshot", () => {
        const tree = enzyme_1.shallow(React.createElement(_1.default, { color: "white" }));
        expect(enzyme_to_json_1.default(tree)).toMatchSnapshot();
    });
});
//# sourceMappingURL=button.test.js.map