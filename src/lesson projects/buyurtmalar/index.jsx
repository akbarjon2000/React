import React, { Component } from 'react'
import { Container } from './style'
import Card from "./card/delete, filter, search"
import students from "../../utils/studentData"
export default class Index extends Component {
    state = {
        active: null,
        students,
        name: "",
        surname: "",
        status: ""
    }
    render() {
        const onDelete = (id) => {
            const newData = this.state.students.filter((value) => value.id !== id)
            this.setState({ students: newData })
        }
        const onchange = ({ target }) => {
            this.setState({ [target.name]: target.value })
            console.log(target.value, target.name)
            this.state.students.filter((value) => target.name)
        }
        const onAdd = () => {
            if (
                // this.state.status.match('[a-zA-Z]+')
                !this.state.active &&
                this.state.name.length !== 0 &&
                this.state.surname.length !== 0 &&
                this.state.status.length !== 0
            ) {
                let newUser = {
                    id: this.state.students.length + 1,
                    name: this.state.name,
                    lastname: this.state.surname,
                    status: this.state.status
                }
                this.setState({ students: [...this.state.students, newUser] })
            } else {
                let newUser = {
                    name: this.state.name,
                    lastname: this.state.surname,
                    status: this.state.status
                }
                let usr = this.state.students.map((value) =>
                    value.id === this.state.active
                        ? { ...value, ...newUser }
                        : value
                )
                this.setState({
                    students: usr,

                })
            }
            this.setState({
                active: null,
                name: "",
                surname: "",
                status: ""
            })
        }
        const onRefresh = () => {
            this.setState({ students })
        }
        const onEdit = (value) => {
            console.log(value.id);
            this.setState({

                active: value.id,
                name: value.name,
                surname: value.lastname,
                status: value.status
            })
        }
        const onSave = (value) => {
            console.log(value.id)
        }
        return (
            <Container>
                <div>
                    <input
                        value={this.state.name}
                        onChange={onchange}
                        type="text" placeholder='name' name='name'></input>
                    <input
                        value={this.state.surname}
                        onChange={onchange}
                        type="text" placeholder='surename' name='surname'></input>
                    <input
                        value={this.state.status}
                        onChange={onchange}
                        type="text" placeholder='status' name='status'></input>
                    <button
                        onClick={onAdd}
                        style={{
                            width: "120px",
                            marginBottom: "10px"
                        }}>Add</button>
                </div>
                {
                    this.state.students.length ? this.state.students.map((value) => (
                        <Card active={this.state.active === value.id} value={value} key={value.id}
                            onDelete={onDelete} onEdit={onEdit} onSave={onAdd}
                        />
                    )
                    )
                        : <button
                            onClick={onRefresh}
                        >Refresh</button   >
                }
            </Container>
        )
    }
}
