import React, { Component } from 'react'
import "./main.css"
import { ReactComponent as Oval } from "./icons/Oval.svg"

export default class FastFood extends Component {
    render() {
        const { Icons } = this.props
        const { Edit } = this.props
        const { Deletebtn } = this.props
        return (

            <div className='base'>
                <div className='foodIcon'><Icons className="foodIcon1" /></div>
                <div className='meal'>{this.props.meal}</div>
                <div className='mycategories'> <p className='mycategories1'>{this.props.category}</p> </div>
                <div className='costtext'> <p className='costtext1'>{this.props.cost}</p> </div>
                <div className='info'><p className='info1'>{this.props.info}</p> </div>
                <div className='actions'>
                    <div className='editbtn'><Edit /></div>
                    <div className='deletebtn'><Deletebtn /></div>
                </div>
            </div>
        )
    }
}
