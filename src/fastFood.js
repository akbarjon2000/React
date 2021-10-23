import React, { Component } from 'react'
import "./index.css"
export default class FastFood extends Component {
    render() {
        const { Icon } = this.props
        const { Edit } = this.props
        const { Deletebtn } = this.props
        return (
            <div className='base'>

                <table className="items" >
                    <tr className='row'>

                        <td className='firstraw'><Icon className="icon" />
                            {this.props.meal}
                        </td>
                        <td>{this.props.category}</td>
                        <td>{this.props.cost}</td>
                        <td>{this.props.info}</td>
                        <div className='icons'>
                            <td><Edit className="edit" /></td>
                            <td><Deletebtn className="delete" /></td>
                        </div>

                    </tr>
                </table>
            </div>
        )
    }
}
