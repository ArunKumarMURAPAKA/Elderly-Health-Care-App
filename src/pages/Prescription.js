import React from "react";
import {profile1} from '../profiles/profile1';
import {useState} from "react"
import "../App.css"

let med = profile1.prescription;

export const Prescription = ()=>{
     return <div style = {{marginTop : "5rem"}}>{ med.map((value , key)=>{

    return (
        <div style ={{backgroundColor :"#ffeffe" , width:"50%" , marginLeft:"25%", borderRadius:"20px",marginTop:"1.5rem", padding:"2rem" }}>
            <Medicine name={value} key = {key}/>
        </div>
    )
 })   
 }
 </div>
 
 

}

const Medicine = (props) => {

    const [orderStatus,SetOrderStatus] = useState(false);

    let status = () =>{
        SetOrderStatus(!orderStatus)
        alert(orderStatus?"Your order is deleted":"Your order is placed")
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick= {status} style={{fontSize : "2rem" , color : orderStatus?"red":"green" , margin:"1.5rem" , padding: "1rem"}}>{orderStatus?"Delete-order":"Place-Order"}</button>
            
        </div>
    )
}