import React, { Component } from 'react'
import { data } from "../products/data"
import "./navbar.css"
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
export default class Navbar extends Component {
    render() {

        return (
            <div className='nobody'>
                <div className='nav'>
                    <div className='addnew'>
                        <div className='circle'><p>+</p></div>
                        <p>Add a new product</p>
                    </div>
                    <div className='searchbar'>
                        <div>
                            <input onChange={Filter} type="text" placeholder="Search" className="searchInput"></input>
                            <button className="searchbtn" ><Search /></button>
                        </div>
                        <div className='filter'>
                            <Filter />
                        </div>
                    </div>
                </div>
                <div className='categories'>
                    <div className='product'><p1>PRODUCT</p1></div>
                    <div className='category'><p2>CATEGORY</p2></div>
                    <div className='cost'><p3>COST</p3></div>
                    <div className='add'><p4>ADDITIONAL INFO</p4></div>
                    <div className='action'><p5>ACTION</p5></div>
                </div>
            </div >
        )
    }
}
