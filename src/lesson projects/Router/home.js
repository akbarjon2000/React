import React from 'react'
import { BrowserRouter, useNavigate, Outlet } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate(-2)}>{'<<'}</button>
            <button onClick={() => navigate(-1)}>{'<'}</button>
            <button onClick={() => navigate(1)}>{'>'}</button>
            <button onClick={() => navigate(2)}>{'>>'}</button>
        </div>
    )
}
export default Home