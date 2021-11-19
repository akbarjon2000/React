import React, { useState, memo } from 'react'

const Counter = ({ title }) => {
    const [count, setCount] = useState(0)
    const onAdd = () => {
        setCount(count + 1)
    }
    console.log('counter render')
    return (
        <div>
            <h1>Counter Title: {title} </h1>
            <h1>Count: {count}</h1>
            <button onClick={onAdd}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
export default memo(Counter);