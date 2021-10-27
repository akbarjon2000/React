import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar"
import Navbar from "../navbar/Navbar"
import Main from "./Main"
import "../main.css"
export default class Products extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar className="sidebarborder" />
        <div>
          <Navbar />
          <Main className="menu" />
          <div className="addd">Add More</div>
        </div>

      </div>
    )
  }
}


