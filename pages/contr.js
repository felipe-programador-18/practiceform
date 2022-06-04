import React,{useState} from 'react'

//practice little bit about form controoled

const controlledForm =() => {
   const [value, setvalue] = useState('')
   const [show, setshow] = useState(true)
     
   // this together works with value inside status
   const getConsdole = () =>{
       console.log(value)
   }
  
   // create one function to onchange
   const Onchange = evt => {
       setvalue(evt.target.value)
       if(evt.target.value !== ''){
           console.log('fielt fill !!!')
       }
   }

    
 return(<> <h1>Pratice little bit about Form controlled</h1>
     { show &&
    <input type={'text'} onChange={Onchange}   value={value}  placeholder='controlled practice'  />
     }
    <button onClick={getConsdole}>Caught</button>
    <button onClick={()=> setshow(one => !one)}  >Hiddem</button>

 </>)   

}
export default controlledForm