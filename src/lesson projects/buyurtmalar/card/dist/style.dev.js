"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nborder-right:1px solid #e5e5e5;\n::nth-child(5){\n    border-right:none;\n}\nheight:100%;\ndisplay:flex;\nflex: ", ";\nflex-direction:row;\nalign-items:center;\njustify-content:", ";\nmargin-left: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nbackground-color:white;\nheight: 60px;\nmargin-bottom:10px;\nborder-radius:8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getSize = function getSize(size) {
  switch (size) {
    case "id":
      return 1;

    case "action":
      return 5;

    case "button":
      return 2;
  }
};

var User = _styledComponents["default"].div(_templateObject());

exports.User = User;
User.title = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var size = _ref.size;
  return getSize(size);
}, function (_ref2) {
  var size = _ref2.size;
  return size === "button" ? "center" : "none";
}, function (_ref3) {
  var size = _ref3.size;
  return size === "button" ? "none" : "10px";
});