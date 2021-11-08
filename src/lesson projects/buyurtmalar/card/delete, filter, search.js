import React, { Component } from 'react'
import student from "../../../utils/studentData"
import { User } from './style'

export default class Card extends Component {

    render() {
        const { id, name, lastname, status } = this.props.value;
        console.log(this.props.active);
        return (
            <div>
                <User style={{ display: "flex" }}>
                    <User.title size="id">{id}</User.title>
                    <User.title size="action">{name}</User.title>
                    <User.title size="action">{lastname}</User.title>
                    <User.title size="action">{status}</User.title>
                    <User.title size="button">
                        {this.props.active ?
                            <button onClick={() => { this.props.onSave({ id }) }} >Save</button>
                            : <button onClick={() => { this.props.onEdit({ id, name, lastname, status }) }} >Edit</button>

                        }
                        <button onClick={() => { this.props.onDelete(id) }}>Delete</button>
                    </User.title>
                </User>
            </div>
        )
    }
}



