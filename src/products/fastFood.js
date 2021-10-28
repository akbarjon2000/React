import React, { Component } from 'react'
import "../main.css"
import { data } from "./data"
import { ReactComponent as Edit } from "../icons/Path.svg"
import { ReactComponent as Deletebtn } from "../icons/trash-2.svg"
export default class FastFood extends Component {

    state = {
        Data: data,
        active: null
    }
    render() {
        // const Delete = (id) => {
        //     this.setState({
        //         showlist: id
        //     })
        //     console.log(id, "is clicked")
        //     console.log(this.state.showlist);
        // }
        const Delete = (id) => {
            let NewData = this.state.Data.filter((value) => value.id !== id)
            this.setState({ Data: NewData })
        }
        return (
            <>
                {
                    this.state.Data.map((value) => (
                        <div className={`base delete-${this.state.active === value.id}`}>
                            {/* <div className='foodIcon'><Icons className="foodIcon1" /></div> */}
                            <img src={value.Img} className='foodIcon1'></img>
                            <div className='meal'>{value.foodType}</div>
                            <div className='mycategories'> <p className='mycategories1'>{value.category}</p> </div>
                            <div className='costtext'> <p className='costtext1'>{value.cost}</p> </div>
                            <div className='info'><p className='info1'>{value.info}</p> </div>
                            <div className='actions'>
                                <div className='editbtn'><Edit /></div>
                                <div onClick={() => Delete(value.id)} className='deletebtn' ><Deletebtn /></div>

                            </div>
                        </div>
                    ))
                }

            </>
        )
    }
}
