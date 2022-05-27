import React,{useEffect, useState} from 'react'

const controForm = () => {
   const [value, setvaleu] = useState('')
   const [show, setshow] = useState(true)
   const [test, settest] = useState(true) 
   const getState = () =>{
     console.log(value)
   }
   // inside functions i have passed it setvalue to get event of input!!
   const onChange = event => {
       setvaleu(event.target.value)
       if(event.target.value === ''){
           console.log('fill in the fielt please!!!')
        }
        
   } 

   return(<>
   <div className='d-flex text-center'>
        <h1>training about form uncontrolled!!</h1>
       { show && <input type='text' placeholder='Controlled' value={value}  onChange={onChange}  /> }
        <button className='bg-green-600' onClick={getState}>Get value</button>
        <button className='bg-yellow-500'  onClick={()=> setshow(curr => !curr)}>hide value</button>
        {value}
        {value === '' && <p>fielt invalidated!!</p>}

       { test &&
        <div> 
          <p>testing some things!!</p>
          <button className='bg-blue-700' onClick={() => settest(curr => !curr)  }  >Hide div</button>
        </div>
         }
 </div>
 </>)
}

export default controForm