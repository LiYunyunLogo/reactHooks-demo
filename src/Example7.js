//useMemo的使用 精准状态更新
import React ,{useState,useMemo}from "react";
function Example7(){
    const [xiaohong,setXiaohong] = useState('woshi xiaohong')
    const [zhiling,setZhiling] = useState('woshi zhilling')
    return (
        <div>
            <button onClick={setXiaohong('xiaohong'+new Date().getTime())}>小红</button>
            <button onClick={() => {setZhiling(new Date().getTime()+'zhiling')}}>zhiling</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </div>
    )
}
// 自组件
function ChildComponent({name,children}){
    const changeXiaohong =()=>{
        console.log('xiaohong 来了++++++++++++++++++++')
        return name + 'xiaohonglaile'
    }
    const actionXiaohong = useMemo(() => changeXiaohong(name),[changeXiaohong, name])

    return (
        <div>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </div>
        )
}

export default Example7