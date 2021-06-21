import React,{useState,useEffect} from 'react'
import './DR.css'

import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'

function UpdateDealer() {

      const[dealername,setName]=useState();
      const[dealeremail,setEmail]=useState();
      const[dealerpassword,setPass]=useState();
      const[dealercontactno,setNumber]=useState(); 
      const[role,setRole]=useState();
      const[crop_name,setCropName]=useState();
      const[farmer_name,setFarmerName]=useState();
      const[account_number,setAccoNo]=useState();
      const[bank_name,setBankName]=useState();
      const[ifsc_code,setIfcCode]=useState() ;
       const id=204;
     // const[errors,setErrors]=useState({});


     useEffect(()=>{
           
       
    
        
      fetchDealer();
  

 },[]);

 const fetchDealer= async()=>{

  
  const response=await fetch("http://localhost:8702/dealer/"+id)
  const data=await response.json();
  console.warn(data)
  setName(data.dealername);
  setEmail(data.dealeremail);
  setPass(data.dealerpassword);
  setNumber(data.dealercontactno);
  setRole(data.role);
 // setStreet(data.farmeraddress.street);
  //setState(data.farmeraddress.state);
  //setCity(data.farmeraddress.city);
  //setPincode(data.farmeraddress.pincode);
  setCropName("");
  setFarmerName("");
  setAccoNo(data.dealerbankdeatils.account_number);
  setBankName(data.dealerbankdeatils.bank_name);
  setIfcCode(data.dealerbankdeatils.ifsc_code);


  


     }; 





    
    
      async function Register()
       {   
        
            let item={id,dealername,dealeremail,dealerpassword,dealercontactno,role,dealersubcropdeatils:{crop_name,farmer_name},dealerbankdeatils:{account_number,bank_name,ifsc_code}}
            

                
            console.warn(item)
           let result=await fetch("http://localhost:8702/dealer/update/"+id,{
            method:'PUT',
            body:JSON.stringify(item),
            headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
            }
  

            })
            result= await  result.json()          
            console.warn("result",result)    
       }

       

    return (   
         <div>
      <div id="one"><h1> Update Here</h1></div>
        <div className="col-sm-6 offset-sm-3 " id="two">
             <h2>Update Here</h2>
            <input type="text" onChange={(e)=>setName(e.target.value)}   value={dealername}    class="form-control " placeholder="Name" id="name" required></input>
            <br></br>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={dealeremail} class="form-control" placeholder="Email" required ></input>
            <br></br>
            <input type="password" onChange={(e)=>setPass(e.target.value)} value={dealerpassword} className="form-control" placeholder="Password" required></input>
            <br></br>
 
            <input type="text" onChange={(e)=>setNumber(e.target.value)} value={dealercontactno} className="form-control" placeholder="Contatct No" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setRole(e.target.value)}  value={role} className="form-control" placeholder="Role" required></input>
            <br></br>
            <h2>Bank Details</h2>
            <input type="text" onChange={(e)=>setAccoNo(e.target.value)} value={account_number}  className="form-control" placeholder="Account No" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setBankName(e.target.value)} value={bank_name} className="form-control" placeholder="Bank Name" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setIfcCode(e.target.value)} value={ifsc_code} className="form-control" placeholder="IFSC Code" required></input>
            <br></br>
            <button onClick={Register} class="btn btn-primary">Update</button>
    
          </div>
          </div>
    )
}

export default UpdateDealer
