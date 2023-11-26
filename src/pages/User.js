import React from "react";
import '../App.css';
// const profile = import('../profiles/profile1');
import {profile1} from '../profiles/profile1';


export const User = ()=> {
    console.log(profile1.name);

    return(
        <div style={{backgroundColor: "#ffeffe" ,width: "70%" , margin :"15%",borderRadius:"20px",padding:"5rem", marginTop:"8rem"}}>
            <h1>
                <Profile name = {profile1.name} age = {profile1.age} diagnoses = {profile1.diagnoses} prescriptions = {profile1.prescription}/>
            </h1>
        </div>
    )
}
const Profile= (props)=>{
    return (
        <div> 
    <h1>Name : {props.name}</h1>
    <h1>Age : {props.age}</h1>
    <h1>Diagnoses : {props.diagnoses}</h1>
    <h1>Prescriptions : {props.prescriptions}</h1>
    </div>

    )
        
}