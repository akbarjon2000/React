import React, { Component } from 'react'
import { ReactComponent as Headerimg } from "./sidebarimg/Bitmap.svg"
export default class header extends Component {
    render() {
        return (
            <div className='header'>
                <Headerimg className="headerimg" />
                <div className='headertext' >
                    <p1>FastFood</p1>
                    <p2>Online sale</p2>
                </div>
            </div>
        )
    }
}
