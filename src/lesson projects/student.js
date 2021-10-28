import React, { Component } from "react";
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "Small",
            name: "WebBrain"
        }
    }
    render() {
        const Changer = (event) => {
            if (event.target.id === "1") {
                this.setState({ size: "Large" })
            }
            if (event.target.id === "1" && this.state.size === "Large") {
                this.setState({ size: "Small" })
            }
            if (event.target.id === "2") {
                this.setState({ name: "IT Academy" })
            }
            if (event.target.id === "2" && this.state.name === "IT Academy") {
                this.setState({ name: "Web Brain" })
            }
        }
        return (
            <div>
                <h1>{this.state.size}</h1>
                <h1>{this.state.name}</h1>
                <button id="1" onClick={Changer}>Change size</button>
                <button id="2" onClick={Changer}>Change Title</button>
            </div>
        )
    }
}
export default Student;