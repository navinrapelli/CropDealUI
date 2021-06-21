import React,{useState,useEffect} from 'react'
import './DR.css'

function CropsDisplayDe() {

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
                                                <div class="col"> <button class="btn btn-primary" onClick={()=>deletecrop(crops.id)}>SubScribe</button> </div>            
                                            </div> <br></br><hr></hr>        
                                 
                                     </div> 
                             </div>
                             
                             )}



                             
                    
        </div>
    )
}

export default CropsDisplayDe
