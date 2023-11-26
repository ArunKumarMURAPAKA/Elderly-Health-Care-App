import React from 'react';
import {useState} from 'react';

export const Home = ()=> {

  let [message , setMessage] = useState("")
  let [sugar , setSugar] = useState(0)

  const output =()=>{
      setMessage(sugar<180 && sugar>60?"Blood-glucose levels looking normal":"Blood-glucose levels looking abnormal");
    if(sugar>300){
 
      setMessage("Emergency, calling the hospital.....")
    }
  
    
  }
  return (
    <div>
      <h3 style = {{marginTop : "5rem",fontSize:"4rem" , padding:"2rem"}}>Blood glucose levels:</h3>
      <input type="number" style={{border:"3px solid black" , margin : "5rem",fontSize:"4rem" , padding:"2rem"}} onChange={(event)=>{
        setSugar(event.target.value);
      }}/>
      <button style ={{fontSize:"2rem", border :"2px solid balck"}}
      onClick={output}
      
      >Submit</button>



      <div style = {{width:"70%",fontSize:"3.5rem",marginLeft:"15%" , backgroundColor: message?"#ffeffe":"white", padding:"2rem", borderRadius:"20px"}}>
        {message}
      </div>
    </div>
  )
}
