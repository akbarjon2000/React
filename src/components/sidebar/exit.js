import React, { Component } from 'react'
import "../../index.css"
export default class exit extends Component {
    render() {
        const { Icon } = this.props
        return (
            <div className='exit'>
                <Icon className="exiticon" /> <p className='exittext' >{this.props.info}</p>
            </div>
        )
    }
}
