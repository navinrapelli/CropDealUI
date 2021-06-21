import React,{useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom'
import ViewCrop from '../Farmer/ViewCrop'
function DealerMain() {

      const[dealer,setdelaer]=useState([]);
    

       useEffect(()=>{
           
      
        
        fetchdealer();

       },[]);


       const fetchdealer= async()=>{

        const response=await fetch("http://localhost:8702/dealer/202")
        const data=await response.json();
        setdelaer([data]);
        console.log(data);


};


       const deletedealer=(id)=>
       {    
                    
               console.warn(id);
           fetch("http://localhost:8702/dealer/"+id,{
              method:'DELETE',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
    
  
              })
   
           }
                    
         
                                          
    
    return ( 
        <Router>
        <div class="bg-lightblue" className="main" >    
              <div id="header"> <h1>Welcome, {dealer.map(on=>on.dealername)}</h1> </div>    
             <br></br>
             <div id="main1">
             {dealer.map(deal=><div class="container bg-light text-dark" id="farmer" >
                                            <div class="col" className="na">
                                            <h2>Personal Details</h2>
                                    <div class="col"><strong>Name: </strong><span>{deal.dealername}</span></div>
                                    <div class="col"><strong>Email: </strong><span>{deal.dealermail}</span></div>
                                    <div class="col"><strong>Contact No : </strong><span>{deal.dealercontactno}</span></div>
                                    <div class="row"></div>
                                </div> 
                                 <br></br>
                                <div class="col" className="na">
                                            <h2>Bank Details</h2>
                                    <div class="col"><strong>Account Number: </strong><span>{farm.farmerbankdeatils.account_number}</span></div>
                                    <div class="col"><strong>Bank Name: </strong><span>{farm.farmerbankdeatils.bank_name}</span></div>
                                    <div class="col"><strong>IFSC Code  : </strong><span>{farm.farmerbankdeatils.ifsc_code}</span></div>
                                
                                </div> 
                                
                              

                             </div> 
                             
                             )} 
                   <br></br>
<div id="one">
             <NavLink to="/add" activeStyle={{backgroundColor:"lightblue",color:"black"}} >ADD Crop </NavLink>
            <NavLink to="/view" activeStyle={{backgroundColor:"lightblue",color:"black"}}>View Crop</NavLink>
            <NavLink to="/edit" activeStyle={{backgroundColor:"lightblue",color:"black"}}>Edit Crop</NavLink>
            </div>

            <div id="two">
            <Route  path="/add" exact render={()=>
                        {

                        return <CropAdd name={farmer}/>
                        }} />
             <Route path="/view" exact render={()=>
                        {

                        return    <ViewCrop name={farmer}/>               //<h1> You Select <span>PROJECTS</span> </h1>
                       
                        }}/>
            <Route path="/edit" exact render={()=>
                        {

                        return <EditCrop/>
                        }}/>
            </div>
            </div>
    </div>
    </Router>                          

                        
           
                             
                    
    
    )
}

export default DealerMain
