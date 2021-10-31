"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Title = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nbackground-color: blue;\nwidth: 150px;\nheight: 50px;\nborder-radius: 10px;\ncolor: white;\nfont-size: 20px;\noutline: unset;\nborder: unset;\n:hover{\n    background-color: rgb(0, 0, 200)\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ncolor:", ";\nfont-weight: 700;\nfont-family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif;\nfont-size: ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 80%;\nheight: 300px;\nbackground: ", ";\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nmargin: 20px;\nalign-self: center;\nbox-shadow: 0 3px 3px 10px rgba(0, 0, 0, 0.6);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getSize = function getSize(_ref) {
  var size = _ref.size;

  switch (size) {
    case "small":
      return "14px";

    case "medium":
      return "18px";

    case "large":
      return "22px";
  }
};

var Wrapper = _styledComponents["default"].div(_templateObject(), function (_ref2) {
  var dark = _ref2.dark;
  return dark ? '#000' : '#eee';
});

exports.Wrapper = Wrapper;

var Title = _styledComponents["default"].h1(_templateObject2(), function (_ref3) {
  var dark = _ref3.dark;
  return dark ? "white" : "black";
}, getSize);

exports.Title = Title;

var Button = _styledComponents["default"].button(_templateObject3());

exports.Button = Button;