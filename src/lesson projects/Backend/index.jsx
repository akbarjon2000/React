import React, { useState, useEffect } from 'react'

const Index = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(50)
    const url = "https://jsonplaceholder.typicode.com/todos"
    // useEffect(() => {
    //     fetch(url, {
    //         // method: "POST",
    //         // body: JSON.stringify({
    //         //     id: 1
    //         // })
    //     })
    //         .then((res) => res.json())
    //         .then((res) => setData(res))
    // }, [])
    const getData = async () => {
        const response = await fetch(url);
        let data = await response.json();
        setData(data);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {data.length ?
                data.slice(0, count).map((value, index) => (
                    <div key={index}>
                        <h1>{index + 1}  {value.title}</h1>
                        <p>{value.completed}</p><hr></hr>
                    </div>
                ))
                : <h1>Loading...</h1>}
            {data.length !== count ? <button onClick={() => setCount(count + 50)}>Load More</button>
                : <h1 style={{ color: "red" }}>NO MORE DATA</h1>
            }
        </div>
    )
}
export default Index;