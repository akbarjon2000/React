import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        const { Icon } = this.props
        return (
            <div className='sidebarFooter'>
                <Icon className="footericons" />
                <p>{this.props.info}</p>
            </div>
        )
    }
}
