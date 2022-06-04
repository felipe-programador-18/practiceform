import React,{useState} from 'react'

//practice more little bit about form controlled

const uf = ['RS','SC','RJ','SP']
 
const controlleFormDate = () => {
  const [form, setform] = useState(
      { name:'' , email:'', uf:'', subscribe: false 
    })
 
  const Onchange = evt => {
  const Formform = evt.target.name
  //this i did to verify checkbox
  const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value

    setform( evoq => {
        return {
            ...evoq,
            [Formform]: value
        }
    } )
  }  


  const getAllValue = () => {
      console.log(form)
  }

  return(<> <div className='text-center d-block' >

    Name:  
    <input className='bg-gray-300' type='text' name='name' value={form.name} onChange={Onchange} />
    E-mail:
    <input className='bg-gray-300'  type='email' name='email' onChange={Onchange} value={form.email} />
    Wish receive either week news.

    <input type='checkbox' 
    name='subscribe'
    value={form.subscribe}
    onChange={Onchange}  
    /> <br/>
    
    {form.subscribe && 
     <p> Thanks, for agree in share your e-mail with us! Every week, send you email, trendings, insight about world of programmers!!
     </p>}


    <select name='uf'  value={form.uf}  onChange={Onchange} >     <option> Select your state. </option> 
        {uf.map(uf => <option key={uf} value={uf} > 
        {uf} 
        </option>
        )}     
        
    </select>

    <button className='bg-red-800' onClick={getAllValue}  >Send Value!</button>
    <button className='bg-blue-900'  onClick={()=> setform(curr => !curr) }  >Hide Value!</button>
     
     <pre> {JSON.stringify(form, null, 2)} </pre>
     
    </div>
  </>)

}


export default controlleFormDate