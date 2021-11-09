import React, { useState } from 'react'
import { Container } from './style'
import Sidebar from "../sidebar/sidebar"
import OrderNav from '../orders/OrderNav'
import Cards from "./cards"
const Index = () => {
    return (
        <Container>
            <Sidebar />
            <div>
                <OrderNav />
                <Cards />
            </div>
        </Container>
    )
}
export default Index;