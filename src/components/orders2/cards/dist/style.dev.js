"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nwidth:234px;\nmargin-left:14px;\ndisplay:flex;\nflex-direction:column;\njustify-content:flex-start;\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nwidth:234px;\nmargin-left:14px;\ndisplay:flex;\nflex-direction:column;\njustify-content:flex-start;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nmargin-left:14px;\nwidth:234px;\ndisplay:flex;\nflex-direction:column;\njustify-content:flex-start;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nmargin-left:38px;\nwidth:234px;\ndisplay:flex;\nflex-direction:column;\njustify-content:flex-start;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;
Container.col1 = _styledComponents["default"].div(_templateObject2());
Container.col2 = _styledComponents["default"].div(_templateObject3());
Container.col3 = _styledComponents["default"].div(_templateObject4());
Container.col4 = _styledComponents["default"].div(_templateObject5());