import { useEffect, useState } from "react";

export const isFalse = (value:unknown) => value === 0 ? false : !value;

export const cleanObject = (object:object)=>{
    const result = {...object};
    Object.keys(object).forEach(key =>{
        // @ts-ignore
        const value = result[key];
        if(isFalse(value)){
             // @ts-ignore
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback:()=>void)=>{
    useEffect(()=>{
        callback()
    },[])
}

export const useDebounce = <V>(value:V,delay?:number)=>{
    const [debounceValue,setDebounceValue] = useState(value);

    useEffect(()=>{
        //每次value变化的时候，设置一个定时器
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
        //每次在上一useEffect处理完后运行。
        return ()=>clearTimeout(timeout)
    },[value,delay])

    return debounceValue
}