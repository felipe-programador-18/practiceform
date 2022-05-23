import React, {useRef, useState} from 'react'

const practiForm = () =>{
 const reffere = useRef(true)
 
 const getState = () =>{
     console.log(reffere.current.value)
 }

 return(<>
        <h1>training about form uncontrolled!!</h1>
        <input type='text' />
        <button onClick={getState}>Get value</button>
 </>)


}

export default practiForm