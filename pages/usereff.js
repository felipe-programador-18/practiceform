import React,{useRef, useEffect, useState} from 'react'

export const showCounter = ({ counter, identifier }) =>{ 
 const render = useRef(identifier)
  
 useEffect(() => {
  render.current = render.current +1
 })
   
  return (
      <p> counter : {counter} here inside // renders: {render.current} {identifier} </p>
  )
}




const createInsig = () => {
 // try learning about useRef
 const mydiv = useRef(null)
 const [counter, setcounter] = useState(0)


    return(
    <div  ref={mydiv}>
     <h1>Learning about useRef</h1>
     <h2>Pratice more about that!!</h2>

     <button onClick={ ()=> setcounter(old => old+1) } >try code!!</button>
     <showCounter counter={counter} identifier={0} />
     <showCounter counter={10} identifier={10} />

    </div>)
}

export default createInsig