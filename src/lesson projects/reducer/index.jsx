import { Button } from 'antd';
import React, { useState, useReducer } from 'react'

const Reducer = () => {
    const [x, setX] = useState(0)
    const onChange = (e) => {
        setX(parseInt(e.target.value))
    }
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case 'plus':
                localStorage.setItem('count', state + 1)
                return state + 1
            case 'double':
                localStorage.setItem('count', state + payload.x)
                return state + payload.x

            case 'minus':
                localStorage.setItem('count', state - 1)
                localStorage.setItem('minus', state - 1)
                return state - 1
            default: return state;

        }
    }
    const [count, dispatch] = useReducer(reducer, parseInt(localStorage.getItem('count')) || 0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <input placeholder='count' type='number' onChange={(e) => onChange(e)}></input>
            <button onClick={() => dispatch({ type: "plus" })}>+</button>
            <button onClick={() => dispatch({ type: "double", payload: { x: x } })}>{x}X</button>
            <button onClick={() => dispatch({ type: "minus" })}>-</button><br />
            <button onClick={() => localStorage.removeItem('count')}>Clear</button>
            <button onClick={() => localStorage.clear()}>Clear</button>
        </div>
    )
}
export default Reducer;