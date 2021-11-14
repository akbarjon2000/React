import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
//Contexts
import Context from "./context"
import UserContext from './userContext';
//Components
import Products from "./components/products/Products"
import Orders from "./components/orders/Orders"
import Lesson from "./lesson projects/Router/Router"
import Hooks from ".//components/hooks"
import Orders2 from "./components/orders2"
import Category from './category/Category';
const App = () => {
    return (
        <UserContext>
            <Context>
                <Category />
            </Context>
        </UserContext>
    )
}
export default App;