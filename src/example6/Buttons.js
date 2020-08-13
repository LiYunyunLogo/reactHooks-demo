import React ,{useContext}from "react";
import {ColorContext,UPDATE_COLOR} from "./color";

function Buttons(){
    const {dispatch}=useContext(ColorContext)

    const changeColor=(color)=>{
        dispatch({type:UPDATE_COLOR,color})
    }

    return (
        <div>
            <button onClick={()=>changeColor('red')}>红色</button>
            <button onClick={()=>changeColor('yellow')}>黄色</button>
        </div>
    )
}
export default Buttons