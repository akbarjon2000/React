import React, { Component } from "react";
import FastFood from "./fastFood";
import data from "./data"
import Sidebar from "./sidebar/sidebar"
import Navbar from "./navbar/Navbar"
import Main from "./Main"
import "./main.css"
export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <div>
          <Navbar />
          <Main className="menu" />
          <div className="addd">Add More</div>
        </div>

      </div>
    )
  }
}


