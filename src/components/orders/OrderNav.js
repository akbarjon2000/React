import React, { Component } from 'react'
import "../navbar/navbar.css"
import "./orders.css"
import { navObj } from "./NavObj"
import { toggle } from "./NavObj"
export default class OrderNav extends Component {
    state = {
        obj: navObj,
        active: null,
    }
    render() {
        const change = (id) => {
            this.setState({ active: id })
        }
        const toggle = (id) => {
            console.log(id)
        }
        return (
            <div className='nobody'>
                <div className='nav'>
                    <div className='addnew'>
                        <div className='circle'><div>+</div></div>
                        <p>Add a new product</p>
                    </div>
                    <div className='togglebar'>
                        <div className='sorts' >
                            {this.state.obj.map((value) => (
                                <div onClick={() => change(value.id)}
                                    id={value.id}
                                    key={value.id}
                                    className={`item activeMe-${this.state.active === value.id}`}>{value.info}</div>
                            ))}
                        </div>
                    </div>
                    <div className='twosomeplace'>
                        <div className='inside' >
                            <div className='first' id="first" onClick={(e) => toggle(e)}>
                                <div className='vert1 marg'></div>
                                <div className='vert1'></div>
                            </div>
                            <div className='second' id="second" onClick={(e) => toggle(e)}>
                                <div className='hor1'></div>
                                <div className='hor2'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div >
        )
    }
}
