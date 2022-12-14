// import { useState } from "react"

export interface User{
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
}

interface SearchPannelProps{
    users:User[],
    param:{
        name:string,
        personId:string,
    },
    setParam:(param:SearchPannelProps['param']) => void;
}

export const SearchPannel = ({users,param,setParam}:SearchPannelProps)=>{
    
    return <form action="">
        <input type="text" value={param.name} onChange={evt=>setParam({
            ...param,
            name:evt.target.value
        })}></input>

        <select value={param.personId} onChange={evt=>setParam({
            ...param,
            personId:evt.target.value
        })}>
            <option value={''}>负责人</option>
            {
                users.map(user=> <option  value={user.id} key={user.id}>{user.name}</option>)
            }
        </select>
    </form>
}