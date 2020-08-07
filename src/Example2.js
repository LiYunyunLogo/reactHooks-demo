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

// 类组件
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count:0
//          }
//     }
//     render() { 
//         return ( 
//             <div>
//                 <p>you clicked {this.state.count} times</p>
//                 <button onClick={this.addCount}>Click me</button>
//             </div>
//          );
//     }

//     addCount=()=>{
//         this.setState({
//             count: this.state.count+1
//         })
//     }
// }
 
export default Example;