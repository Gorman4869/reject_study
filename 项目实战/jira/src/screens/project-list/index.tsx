import { SearchPannel } from "./search-pannel"
import { List } from "./list"
import { useEffect, useState } from "react"
import { cleanObject,useMount,useDebounce } from "../../utils";
import * as qs  from "qs"

const apiUrl = process.env.REACT_APP_API_URL;


export const ProjectListScreen =()=>{
    const [users,setUsers] = useState([])
    const [param, setParam] = useState({
        name:'',
        personId:'',
    });
    const debounceParam = useDebounce(param,300)
    const [list,setList] = useState([]);
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debounceParam])

    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    })
    return <div>
        <SearchPannel param={param}  setParam={setParam} users={users}></SearchPannel>
        <List users={users} list={list}></List>
    </div>
}