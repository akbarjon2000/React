import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Sidebar from "./sidebar/sidebar"
// import Orders from "./orders/Orders"
import Products from "./products/Products"

ReactDOM.render(
  <React.StrictMode>
    {/* <Orders /> */}
    <Products />
    {/* <Sidebar /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

