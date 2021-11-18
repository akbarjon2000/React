"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Restore = exports.Main = exports.Eng = exports.Uz = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nheight: 60px;\nwidth: 992px;\nleft: 338px;\ntop: 156px;\nborder-radius: 6px;\nbackground-color:orange;\ncolor:white;\nmargin:0 0 8px 38px;\nfont-size: 25px;\noutline:unset;\nborder:none;\n:hover{\n    box-shadow: 0px 5px 15px #B0B1B56E;\n    cursor:pointer;\n}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nwidth:200px;\nmargin-left:50px;\nmargin-right:19px\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\nwidth:200px;\nmargin-left:15px;\nmargin-right:19px\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nwidth:200px;\nmargin-left:18px;\nmargin-right:19px\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border: 4px solid #edeff3;\n  border-radius: 50%;\n  margin-left:20px;\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border: 4px solid #edeff3;\n  border-radius: 50%;\n  margin-left:60px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nwidth:200px;\nmargin-left:18px;\nmargin-right:19px\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\n\nalign-items:center;\nheight: 60px;\nwidth: 992px;\nleft: 338px;\ntop: 156px;\nborder-radius: 6px;\nbackground-color:white;\nmargin:0 0 8px 38px\n"]);

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
Container.page = _styledComponents["default"].div(_templateObject2());
Container.el = _styledComponents["default"].div(_templateObject3());
Container.text = _styledComponents["default"].p(_templateObject4());
Container.edit = _styledComponents["default"].div(_templateObject5());
Container["delete"] = _styledComponents["default"].div(_templateObject6());

var Uz = _styledComponents["default"].div(_templateObject7());

exports.Uz = Uz;

var Eng = _styledComponents["default"].div(_templateObject8());

exports.Eng = Eng;

var Main = _styledComponents["default"].div(_templateObject9());

exports.Main = Main;

var Restore = _styledComponents["default"].button(_templateObject10());

exports.Restore = Restore;