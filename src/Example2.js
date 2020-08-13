import React, { useState } from 'react';

// 函数组件
function Example(){
    const [age] = useState(25)
    const [sex] = useState("男")
    const [work] = useState("程序员")
    return (
        <div>
            <p>年龄：{age} 岁</p>
            <p>性别：{sex} </p>
            <p>工作：{work} </p>
        </div>
    )
}
 
export default Example;