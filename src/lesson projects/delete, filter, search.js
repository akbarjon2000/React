import React, { Component } from 'react'
import student from "./studentData"
export default class Lesson extends Component {
    state = {
        student: student,
        param: "name"
    }
    render() {
        const onDelete = (id) => {
            let newData = this.state.student.filter((value) => value.id !== id)
            this.setState({ student: newData })
        }
        const onfilter = ({ target }) => {
            const { value } = target
            let newData = student.filter(values => values[this.state.param].toUpperCase().includes(value.toUpperCase()))
            this.setState({ student: newData })
        }
        const onSelect = ({ target }) => {
            this.setState((preState) => {
                return {
                    ...preState,
                    param: target.value
                }
            })
        }
        return (
            <div >
                <h1>Student Info</h1>
                <input type="search" placeholder="search" onChange={onfilter} ></input>
                <select id="something" onClick={onSelect}>
                    <option value="firstname" onClick={this.state.filterByName}>firstname</option>
                    <option value="lastname" onClick={this.state.filterByLastname} >lastname</option>
                    <option value="status" >status</option>
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
