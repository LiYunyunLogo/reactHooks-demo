// useContext  createContext 解决父子组件传值问题

import React, { useState,createContext,useContext } from 'react';

const CountText = createContext() //创建一个共享数据的组件

function Counter(){
    let count = useContext(CountText) //接收组建传过来的值
    return count+'lyy'
}

// 函数组件
function Example4(){
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* <p>you click {count} times</p> */}
            <button onClick={() => setCount(count+1)}>click Me</button>
            <CountText.Provider value={count}>
                <Counter/>
            </CountText.Provider>
        </div>
    )
}
 
export default Example4;