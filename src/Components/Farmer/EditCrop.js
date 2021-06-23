import React,{useState,useEffect} from 'react'
import './FR.css'

import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'

import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditCrop() {
   
    const[crop1,setCrop]=useState();
    const{id,farid}=useParams();
    
       
    let history=useHistory();
    console.warn(id);
    console.warn(farid);

    console.log(crop1);
   
    const[crop_name,setCropName]=useState();
      const[quantity,setQuantity]=useState();
      const[selling_price,setSellinPrice]=useState();
      const[total,setTotal]=useState(); 
      const[uplodedby,setUplodby]=useState();
      const[sellername,setSellerName]=useState();
      const[street,setStreet]=useState();
      const[state,setState]=useState();
      const[city,setCity]=useState();
      const[pincode,setPincode]=useState();
            


      useEffect(()=>{
           
       
    
        
        fetchCrops1();
        

       },[]);
    
       const fetchCrops1= async()=>{
    
        const response=await fetch("http://localhost:8703/farmer/crop/"+farid)
        const data=await response.json();
        console.warn(data)

         setCropName(data[0].crop_name);
         setQuantity(data[0].quantity);
         setSellinPrice(data[0].selling_price);
         setTotal(data[0].total);
         setUplodby(data[0].uplodedby);
         setSellerName(data[0].sellername);
         setStreet(data[0].street);
         setState(data[0].state);
         setCity(data[0].city);
        setPincode(data[0].pincode);
         

    
        


           }; 
           
      
     
       //let  id=props.name.map(farm=>farm.id)    
     //console.warn(id[0]);
        //  let id=nav[0].id;

   
      
    
    
           





      async function Register()
       {   
            
              toast.success("Edited Successfully")
        
               
             let item ={id,crop_name,quantity,selling_price,total,uplodedby,sellername,address:{street,state,city,pincode}}
            console.warn(item)
            
           let result=await fetch("http://localhost:8703/farmer/crop/update/"+id,{
            method:'PUT',
            body:JSON.stringify(item),

            headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
            }
  

            })
            result= await  result.json()     
            
            history.push("/farmermain/"+farid)
        
        }


            
            
       
        const backtomain=()=>{

          history.push("/farmermain")
     }


    return (   
         
      <div>
          <div id="one" onClick={()=>backtomain}>Update Here</div>
        <div className="col-sm-6 offset-sm-3 " id="two" >
        
            <br></br>
            <div>
            <input type="text" onChange={(e)=>setCropName(e.target.value)}   value={crop_name}  class="form-control " placeholder="crop name"     id="name" required></input>
          
            </div>
            <br></br>
        
            <input type="text" onChange={(e)=>setQuantity(e.target.value)}  value={quantity}class="form-control" placeholder="Quantity" required ></input>
        
            
            <br></br>
            <input type="text" onChange={(e)=>setSellinPrice(e.target.value)} value={selling_price} className="form-control" placeholder="Selling Prce in Rs" required></input>
             

            <br></br>
            <input type="text" onChange={(e)=>setTotal(e.target.value)} value={total} className="form-control" placeholder="Total" required></input>
            <br></br>
            <button onClick={Register} class="btn btn-primary">Update</button>
    
          </div>
          <ToastContainer />
      </div>   
    )
}

export default EditCrop

