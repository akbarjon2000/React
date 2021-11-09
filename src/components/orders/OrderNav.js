import React, { Component } from 'react'
import "../navbar/navbar.css"
import "./orders.css"
import { navObj } from "./NavObj"
import { toggle } from "./NavObj"
export default class OrderNav extends Component {
    state = {
        obj: navObj,
        active: null,
        show: true,
    }
    render() {
        const change = (id) => {
            this.setState({ active: id })
        }
        const toggle1 = () => {
            this.setState({ show: false })
            console.log(this.state.show)
        }
        const toggle2 = () => {
            this.setState({ show: true })
            console.log(this.state.show)
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
                            <div className={`first ${this.state.show === false ? "background-white" : "no-background"}`} key={1} onClick={() => toggle1()}>
                                <div className={`vert1 marg ${this.state.show === false ? "background-black" : "no-background"}`}></div>
                                <div className={`vert1  ${this.state.show === false ? "background-black" : "no-background"}`}></div>
                            </div>
                            <div className={`second ${this.state.show === true ? "background-white" : "no-background"}`} key={2} onClick={() => toggle2()}>
                                <div className={`hor1 ${this.state.show === true ? "background-black" : "no-background"}`}></div>
                                <div className={`hor2 ${this.state.show === true ? "background-black" : "no-background"}`}></div>
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
