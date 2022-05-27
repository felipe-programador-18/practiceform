import React,{useRef, useState} from 'react'
// uncontrolled form
//lot interesting when using useref my page change of state of undefied!!
const createAnoEx = () => {
   const reffered = useRef(true)
   const [show, setshow] = useState()

   const onHidevalue = () => {
    console.log(reffered?.current?.value)
    }
    
    return(
    <div className='text-center d-flex '>
      <h1>Pratice about useRef!!</h1>
       {show && <input className='bg-green-400' type='text' placeholder='uncontrolled!' ref={reffered} /> }
       
       <button className='bg-red-500 m-2' onClick={onHidevalue} >Get value </button>
       <button className='bg-blue-400' onClick={() =>  setshow( curr => !curr ) } >Hide value</button>
       </div>
    
    )
}

export default createAnoEx