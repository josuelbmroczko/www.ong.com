'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.StyledDiv = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _style = _interopRequireDefault(require('../../componentes/home/style'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n    display: flex;\n justify-content: center;\n align-items: center;\n height: 100vh;\nh1{\n   \n    color: red;\n  \n    text-align: center;\n    \n}\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  );
}

var StyledDiv = _styledComponents['default'].div(_templateObject());

exports.StyledDiv = StyledDiv;
