import React,{useState,useEffect} from 'react'

const ChangeWidth = () => {
    const [count, setCount] = useState(window.screen.width);

    const checkWidth = () =>{
        // console.log(window.innerWidth);
        setCount(window.innerWidth)
    }

    useEffect(()=>{
       window.addEventListener("resize",checkWidth) 

       return () =>{
           window.removeEventListener("resize",checkWidth)
       }
    })

  return (
    <>
        <div className='centerDiv'>
        <h1>Current Width</h1>
        <h1>{count}</h1>
        </div>
    </>
  )
}

export default ChangeWidth