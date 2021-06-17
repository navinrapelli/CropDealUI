import React,{useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom'
import './farmermain.css'
import CropAdd from '../Farmer/CropAdd'
import ViewCrop from '../Farmer/ViewCrop'

function FarmerMain() {

      const[farmer,setfarmer]=useState([]);
    

       useEffect(()=>{
           
        const fetchCrops= async()=>{

                 const response=await fetch("http://localhost:8703/farmer/105")
                 const data=await response.json();
                 setfarmer([data]);
                 console.log(data);


        };

        
        fetchCrops();

       },[]);

       const deletefarmer=(id)=>
       {    
                    
               console.warn(id);
           fetch("http://localhost:8701/admin/crop/delete/"+id,{
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
              <div id="header"> <h1>Welcome, {farmer.map(on=>on.farmername)}</h1> </div>    
             <br></br>
             {farmer.map(farm=><div class="container bg-light text-dark" className="" >
                                            <div class="col" className="na">
                                            <h2>Personal Details</h2>
                                    <div class="col"><strong>Name: </strong><span>{farm.farmername}</span></div>
                                    <div class="col"><strong>Email: </strong><span>{farm.farmeremail}</span></div>
                                    <div class="col"><strong>Contact No : </strong><span>{farm.farmercontactno}</span></div>
                                    <div class="row"></div>
                                </div> 
                                 <br></br><hr></hr>
                                <div class="col" className="na">
                                            <h2>Address</h2>
                                    <div class="col"><strong>Street: </strong><span>{farm.farmeraddress.street}</span></div>
                                    <div class="col"><strong>State: </strong><span>{farm.farmeraddress.state}</span></div>
                                    <div class="col"><strong>City  : </strong><span>{farm.farmeraddress.city}</span></div>
                                    <div class="col"><strong>Pincode  : </strong><span>{farm.farmeraddress.pincode}</span></div>
                                    <div class="row"></div>
                                </div> 
                                <br></br><hr></hr>
                                <div class="col" className="na">
                                            <h2>BankDetails</h2>
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

                        return <h1>Edit crop</h1>
                        }}/>
            </div>
    </div>
    </Router>                          

                        
           
                             
                    
    
    )
}

export default FarmerMain
