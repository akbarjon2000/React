import React from 'react'
import { BrowserRouter, NavLink, Link, Route, Routes, useNavigate, Outlet } from "react-router-dom"
import { Container } from './style';
import Card from '../buyurtmalar/index';
import Home from './home';
const Router = () => {
    // const navigate = useNavigate();
    const isActive = ({ isActive }) => {
        return {
            color: isActive ? 'red' : 'black',
        }
    }

    return (
        <>
            <BrowserRouter>
                <Container>
                    <NavLink style={isActive} to='/home'>Home</NavLink>
                    <NavLink style={isActive} to='/card'>Card</NavLink>
                    <NavLink style={isActive} to='/buyurmalar'>Buyurtmalar</NavLink>
                    <button>Go Home</button>
                </Container>
                <Routes>
                    <Route path='/card' element={<Card />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/buyurmalar' element={<h1>Buyurtmalar</h1>} />
                    <Route path='*' element={<h1>404 page not found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router