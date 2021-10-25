import React, { Component } from "react";
import FastFood from "./fastFood";
import data from "./data"
import Sidebar from "./sidebar/sidebar"
import Navbar from "./navbar/Navbar"
export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <Navbar />

      </div>
    )
  }
}


