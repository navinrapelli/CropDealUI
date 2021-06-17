import React,{useState,useEffect} from 'react'

function DealerDisplay() {

      const[dealer,setDealer]=useState([]);
      //const[id1,setID]=useState("");
    

       useEffect(()=>{
           
        const fetchdealers= async()=>{

                 const response=await fetch("http://localhost:8701/admin/dealer/")
                 const data=await response.json();
                 setDealer(data);
                 console.log(data);


        };

        
        fetchdealers();

       },[]);

     
       function deletedealer(id)
       {    
            console.warn(id)
              
           fetch('http://localhost:8701/admin/dealer/delete/'+id,{
              method:'DELETE',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
    
  
              })
   
           }
 



    return (
        <div class="bg-lightblue"  >    <h1>Dealers Information</h1>
             
            {dealer.map(deal=><div class="container bg-light text-dark" key={deal.id}>
                                            
                                            <div class="row">
                                                <br></br>
                                    <div class="col"><strong>Name: </strong>{deal.dealername}</div>
                                    <div class="col"><strong>Email: </strong>{deal.dealeremail}</div>
                                    <div class="col"><strong>Contact No : </strong>{deal.dealercontactno}</div>
                                </div> 
                                <br></br><hr></hr>
                                <div class="row">
                                    <h6>SubScribed Crop details</h6>
                                    <div class="col"><strong>Crop Name: </strong>{deal.dealersubcropdeatils.crop_name}</div>
                                    <div class="col"><strong> Farmer Name: </strong>{deal.dealersubcropdeatils.farmer_name }</div>
                                    <div class="col"> <button class="btn btn-primary" onClick={()=>deletedealer(deal.id)}>Delete</button> </div>            
                                </div> <hr></hr>        

                             </div> 
                             
                             )}
                             
                    
        </div>
    )
}

export default DealerDisplay

