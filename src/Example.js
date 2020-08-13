import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,link, Link} from 'react-router-dom'

function Index(){
    // useEffect 的使用
    // 第一个参数内执行，有return的话会执行销毁
    // 第二个参数控制是否每次更新状态都会重新渲染
    useEffect(()=>{
        console.log('useEffect=> lailalaodi -----index')
        return ()=>{
            console.log('useEffect=> 走了老弟 -----index')
        }
    },[])
    return <h2>yybbK.com</h2>
}
function List(){
    useEffect(()=>{
        console.log('useEffect=> lailalaodi -----list')
        return ()=>{
            console.log('useEffect=> 走了老弟 -----list')
        }
    })
    return <h2>List Page</h2>
}
// 函数组件
function Example(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        //异步操作，不会阻断页面更新
        console.log(`useEffect=>you clicked ${ count } times`)
        return () =>{
            console.log("===================================================")
        }
    },[count])

    return (
        <div>
            <p>you click {count} times</p>
            <button onClick={() => setCount(count+1)}>click Me</button>
            <Router>
                <ul>
                    <li>
                        <Link to='/' >首页</Link>
                    </li>
                    <li>
                        <Link to='/list/' >列表</Link>
                    </li>
                </ul>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list/' component={List}></Route>
            </Router>
        </div>
    )
}
export default Example;