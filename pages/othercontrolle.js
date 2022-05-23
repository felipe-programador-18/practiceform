import React,{useState} from 'react'

//create array of city
const uf = ['RS','SC','RJ','SP']

const creatControllForm = () => {
    const [form, setform] = useState({
        name:'',
        email:'',
        uf: '',
        subscribe: false
    })
    
    const getAllValue = () => {
        console.log(form)
    }
  
    //this functions works with manage of form that wanna adding more input i can manage here!!
    const onChange = event =>{  
      const formState = event.target.name
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
      
     setform(curr => {
         return{
             ...curr,
             [formState]: value
         }
     })
    }


    return(<> <h1>Create another page to practice about form controlled!!</h1>       
            Name:
             <input type='text' name='name' value={form.name} onChange={onChange} /> <br/>
                        
            Email:
             <input type='text' name='email' value={form.email} onChange={onChange} /> <br/>
              
              <input 
              type='checkbox'
              name='subscribe' 
              value={form.subscribe} 
              onChange={onChange}  
              /><br/>
               {form.subscribe && <p> Thanks for subscribe in the channel!!!</p>}
                 
              <select name='uf' value={form.uf} onChange={onChange} >
                  <option> Selecione of Uf ! </option>
                  {uf.map(uf => <option key={uf} value={uf} > {uf}
                  
                  </option>
                   )}
                 
             </select>

             <button onClick={getAllValue}  >Get State</button>
             
             
             <pre> {JSON.stringify(form, null, 2)}</pre>

             {form === 'Pj' && <p>Please adding your Pj</p>}            
     </>)
}

export default creatControllForm