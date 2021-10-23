import React, { Component } from 'react'
class Test extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        const getWidth = (size) => {
            switch (size) {
                case "small":
                    return "100px";
                case "medium":
                    return "150px";
                case "large":
                    return "200px";
                default:
                    return "150px"
            }
        }
        const getHeight = (size) => {
            switch (size) {
                case "small":
                    return "100px";
                case "medium":
                    return "150px";
                case "large":
                    return "200px";
                default:
                    return "150px"
            }
        }
        return (
            <div style={{
                display: "flex",
                width: "200px",
                justifyContent: "center"
            }}>

                <div style={{
                    width: getWidth(this.props.size),
                    height: getHeight(this.props.size),
                    borderRadius: "50%",
                    background: "red",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {this.props.size}
                </div>
            </div>
        )
    }
}

export default Test
