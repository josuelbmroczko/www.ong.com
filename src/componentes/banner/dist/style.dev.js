'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _cores = _interopRequireDefault(require('../../utils/cores/cores'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  position: relative;\n  padding-top: 70px;\n\n  .text-container {\n    position: absolute;\n    margin: 2%;\n    padding: 10px;\n    color: ',
    ';\n    max-width: 90%;\n    font-size: 20px;\n    z-index: 999;\n    word-wrap: break-word;\n  }\n\n  .image-container img {\n    max-height: 700px;\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n  .text-container h1 {\n      width: 30%;\n      \n    }\n\n    .text-container h2 {\n        width: 30%;\n        color: ',
    ';\n    }\n    .slick-dots{\n     position: relative;\n     top: -60px;\n    \n       }\n      \n     \n\n  @media (max-width: 768px) {\n    .text-container h1 {\n      font-size: 4vw;\n\n    }\n\n    .text-container h2 {\n      font-size: 4vw;\n    }\n  }\n',
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

var StyleDiv = _styledComponents['default'].div(
  _templateObject(),
  _cores['default'].branco,
  _cores['default'].preto,
);

var _default = StyleDiv;
exports['default'] = _default;
