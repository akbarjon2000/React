"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nwidth:272px;\nheight:100%;\nborder-right:1px solid #EDEFF3;\ndisplay:flex;\nflex-direction:row;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nmargin-top:28px;\nmargin-left:34px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nmargin-top:25px;\nmargin-left:34px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nwidth:247px;\nheight:100%;\nborder-right:1px solid #EDEFF3;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nmargin-left:36px;\nmargin-top:20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nwidth:218px;\nheight:100%auto;\nborder-right:1px solid #EDEFF3;\n/* margin:20px 16px 35px 36px; */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth:964px;\nheight:150px;\nbackground-color:white;\nmargin-bottom:12px;\nmargin-left:39px;\nborder-radius:6px;\ndisplay:flex;\nflex-direction:row;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;
Container.one = _styledComponents["default"].div(_templateObject2());
Container.one.colone = _styledComponents["default"].div(_templateObject3());
Container.two = _styledComponents["default"].div(_templateObject4());
Container.two.rowone = _styledComponents["default"].div(_templateObject5());
Container.two.rowtwo = _styledComponents["default"].div(_templateObject6());
Container.three = _styledComponents["default"].div(_templateObject7());
Container.four = _styledComponents["default"].div(_templateObject8());