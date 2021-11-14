import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar"
import Navbar from "../navbar/Navbar"
import { BrowserRouter, NavLink, Link, useNavigate } from 'react-router-dom'
import FastFood from "./fastFood";
import "./main.css"
export default class Products extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar className="sidebarborder" />
        <div>
          <Navbar />
          <FastFood className="menu" />
          <div className="addd">Add More</div>
        </div>
      </div>
    )
  }
}


