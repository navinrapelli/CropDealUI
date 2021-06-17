import React,{useState,useEffect} from 'react'

function ViewCrop(props) {

      const[crop,setCrop]=useState([]);
      let  id=props.name.map(farm=>farm.id)

       

       console.warn(id[0]);

       useEffect(()=>{
           
        const fetchCrops= async()=>{

                 const response=await fetch("http://localhost:8703/farmer/crop/"+id[0])
                 const data=await response.json();
                 setCrop(data);
                 console.log(data);


        };

        
        fetchCrops();

       },[]);

     
       const deletecrop=(id)=>
       {    
                    
               console.warn(id);
           fetch("http://localhost:8703/farmer/crop/delete/"+id,{
              method:'DELETE',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
    
  
              })
   
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
                             
                    
        </div>
    )
}

export default ViewCrop
