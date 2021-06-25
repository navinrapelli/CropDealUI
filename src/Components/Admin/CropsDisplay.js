import React,{useState,useEffect} from 'react'

import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CropsDisplay() {

      const[crop,setCrop]=useState([]);
    

       useEffect(()=>{
           
        

        
        fetchCrops();

       },[]);

             
       const fetchCrops= async()=>{

        const response=await fetch("http://localhost:8701/admin/crop/")
        const data=await response.json();
        setCrop(data);
        console.log(data);


           };







     
       const deletecrop=(id)=>
       {    
                    
               console.warn(id);
           fetch("http://localhost:8701/admin/crop/delete/"+id,{
              method:'DELETE',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
    
  
              })
                  
              fetchCrops();
              toast.success("Deleted Crop with id="+id);
           }
 



    return (
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
                                </div> <br></br><hr></hr>        

                             </div> 
                             
                             )}
                             
                             <ToastContainer /> 
        </div>
    )
}

export default CropsDisplay
