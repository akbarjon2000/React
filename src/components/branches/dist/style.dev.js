"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border: 4px solid #edeff3;\n  border-radius: 50%;\nmargin-left:31px;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border: 4px solid #edeff3;\n  border-radius: 50%;\nmargin-left:31px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border: 4px solid #edeff3;\n  border-radius: 50%;\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nflex:1.1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nwidth:992px;\nheight:60px;\nborder-radius:6px;\nbackground-color:white;\ndisplay:flex;\nflex-direction:row;\nmargin-bottom:8px;\nmargin-left:38px; \nalign-items:center;\nfont-size:15px;  \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:column;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var Wrapper = _styledComponents["default"].div(_templateObject2());

exports.Wrapper = Wrapper;
Wrapper.obj = _styledComponents["default"].div(_templateObject3());
Wrapper.action = _styledComponents["default"].div(_templateObject4());
Wrapper.Location = _styledComponents["default"].div(_templateObject5());
Wrapper.edit = _styledComponents["default"].div(_templateObject6());
Wrapper["delete"] = _styledComponents["default"].div(_templateObject7());