import React, { useState, useEffect } from 'react'

const Index = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [])
    return (
        <div>
            {data.length ?
                data.map((value, index) => (
                    <div key={index}>

                        <h1>{index + 1}  {value.title}</h1>
                        <p>{value.completed}</p><hr></hr>
                    </div>
                ))
                : <h1>Loading...</h1>}
        </div>
    )
}
export default Index;