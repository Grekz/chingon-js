"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("@emotion/styled");
const React = require("react");
const WrapperButton = styled_1.default.button `
  color: ${(props) => props.color};
  background: black;
`;
const Button = props => React.createElement(WrapperButton, null, props);
exports.default = Button;
//# sourceMappingURL=button.component.js.map