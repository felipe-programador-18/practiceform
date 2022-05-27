import React,{useRef, useState} from 'react'

//practice little bit about form uncontrolled!!!
//remember uncontrolled form is when
const formUncot = () => {
    const myReffer = useRef(true)
    const [show, setshow] = useState()
    
    const handCons = ()=>{
        console.log(myReffer?.current?.value)
    }

    return(<>
    <div className='d-flex text-center'>
    <h1 className='bg-red-700'>Practice more about form uncontrolled!!!</h1>
         {show && 
         <input type={'text'}   ref={myReffer} />
              }
         <button onClick={handCons}> Get State</button>
         <button onClick={() => setshow(curr => !curr)} >Hide State</button>
    
         </div>
    </>)
}


export default formUncot
