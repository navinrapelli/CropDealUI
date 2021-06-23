import React,{useState} from 'react'
import './FR.css'

import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'


import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FarmerRegister() {

      const[farmername,setName]=useState("");
      const[farmeremail,setEmail]=useState("");
      const[farmerpassword,setPass]=useState("");
      const[farmercontactno,setNumber]=useState(""); 
      const[role,setRole]=useState("");
      const[street,setStreet]=useState("");
      const[state,setState]=useState("");
      const[city,setCity]=useState("");
      const[pincode,setPincode]=useState(""); 
      const[account_number,setAccoNo]=useState("");
      const[bank_name,setBankName]=useState("")
      const[ifsc_code,setIfcCode]=useState("") ;
      const[farmer_id,setFarmerid]=useState("");
      const[dealer_id,setDealerid]=useState("");
      const[dealer_name,setDelarname]=useState("");
      const[dealer_No,setDealerNO]=useState("");
      const[message,setMessage]=useState("");
      const{id}=useParams();
      let history=useHistory();

      console.warn(id);



        

    
    
      async function Register(e)
       {     
            let id=Math.floor(Math.random() * (100 - 10) + 10) 
             toast.success("Update Sucessfully")
            history.push("/loginfarmer/"+id)
              
             console.warn() 
                  e.preventDefault();
                            
      let item={id,farmername,farmeremail,farmerpassword,farmercontactno,role,farmeraddress:{street,state,city,pincode},farmerbankdeatils:{account_number,bank_name,ifsc_code},messages:{farmer_id,dealer_id,dealer_name,dealer_No,message}}
            

                
            console.warn(item)
           let result=await fetch("http://localhost:8703/farmer/add",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
            }
  

            })
            result= await  result.json()          
            console.warn(result)

           
             
            
       }

       

    return (   
         
        
        <div   >
        
            <div id="one"><h1> Register Here</h1></div>
            <div id="two" class="col-sm-6 offset-sm-3 ">
                  <h2>Personal Details</h2>
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
            <h2>Address</h2>
            <input type="text" onChange={(e)=>setStreet(e.target.value)} className="form-control" placeholder="street" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setState(e.target.value)} className="form-control" placeholder="state" required></input>
            <br></br>         
            <input type="text" onChange={(e)=>setCity(e.target.value)} className="form-control" placeholder="city" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setPincode(e.target.value)} className="form-control" placeholder="Pincode" required></input>
            <br></br>
            <h2>Bank Details</h2>
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

export default FarmerRegister
