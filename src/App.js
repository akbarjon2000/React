import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Context from "./context"
import Products from "./components/products/Products"
// import Orders from "./components/orders/Orders"
import Lesson from "./lesson projects/Router/Router"
import Hooks from ".//components/hooks"
import Orders2 from "./components/orders2"
const App = () => {
    return (
        <Context>
            <Lesson />
        </Context>
    )
}
export default App;