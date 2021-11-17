import React, { Component } from 'react'
import Sidebar from "../sidebar/sidebar"
import OrderNav from "./OrderNav"
import New from './New'
import "./orders.css"
export default class Orders extends Component {
    render() {
        return (
            <div className='orders'>
                {/* <Sidebar /> */}
                <div>
                    <OrderNav />
                    <New />
                </div>

            </div>
        )
    }
}
