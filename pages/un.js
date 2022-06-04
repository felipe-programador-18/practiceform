import React, {useState, useRef}  from "react";

const Testing = () =>{
  const reffered =useRef(true)
  const[showup, setshowup] = useState()
    
  const Caught = () =>{
      console.log(reffered?.current?.value)
  }


  return(<>
    <div className="text-center">
    <h1 className="text-center" >Practice more about uncontrolled form</h1>
      { showup &&
      <input  type={'text'} placeholder='Practice Uncontrolled' ref={reffered}/>
      }  
      <button onClick={Caught} >GetSta</button>
      <button onClick={() => setshowup(curr => !curr)  }  >Hide input</button>
      </div>
  </>)  
}


export default Testing