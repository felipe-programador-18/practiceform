import React,{useState} from 'react'

const controForm = () => {
   const [value, setvaleu] = useState('')
   const [show, setshow] = useState(true)
    const getState = () =>{
     console.log(value)
   }
   // inside functions i have passed it setvalue to get event of input!!
   const onChange = event => {
     setvaleu(event.target.value)   
   } 

   return(<>
        <h1>training about form uncontrolled!!</h1>
       { show && <input type='text' placeholder='Controlled' value={value}  onChange={onChange}  /> }
        <button onClick={getState}>Get value</button>
        <button onClick={()=> setshow(curr => !curr)}>hide value</button>
        {value}
        {value === '' && <p>fielt invalidated!!</p>}
 </>)
}

export default controForm