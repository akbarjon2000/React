import React, { Component } from 'react'
import "./body.css"
export default class body extends Component {

    render() {
        const { Icon } = this.props
        return (
            <div className='sidebarbody' style={{ display: "flex", flexDirection: "row" }}>
                <Icon className='icons'></Icon> <p className='titles'>{this.props.info}</p>
            </div>
        )
    }
}
