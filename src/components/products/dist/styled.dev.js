"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Restore = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth:992px;\nheight:60px;\nmargin-left:38px;\nmargin-bottom:15px;\nborder-radius:6px;\nborder:none;\noutline:unset;\ncolor:white;\nfont-size:20px;\nbackground-color:orange;\n:hover{\n    box-shadow: 0px 5px 15px #B0B1B56E;\n    cursor:pointer;\n\t-webkit-animation: heartbeat 1.5s ease-in-out infinite both;\n\tanimation: heartbeat 1.5s ease-in-out infinite both;\n\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Restore = _styledComponents["default"].button(_templateObject());

exports.Restore = Restore;