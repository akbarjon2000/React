import React, { useState, useContext } from 'react'
// import { data } from "../products/data"
import "./navbar.css"
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { MyContext } from '../../../context'
const Navbar = () => {
    const [mydata, setData] = useContext(MyContext)
    const [data] = useState(mydata);
    const onChange = (e) => {
        let newData = data.filter((value) => value.category.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    return (
        <div className='nobody'>
            <div className='nav'>
                <div className='addnews'>
                    <div className='myplus'><div style={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        bottom: "2px"
                    }}>+</div></div>
                    <p style={{ width: "100px" }}>Add a new customer</p>
                </div>
                <div className='searchbar'>
                    <div>
                        <input onChange={Filter} type="text" placeholder="Search" className="searchInput" onChange={onChange}></input>
                        <button className="searchbtn" ><Search /></button>
                    </div>
                    <div className='filter'>
                        <Filter />
                    </div>
                </div>
            </div>
            <div className='categories'>
                <div className='product' style={{ width: "258px" }}><p1>CUSTOMER NAME</p1></div>
                <div className='category' style={{ width: "203px" }}><p2>CONTACT NUMBER</p2></div>
                <div className='cost' style={{ width: "194px" }}><p3>ORDERS COUNT</p3></div>
                <div className='cost' style={{ width: "152px" }}><p3>STATUS</p3></div>
                <div className='action' style={{ width: "255px" }}><p5>ACTION</p5></div>
            </div>
        </div >
    )
}
export default Navbar;