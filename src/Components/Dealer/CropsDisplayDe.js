import React,{useState,useEffect} from 'react'
import './DR.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'

function CropsDisplayDe(props) {

      const[crop,setCrop]=useState([]);
      let history=useHistory();
     let delid=props.delid

     console.warn(delid[0])
       useEffect(()=>{
           
        

        
        fetchCrops();

       },[]);

             
       const fetchCrops= async()=>{

        const response=await fetch("http://localhost:8702/dealer/crops")
        const data=await response.json();
        setCrop(data);
        console.log(data);


           };


       const subscribe=(id)=>
       {    
                    
               console.warn(id);
           fetch("http://localhost:8702/dealer/crop/subscribe/"+delid[0]+"/"+id,{
              method:'POST',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
    
  
              })

              
            
             toast.success("Subscribe Successfully!");
      
              fetchCrops();
           }
 



    return (
        <div class="bg-lightblue" className="dealerdisplay_main"  >  
             
            {crop.map(crops=><div class="card" style={{width: "18rem"}} id="three">
                                     <div class="card-body" id="four">
                                            <div class="row">
                                                <div class="col"><strong>Crop Name </strong>{crops.crop_name}</div>
                                                <div class="col"><strong>Quantity </strong>{crops.quantity}</div>
                                                <div class="col"><strong>Selling Price  </strong>{crops.selling_price}</div>
                                            </div> 
                                         <br></br>
                                            <div class="row">
                                                <div class="col"><strong>Total Price  </strong>{crops.total}</div>
                                                <div class="col"><strong>:Farmer id </strong>{crops.uplodedby }</div>
                                                <div class="col"><strong>Farmer Name </strong>{crops.sellername}</div>
                                                <div class="col"> <button class="btn btn-primary" onClick={()=>{subscribe(crops.id)}}>SubScribe</button> </div>            
                                            </div> <br></br><hr></hr>        
                                 
                                     </div> 
                             </div>
                             
                             )}


         
               <ToastContainer />
                             
                    
        </div>
    )
}

export default CropsDisplayDe
