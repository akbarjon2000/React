import React, { useState, useContext } from 'react'
import branchObj from "../../utils/branchObj"
import { Wrapper } from './style'
import { ReactComponent as Delete } from "../icons/trash-2.svg"
import { ReactComponent as Location } from "../icons/map-pin copy.svg"
import { ReactComponent as Edit } from "../icons/Path.svg"
import { MyBranchContext } from '../../contex/branchContex'
import { Restore } from '../products/styled'

const BranchBody = () => {
    const [data, setData] = useContext(MyBranchContext);
    const [newData] = useState(data);
    const onDelete = (id) => {
        let newData = data.filter((value) => value.id !== id);
        setData(newData);
    }
    const reset = () => {
        setData(newData)
    }
    return (
        <Wrapper>
            {data.length ?
                data.map(({ id, branchNameUz, branchNameEng, landmark, workingHours }) =>
                (
                    <Wrapper.obj key={id}>
                        <div style={{
                            flex: "1.25",
                            marginLeft: "18px"
                        }}>{branchNameUz}</div>
                        <div style={{ flex: "1", }}>{branchNameEng}</div>
                        <div style={{ flex: "1", }}>{landmark}</div>
                        <div style={{ flex: "1", }}>{workingHours}</div>
                        <Wrapper.action>
                            <Wrapper.Location><Location /></Wrapper.Location>
                            <Wrapper.edit ><Edit /></Wrapper.edit>
                            <Wrapper.delete onClick={() => onDelete(id)}><Delete /></Wrapper.delete>
                        </Wrapper.action>
                    </Wrapper.obj>
                ))
                : <Restore className='heartbeat' onClick={reset}>Restore</Restore>}
        </Wrapper>
    )
}
export default BranchBody;