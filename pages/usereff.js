import React,{useRef, useState} from 'react'
// uncontrolled form
//lot interesting when using useref my page change of state of undefied!!
const createAnoEx = () => {
   const reffered = useRef(true)
   const [show, setshow] = useState()

   const onHidevalue = () => {
    console.log(reffered?.current?.value)
}
    return(<>
      <h1>Pratice about useRef!!</h1>
       {show && <input type='text' placeholder='uncontrolled!' ref={reffered} /> }
       
       <button onClick={onHidevalue} >Get value </button>
       <button onClick={() =>  setshow( curr => !curr ) } >Hide value</button>
    </>
    )
}

export default createAnoEx