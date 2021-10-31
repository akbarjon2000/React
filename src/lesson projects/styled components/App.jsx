import React, { Component } from 'react'
import { Wrapper, Title, Button } from './StyledComponents'
export default class App extends Component {
    state = {
        dark: false
    }
    render() {
        const Toggle = () => {
            this.setState({ dark: !this.state.dark })
        }
        return (
            <div>
                <Wrapper dark={this.state.dark}>
                    <Title dark={this.state.dark} size="small">Toggle Me</Title>
                    <Title dark={this.state.dark} size="medium">Toggle Me</Title>
                    <Title dark={this.state.dark} size="large">Toggle Me</Title>
                    <Button onClick={Toggle}>Dark Mode is {this.state.dark ? 'on' : "off"}</Button>
                </Wrapper>
            </div>
        )
    }
}
