import React, { Component } from "react";
import { data } from "./data"
import FastFood from "./fastFood";


export default class Main extends Component {
    render() {
        return (
            <div>
                {data.map(({ id, img, foodType, category, cost, info, editbtn, deletebtn }) => <FastFood
                    key={id}
                    Icons={img}
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
