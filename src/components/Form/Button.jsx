import { useEffect } from "react"
import { useState, memo } from "react"

export const Button = memo(({value, changeCount}) => {

    const [count, setCount] = useState(0)
    // console.log('Component did update')

    console.log('render button')

    useEffect(() => {
        console.log('Component did mount')
    }, [])

    useEffect(() => {
        // setInterval(() => console.log(1), 1000) - накладывание интервалов


        // const interval = setInterval(() => console.log(1), 1000)

        // return () => {
        //     clearInterval(interval)
        // }



    }, [])



    // useEffect(() => {
    //     console.log('Component did update')
    // }, [count])

    
    return <>
     <p>{count}</p>
     <button onClick={changeCount}>+1</button>
    </>
})
// (prevProps , nextProps) => {
//     if (prevProps.count !== nextProps.value){
//         return true
//     }

//     return false
// })