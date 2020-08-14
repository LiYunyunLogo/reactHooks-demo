import React,{useState,useEffect,useCallback} from "react";

//自定义hooks函数 实现浏览器页面大小监听
function useWinSize(){
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })
    const onResize = useCallback(() => {
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])
    useEffect(() => {
        window.addEventListener("resize",onResize)
        return () =>{
            window.removeEventListener('resize',onResize)
        }
    })

    return size;
}

function Example9 (){
    const size = useWinSize()

    return (
        <div>
            页面Size：{size.width}x{size.height}
        </div>
    )
}

export  default  Example9