"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cores = _interopRequireDefault(require("../../utils/cores/cores"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 999;\n  background-color: ", ";\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  top: -10px;\n\n  .home-container {\n    width: 100%;\n  }\n\n  .nav-list {\n    display: flex;\n    justify-content: space-around;\n    list-style: none;\n    align-items: center;\n  }\n\n  li {\n    display: flex;\n  }\n\n  .logo {\n    width: 80px;\n  }\n\n  .cart {\n    width: 15px;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n\n  button {\n    background-color: transparent;\n    border: none;\n  }\n\n  .lupaPesquisa {\n    width: 18px;\n  }\n\n  .menu-options {\n    display: flex;\n    justify-content: space-around;\n    list-style: none;\n    width: 100%;\n  }\n\n  #pesquisa {\n    background-color: ", ";\n    border: 1px solid;\n    border-radius: 3px 9px;\n  }\n\n  .logoMobile {\n    display: none;\n  }\n\n  @media screen and (max-width: 600px) {\n    .nav-list {\n      position: fixed;\n      justify-content: space-around;\n      background-color: white;\n      padding: 20px;\n      width: 100%;\n      left: -30px;\n      flex-direction: column-reverse;\n      align-items: center;\n    }\n\n    .logo {\n      display: none;\n    }\n\n    .logoMobile {\n      display: block;\n      position: relative;\n      left: 10px;\n      width: 100%;\n      max-width: 70px;\n      top: -30px;\n    }\n\n    a {\n      height: 20px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyleDiv = _styledComponents["default"].div(_templateObject(), _cores["default"].branco, _cores["default"].preto, _cores["default"].cinzaClaro);

var _default = StyleDiv;
exports["default"] = _default;