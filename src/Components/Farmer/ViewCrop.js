import React,{useState,useEffect} from 'react'
import EditCrop from './EditCrop'

import {BrowserRouter as Router,NavLink,Link,Switch,Route,useHistory} from 'react-router-dom'

import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ViewCrop(props) {

      const[crop,setCrop]=useState([]);
      let history=useHistory();
      let  id=props.name.map(farm=>farm.id)

       

       console.warn(id[0]);

       useEffect(()=>{
           
    
        
        fetchCrops();
        

       },[]);


       const fetchCrops= async()=>{

        const response=await fetch("http://localhost:8703/farmer/crop/"+id[0])
        const data=await response.json();
        setCrop(data);
        console.log(data);


           };            






     
       const deletecrop= (id)=>
       {    
                    
               console.warn(id);
           fetch("http://localhost:8703/farmer/crop/delete/"+id,{
              method:'DELETE',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
    
  
              })
              fetchCrops();
                    
              
   
           }

           const editcrop=(id,farid)=>{

              console.warn(id,farid);

              history.push("/farmermain/edituser/"+id+"/"+farid)
               
              
             
           }

 



    return (
        
                             
      
    <Router>
        <div class="bg-lightblue"  >    <h1>Crops Information</h1>
             
            {crop.map(crops=><div class="container bg-light text-dark" key={crops.id}>
                                            <div class="row">
                                    <div class="col"><strong>Crop Name : </strong>{crops.crop_name}</div>
                                    <div class="col"><strong>Quantity : </strong>{crops.quantity}</div>
                                    <div class="col"><strong>Selling Price : </strong>{crops.selling_price}</div>
                                </div> 
                                <br></br>
                                <div class="row">
                                    <div class="col"><strong>Total Price : </strong>{crops.total}</div>
                                    <div class="col"><strong>:Farmer id :</strong>{crops.uplodedby }</div>
                                    <div class="col"><strong>Farmer Name : </strong>{crops.sellername}</div>
                                    <div class="col"> <button class="btn btn-primary" onClick={()=>deletecrop(crops.id)}>Delete</button> </div>
                                    <div class="col"> <button class="btn btn-primary" onClick={()=>editcrop(crops.id,crops.uplodedby)}>Edit</button> </div>            
            
                                </div> <br></br><hr></hr>        

                             </div> 
                             
                             )}

<ToastContainer />
                
                    
        </div>
        </Router>
        
        
    )
}

export default ViewCrop
