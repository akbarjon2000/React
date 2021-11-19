import React, { useMemo, useState } from 'react'
import Counter from './counter'
export const Home = () => {
    const [title, setTitle] = useState('')
    const [data, setData] = useState(0)
    const onChange = ({ target }) => {
        setTitle(target.value);
        setData(data + 1)
    }
    const useTitle = useMemo(() => title, [])
    const useData = useMemo(() => data, []);
    console.log('home render')
    return (
        <div>
            <h1>title: {title}</h1>
            <input onChange={(e) => onChange(e)}></input>
            <Counter title='test' obj={useTitle} myObj={useData} />
        </div>
    )
}
