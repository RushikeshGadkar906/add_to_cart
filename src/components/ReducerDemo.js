// import React,{useState} from 'react'

// const ReducerDemo = () => {
//     const [count, setCount] = useState(0);
//   return (
//     <div className='centerDiv'>
//         <h1>{count}</h1>
//         <button className='mr-5' onClick={()=>setCount(count+1)}>INC</button> 
//         <button onClick={()=>setCount(count-1)}>DEC</button>
//     </div>
//   )
// }

// export default ReducerDemo

import React,{useReducer} from 'react';

const initialState = 0;

const reducer = (state,action) =>{
    // console.log(state,action);

    if(action.type === "INC")
        return state+1;
    if(action.type === "DEC")
        return state-1;
}
const ReducerDemo = () => {
    
    const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <div className='centerDiv'>
        <h1>{state}</h1>
        <button className='mr-5' onClick={()=> dispatch({type: "INC"})} >INC</button> 
        <button onClick={()=> dispatch({type: "DEC"})} >DEC</button>
    </div>
  )
}

export default ReducerDemo