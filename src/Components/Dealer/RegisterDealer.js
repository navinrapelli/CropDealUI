import React,{useState} from 'react'
import './DR.css'
import {useHistory,useParams} from 'react-router-dom'

import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterDealer() {

      const[dealername,setName]=useState("");
      const[dealeremail,setEmail]=useState("");
      const[dealerpassword,setPass]=useState("");
      const[dealercontactno,setNumber]=useState(""); 
      const[role,setRole]=useState("");
      const[crop_name,setCropName]=useState("");
      const[farmer_name,setFarmerName]=useState("");
      const[account_number,setAccoNo]=useState("");
      const[bank_name,setBankName]=useState("")
      const[ifsc_code,setIfcCode]=useState("") ;

      const[errors,setErrors]=useState({});
      let history=useHistory();
    
      async function Register()
       {           
            let id=Math.floor(Math.random() * (100 - 10) + 10) 
                 toast.success("Register Successfully")
                 toast.success("Update Sucessfully")
           
            let item={id,dealername,dealeremail,dealerpassword,dealercontactno,role,dealersubcropdeatils:{crop_name,farmer_name},dealerbankdeatils:{account_number,bank_name,ifsc_code}}
            

                
            console.warn(item)
           let result=await fetch("http://localhost:8702/dealer/add",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
            }
  

            })
            
            history.push("/dealermain/"+id)
            result= await  result.json()          
            
            console.warn("result",result)

           

            
            
       }

       

    return (   
         <div>
      <div id="one"><h1> Register Here</h1></div>
        <div className="col-sm-6 offset-sm-3 " id="two">
        <div class="alert alert-primary" role="alert">
                Perosnal Details
             </div>
            <input type="text" onChange={(e)=>setName(e.target.value)}     class="form-control " placeholder="Name" id="name" required></input>
            <br></br>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" placeholder="Email" required ></input>
            <br></br>
            <input type="password" onChange={(e)=>setPass(e.target.value)} className="form-control" placeholder="Password" required></input>
            <br></br>
 
            <input type="text" onChange={(e)=>setNumber(e.target.value)} className="form-control" placeholder="Contatct No" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setRole(e.target.value)} className="form-control" placeholder="Role" required></input>
            <br></br>
            <div class="alert alert-primary" role="alert">
                Bank Deatils
             </div>
            <input type="text" onChange={(e)=>setAccoNo(e.target.value)} className="form-control" placeholder="Account No" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setBankName(e.target.value)} className="form-control" placeholder="Bank Name" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setIfcCode(e.target.value)} className="form-control" placeholder="IFSC Code" required></input>
            <br></br>
            <button onClick={Register} class="btn btn-primary">Register</button>
    
          </div>
          <ToastContainer />
          </div>
    )
}

export default RegisterDealer
