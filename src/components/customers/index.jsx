import React from 'react'
import Sidebar from '../sidebar/sidebar'
import CustomersNav from "./CustomersNav/CustomersNav"
import { Container } from "./style"
import { Body } from "./body"
const Index = () => {
    return (
        <Container>
            {/* <Sidebar /> */}
            <div>
                <CustomersNav />
                <Body />
            </div>
        </Container>
    )
}
export default Index;