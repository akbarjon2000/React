"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Oval = require("./icons/Oval.svg");

var _Path = require("./icons/Path.svg");

var _trash = require("./icons/trash-2.svg");

var _cheesBurgerMax = require("./icons/cheesBurgerMax.svg");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var data = [{
  id: 1,
  img: _Oval.ReactComponent,
  foodType: "Lavash mini",
  category: "Lavash",
  cost: "5000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 2,
  img: _cheesBurgerMax.ReactComponent,
  foodType: "CheeseBurgerMax",
  category: "Burger",
  cost: "8000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 3,
  img: _Oval.ReactComponent,
  foodType: "LavashMax",
  category: "Lavash",
  cost: "7000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 4,
  img: _Oval.ReactComponent,
  foodType: "Lavash S Sirom",
  category: "Lavash",
  cost: "8500 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 5,
  img: _Oval.ReactComponent,
  foodType: "Burger mini",
  category: "Burger",
  cost: "5000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 6,
  img: _Oval.ReactComponent,
  foodType: "Lavash mini",
  category: "Lavash",
  cost: "5000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 7,
  img: _Oval.ReactComponent,
  foodType: "Coca Cola 1L",
  category: "Drinks",
  cost: "3500 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 8,
  img: _Oval.ReactComponent,
  foodType: "Burger mini",
  category: "Burger",
  cost: "5000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 9,
  img: _Oval.ReactComponent,
  foodType: "Coca Cola 1.5L",
  category: "Drinks",
  cost: "5000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}, {
  id: 10,
  img: _Oval.ReactComponent,
  foodType: "Lavash mini",
  category: "Lavash",
  cost: "5000 KRW",
  info: "Some extra info",
  editbtn: _Path.ReactComponent,
  deletebtn: _trash.ReactComponent
}];
exports.data = data;