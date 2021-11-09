import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from "./components/products/Products"
import Orders from "./components/orders/Orders"
import Lesson from "./lesson projects/buyurtmalar/index"
import Hooks from ".//components/hooks"
import Orders2 from "./components/orders2"
ReactDOM.render(
  <React.StrictMode>
    <Orders2 />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

