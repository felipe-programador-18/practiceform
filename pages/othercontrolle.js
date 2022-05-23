import React,{useState} from 'react'

const creatControllForm = () => {
    const [form, setform] = useState({
        name:'',
        email:'',
        uf: ''
    })

    const onChange = event =>{
     setform(event.target.value)
    }


    return(<> <h1>Create another page to practice about form controlled!!</h1>       
            Name:
             <input type='text' name='name' value={form.name} /> <br/>
                        
            Email:
             <input type='text' name='email' value={form.email} /> <br/>

             <button onChange={onChange}>Get State</button>
             <button onChange={onChange}>Hide State</button>
             
             <pre> {JSON.stringify(form)}</pre>

             {form === 'Pj' && <p>Please adding your Pj</p>}            
     </>)
}

export default creatControllForm