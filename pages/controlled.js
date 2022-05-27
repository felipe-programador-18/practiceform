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
        <h1>training about form controlled!!</h1>
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
 
 <div className=' d-flex text-center' >
 <table className="table text-center ">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
</div>
 </>)
}

export default controForm