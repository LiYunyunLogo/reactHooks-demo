import React ,{useRef,useState,useEffect} from "react";

function Example8(){
    const [text,setText] = useState('111')
    const inputEl =useRef(null)
    const onBtnClick = () => {
        inputEl.current.value='hello World'
        console.log(inputEl,'+++++++++++++++')
    }

    const testRef = useRef()
    useEffect(()=>{
        testRef.current.value = text
     console.log("testRef--------",testRef)
    })
    return (
        <div>
            <input type="text" ref={testRef}/>
            <button onClick={onBtnClick}>在input上展示文字</button>

            <br/>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default Example8