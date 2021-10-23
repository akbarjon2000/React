import React, { Component } from "react";
import FastFood from "./fastFood";
import data from "./data"

export default class App extends Component {
  render() {
    return (
      <div>
        {data.map(({ id, img, foodType, category, cost, info, editbtn, deletebtn }) => <FastFood
          key={id}
          Icon={img}
          meal={foodType}
          category={category}
          cost={cost}
          info={info}
          Edit={editbtn}
          Deletebtn={deletebtn}
        />)}
      </div>
    )
  }
}


