import React, { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import cardsObj from "../../utils/cardObjects/new"
const Index = () => {
    const value = useContext(MyContext)
    const [count, setCount] = useState(0)
    const [change, setChange] = useState(value)
    const [card, setCard] = useState(cardsObj)
    const Onchange = (e) => {
        setChange(e.target.value)
    }
    const ondelete = (id) => {
        let newData = card.new.filter((value) => value.id !== id);
        setCard(newData)
    }
    useEffect(() => {

    }, [change])
    useEffect(() => {
        console.log('useEffect with arr');
    }, []);
    useEffect(() => {
        console.log("without arr")
    })
    useEffect(() => {
        console.log('useEffect with param')
    }, [count])
    useEffect(() => {
        console.log("paragraph change")
    }, [change])
    return (
        <div>
            <h1>{change}</h1>
            <h1>Hooks component {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <input onChange={(e) => Onchange(e)}></input>
            {
                card.new.map((value) => (
                    <div>
                        <p>{value.orderNum}</p>
                        <p>{value.time}</p>
                        <p>{value.customer}</p>
                        <p>{value.phoneNum}</p>
                        <p>{value.cost}</p>
                        <p>{value.deliveringCost}</p>
                        <p>{value.total}</p>
                        <button onClick={() => ondelete(value.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Index;