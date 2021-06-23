import React,{useState,useEffect} from 'react'
import './FR.css'

import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'

import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UpdateFarmer() {

      const[farmername,setName]=useState();
      const[farmeremail,setEmail]=useState();
      const[farmerpassword,setPass]=useState();
      const[farmercontactno,setNumber]=useState(); 
      const[role,setRole]=useState();
      const[street,setStreet]=useState();
      const[state,setState]=useState();
      const[city,setCity]=useState();
      const[pincode,setPincode]=useState(); 
      const[account_number,setAccoNo]=useState();
      const[bank_name,setBankName]=useState()
      const[ifsc_code,setIfcCode]=useState() ;
      const[farmer_id,setFarmerid]=useState("");
      const[dealer_id,setDealerid]=useState("");
      const[dealer_name,setDelarname]=useState("");
      const[dealer_No,setDealerNO]=useState("");
      const[message,setMessage]=useState("");
      const{id}=useParams();
      let history=useHistory();

      console.warn(id);
        //let{id}=useParams();



      useEffect(()=>{
           
       
    
        
            fetchFarmer();
        

       },[]);
    
       const fetchFarmer= async()=>{
    
        
        const response=await fetch("http://localhost:8703/farmer/"+id)
        const data=await response.json();
        console.warn(data)
        setName(data.farmername);
        setEmail(data.farmeremail);
        setPass(data.farmerpassword);
        setNumber(data.farmercontactno);
        setRole(data.role);
        setStreet(data.farmeraddress.street);
        setState(data.farmeraddress.state);
        setCity(data.farmeraddress.city);
        setPincode(data.farmeraddress.pincode);
        setAccoNo(data.farmerbankdeatils.account_number);
        setBankName(data.farmerbankdeatils.bank_name);
        setIfcCode(data.farmerbankdeatils.ifsc_code);

    
        


           }; 





        

    
    
      async function Register(e)
       {   
               toast.success("Farmer Updated")
           
                  e.preventDefault();

      let item={id,farmername,farmeremail,farmerpassword,farmercontactno,role,farmeraddress:{street,state,city,pincode},farmerbankdeatils:{account_number,bank_name,ifsc_code},messages:{farmer_id,dealer_id,dealer_name,dealer_No,message}}
            

                
            console.warn(item)
           let result=await fetch("http://localhost:8703/farmer/update/"+id,{
            method:'PUT',
            body:JSON.stringify(item),
            headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
            }
  

            })
            result= await  result.json()          
            console.warn("result",result)

           
            history.push("/farmermain/"+id)
            
       }

       const backtomain=()=>{

            history.push("/farmermain")
       }

       

    return (   
         
        
        <div   >
        
            <div id="one"><h1 onClick={()=>backtomain()}    > Update Here</h1> </div>
            <div id="two" class="col-sm-6 offset-sm-3 ">
                  <h2>Personal Details</h2>
            <input type="text" onChange={(e)=>setName(e.target.value)}   value={farmername}  class="form-control " placeholder="Name" id="name" required></input>
            <br></br>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={farmeremail} class="form-control" placeholder="Email" required ></input>
            <br></br>
            <input type="password" onChange={(e)=>setPass(e.target.value)} value={farmerpassword} className="form-control" placeholder="Password" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setNumber(e.target.value)} value={farmercontactno} className="form-control" placeholder="Contatct No" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setRole(e.target.value)} value={role} className="form-control" placeholder="Role" required></input>
            <br></br>
            <h2>Address</h2>
            <input type="text" onChange={(e)=>setStreet(e.target.value)} value={street} className="form-control" placeholder="street" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setState(e.target.value)} value={state} className="form-control" placeholder="state" required></input>
            <br></br>         
            <input type="text" onChange={(e)=>setCity(e.target.value)} value={city} className="form-control" placeholder="city" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setPincode(e.target.value)} value={pincode} className="form-control" placeholder="Pincode" required></input>
            <br></br>
            <h2>Bank Details</h2>
            <input type="text" onChange={(e)=>setAccoNo(e.target.value)} value={account_number} className="form-control" placeholder="Account No" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setBankName(e.target.value)} value={bank_name} className="form-control" placeholder="Bank Name" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setIfcCode(e.target.value)} value={ifsc_code} className="form-control" placeholder="IFSC Code" required></input>
            <br></br>
            <button onClick={Register} class="btn btn-primary">Update</button>
            </div>
            <ToastContainer />
          </div>
          
    )
}

export default UpdateFarmer
