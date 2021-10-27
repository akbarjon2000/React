import React, { Component } from "react";
import { data } from "./data"
import FastFood from "./fastFood";


export default class Main extends Component {

    render() {
        const Delete = (id) => {
            data.filter((value) => value.id !== id)
            return data
        }
        return (
            <div >
                {data.map(({ id, img, foodType, category, cost, info, editbtn, deletebtn }) =>
                (
                    <div key={id} onClick={() => Delete(id)}>
                        <FastFood
                            key={id}
                            Icons={img}
                            meal={foodType}
                            category={category}
                            cost={cost}
                            info={info}
                            Edit={editbtn}
                            Deletebtn={deletebtn}
                        />
                    </div>
                )
                )
                }
            </div>
        )
    }
}
