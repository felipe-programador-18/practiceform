import React,{useState,useEffect } from 'react'
import * as yup from 'yup'




const schema = yup.object().shape({
    name: yup.string().required("Preencha o campo"),
    email: yup.string().required("Prencha o campo").email("Por favor preencha o campo")
})

const uf = ["RS,",'SP', 'SC','RJ']

const ManagAll = () => {
   const [form, setform ] = useState({
    name:'', email:'', uf:"", subscribe: false   
   })
           
   const ClickHere = () => {
     console.log(form)
   }
   
   const GetMore = evt => {
    const Form = evt.target.name
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
       setform(curr => {
        return {
            ...curr,
            [Form]: value
        }
       })
  }
  const [statusvalidation, setvalidatoin] = useState(false)
  const[loading, setloading] = useState(false)
  const [send, setsending ] = useState(false)
  const [ errors, seterrors ] = useState({})
   useEffect(() => {
     // i need create variable async to get all date!!
     const loadDate = async () => {
      const data = await fetch('/api/users/2')
      const json = await data.json()
      
      setform({
       name: json.name,
       email: json.email,
       uf: json.uf,
       subscribe: json.subscribe   
      })
      setloading(true)
     } 
      loadDate() 
   },[])
     
   // now make functions to validation!!!
   // this structure to validate all form!!!!
   useEffect(() => {
    const validation = async () => {
     const statusvalidation = await schema.isValid(form)
     seterrors(statusvalidation)
     try {
       await schema.validate(form, {abortEarly:false})
       seterrors({})
     } catch (error) {
      //analyze that structure!!! 
      const test = error.inner.reduce((prev, curr) => ({...prev ,  [curr.path]: curr.message }), {})
      seterrors(test)
     }

    }
    validation()
   },[form])

  // now i have create functions to submite date!!!
  //remember i create three functions!!! get api, validation and submite!!
   
  const submmite = async () => {
    setsending(true)  
    const data = await fetch("/api/users", {
     method:"POST",
     headers:{
      Accept:'application/json',
      "Content-type": "application.json"
     },
     body: JSON.stringify(form)
   })
     const json = await data.json()
     setsending(false)

     //dependence that business rules, i need defined if i want adding more thing here!!!
  }






   return (<>
              <h1> Testing here loading.... {JSON.stringify(loading)} </h1>

              {loading &&
              <>
              Name:
              <input className='text-center bg-yellow-300' type='text' name='name' value={form.name} onChange={GetMore}  />
              {errors.name && <p> {errors.name}</p>}
              E-mail
              <input className='text-center bg-red-800' type='email' name='email' value={form.email}  onChange={GetMore} />
              {errors.email && <p> {errors.email} </p> }


              <input type='checkbox' name='subscribe' value={form.subscribe} onChange={GetMore}  />
              {form.subscribe && <p>Thanks for your signature !!!</p>}
                           
              <select name='uf' onChange={GetMore} value={form.uf}> <option> Select your City:</option>
                {uf.map(uf => 
                    <option value={uf} key={uf} >{uf} </option>
                  )}
              </select>

                          
    <button type='button' onClick={ClickHere} >Get All</button>
    <button type='button'  onClick={()=> setform(curr => !curr)}  > Hide all</button>
    <button type='button' onClick={submmite} disabled={send} >Submite</button>
    {JSON.stringify(form, null, 2)}
    
    </>}
   
   </>)
}

export default ManagAll