import React, { Component } from 'react'
import "./body.css"
import "../../index.css"
export default class body extends Component {

    render() {
        const { Icon } = this.props
        return (
            <div className={`sidebarbody active-${this.props.active}`} style={{ display: "flex", flexDirection: "row" }}>
                <Icon className='sideicons'></Icon> <p className='sidetitles'>{this.props.info}</p>
            </div>
        )
    }
}
