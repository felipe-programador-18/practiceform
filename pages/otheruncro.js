import React,{useRef, useState} from 'react'

//practice little bit about form uncontrolled!!!
const formUncot = () => {
    const myReffer = useRef()
    const [ show, setshow] = useState()
    
    const handCons = evt =>{
        console.log()
    }

    return(<>
         <input onClick={handCons} type={'text'} />
         <input type={'text'} />
    </>)
}


export default formUncot
