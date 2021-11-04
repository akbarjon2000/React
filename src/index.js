import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from "./products/Products"

import { Lesson } from "./lesson projects/delete, filter, search"


ReactDOM.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

