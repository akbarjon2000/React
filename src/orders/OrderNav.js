import React, { Component } from 'react'
import "../navbar/navbar.css"
import "./orders.css"
export default class OrderNav extends Component {
    state = {
        first: false,
        second: false,
        third: false,
        fourth: false
    }
    render() {
        const change = (e) => {
            this.setState({ [e.target.id]: true })
            console.log(e.target.id, "clicked")
        }
        return (
            <div className='nobody'>
                <div className='nav'>
                    <div className='addnew'>
                        <div className='circle'><p>+</p></div>
                        <p>Add a new product</p>
                    </div>
                    <div className='togglebar'>
                        <div className='sorts'>
                            <div onClick={change} id='first' className={`item active-${this.state.first}`}>New</div>
                            <div onClick={change} id='second' className={`item active-${this.state.second}`}>Accepted</div>
                            <div onClick={change} id='third' className={`item active-${this.state.third}`}>Sent</div>
                            <div onClick={change} id='fourth' className={`item active-${this.state.fourth}`}>Closed</div>
                        </div>
                    </div>
                    <div className='twosomeplace'>
                        <div className='inside'>
                            <div className='first'>
                                <div className='vert1 marg'></div>
                                <div className='vert1'></div>
                            </div>
                            <div className='second'>
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
