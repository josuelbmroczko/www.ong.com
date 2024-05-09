'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.StyleProdutos = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _cores = _interopRequireDefault(require('../../utils/cores/cores'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\nposition: relative;\nul {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\nspan{\n  font-size: 20px;\n  font-weight: bold;\n}\np{\n  font-size: 20px;\n}\n\nli {\n  text-align: center;\n    padding: 20px;\n    width: 300px;\n    height: 300px;\n    list-style: none;\n    line-height: 5px;\n\n    /*background-color: ',
    ';*/\n    margin: 25px; /* Espa\xE7o entre os itens (opcional) */\n    box-sizing: border-box; /* Inclui padding e borda no tamanho total do elemento */\n\n\n    &:hover {\n      width: 280px;\n      height: 280px;\n    }\n}\n\n \n\n\n@media (max-width: 450px) {\n\n li{\n  width: 250px;\nheight: 250px;  \n\n&:hover {\n      width: 250px;\n      height: 250px;\n    }\n }\n\n}\n \n\n',
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

var StyleProdutos = _styledComponents['default'].div(
  _templateObject(),
  _cores['default'].cinzaClaro,
);

exports.StyleProdutos = StyleProdutos;
