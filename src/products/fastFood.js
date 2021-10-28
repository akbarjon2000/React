import React, { Component } from 'react'
import "../main.css"

export default class FastFood extends Component {

    state = { showlist: 0 }
    render() {
        const Delete = (id) => {
            this.setState({
                showlist: id
            })
            console.log(id, "is clicked")
            console.log(this.state.showlist);
        }
        const { Icons } = this.props
        const { Edit } = this.props
        const { Deletebtn } = this.props
        // const Delete = (id) => {
        //     this.setState({ active: id })
        //     console.log(id, "deleted")
        // }
        return (
            <div className={`base delete-${this.state.showlist === this.props.id}`} >
                <div className='foodIcon'><Icons className="foodIcon1" /></div>
                <div className='meal'>{this.props.meal}</div>
                <div className='mycategories'> <p className='mycategories1'>{this.props.category}</p> </div>
                <div className='costtext'> <p className='costtext1'>{this.props.cost}</p> </div>
                <div className='info'><p className='info1'>{this.props.info}</p> </div>
                <div className='actions'>
                    <div className='editbtn'><Edit /></div>
                    <div onClick={() => Delete(this.props.id)} className='deletebtn' ><Deletebtn /></div>

                </div>
            </div>
        )
    }
}
