import React,{useState,useEffect} from 'react'

function FarmerDisplay() {

      const[farmer,setFarmer]=useState([]);
     // [id,deletewithid]=useState(false);
    
        
    
    

       useEffect(()=>{
        
        const fetchfarmers= async()=>{

                 const response=await fetch("http://localhost:8701/admin/farmer/")
                 const data=await response.json();
                 setFarmer(data);
                 console.log(data);


        };

        
        fetchfarmers();

        
    
       },[]);

       const deletewithid=(id)=>
       {   
           
            
          console.warn(id);
           fetch("http://localhost:8701/admin/farmer/delete/"+id,{
              method:'DELETE',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
       })
       }
     
   
     
 
   
    

    return (
        <div class="bg-lightblue"  >    <h1>Farmers Information</h1>
             
               
             {farmer.map(farm=><div class="container bg-light text-dark" >
                                            <div class="row">
                                    <div class="col"><strong>Name:  </strong>{farm.farmername}</div>
                                    <div class="col"><strong>Email: </strong>{farm.farmeremail}</div>
                                    <div class="col"><strong>Contact No : </strong>{farm.farmercontactno}</div>
                                </div> 
                                <div class="row">
                                    <div class="col"><strong>Street: </strong>{farm.farmeraddress.street}</div>
                                    <div class="col"><strong>State: </strong>{farm.farmeraddress.state}</div>
                                    <div class="col"><strong>City: </strong>{farm.farmeraddress.city}</div>
                                    <div class="col"><strong>Pincode: </strong>{farm.farmeraddress.pincode}</div>
                                    <div class="col"> <button class="btn btn-primary" onClick={()=>deletewithid(farm.id)}>Delete</button> </div>            
                              </div> <br></br><hr></hr>        

                             </div> 
                             
                             )}
                             
                    
        </div>
    )
}

export default FarmerDisplay
