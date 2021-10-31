import React, { Component } from 'react'
import student from "./studentData"
export default class Lesson extends Component {
    state = {
        student: student,

    }
    render() {
        const onDelete = (id) => {
            let newData = this.state.student.filter((value) => value.id !== id)
            this.setState({ student: newData })
        }
        const onfilter = (e) => {
            console.log(e)
            let newData = student.filter(value => value.name.toUpperCase().includes(e.target.value.toUpperCase()))
            this.setState({ student: newData })
        }
        const onSelect = (e) => {
            console.log(e)
            if (e.target.options.selectedIndex === 0) {
                console.log("name")
            }
            if (e.target.options.selectedIndex === 1) {
                console.log("lastname")
            }
            if (e.target.options.selectedIndex === 2) {
                console.log("status")
            }
        }
        return (
            <div >
                <h1>Student Info</h1>
                <input type="search" placeholder="search" onChange={onfilter} ></input>
                <select id="something" onClick={onSelect}>
                    <option id="firstname" onClick={this.state.filterByName}>firstname</option>
                    <option id="lastname" onClick={this.state.filterByLastname} >lastname</option>
                    <option id="status" >status</option>
                </select><br />
                <input placeholder='edit name'></input>
                <input placeholder='edit lastname'></input>
                <input placeholder='edit status'></input>
                {
                    this.state.student.map(value => (
                        <div key={value.id} style={{ display: "flex", border: "1px solid", margin: "10px" }}>{value.name} {value.lastname} {value.status} {""}
                            <button >Edit</button>
                            <button onClick={() => onDelete(value.id)}>delete</button></div>
                    ))
                }
            </div >
        )
    }
}
