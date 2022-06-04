import React, {useRef, useState} from 'react'

//this is practice about uncontrolled input!!
const practiForm = () =>{
 const reffere = useRef(true)
 const [show, setshow] = useState()
 const getState = () =>{
     console.log(reffere?.current?.value)
 }
 // when updating page theorical the value that contains inside input
 return(<>
        <h1>training about form uncontrolled!!</h1>
       { show && <input type='text' placeholder='uncontrolled' ref={reffere} /> }
        <button onClick={getState}>Get value</button>
        <button onClick={()=> setshow(curr => !curr)}>hide value</button>
 </>)
}

export default practiForm