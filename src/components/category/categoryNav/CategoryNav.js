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
                    <p style={{ width: "100px" }}>Add a new product</p>
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
                <div className='product' style={{ width: "271px" }}><p1>CATEGORY (UZ)</p1></div>
                <div className='category' style={{ width: "271px" }}><p2>CATEGORY (ENG)</p2></div>
                <div className='cost' style={{ width: "284px" }}><p3>MAIN CATEGORY</p3></div>
                <div className='action' style={{ width: "100px" }}><p5>ACTION</p5></div>
            </div>
        </div >
    )
}
export default Navbar;