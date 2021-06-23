import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'
import './farmermain.css'
import CropAdd from './CropAdd'
import ViewCrop from './ViewCrop'
import EditCrop from './EditCrop'
import FarmerRegister from './FarmerRegister'
import UpdateFarmer from './UpdateFarmer'
import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FarmerMain() {

      const[farmer,setfarmer]=useState([]);
      const[msg,setmsg]=useState([]);
      let history=useHistory();
      let{id}=useParams();
    
    

       useEffect(()=>{     
        fetchCrops();
        getmsg();

       },[]);

       const fetchCrops= async()=>{

        const response=await fetch("http://localhost:8703/farmer/"+id)
        const data=await response.json();
        setfarmer([data]);
        console.log(data);


         };

         const getmsg=async()=>{

             
        const response=await fetch("http://localhost:8703/farmer/msg/"+id)
        const data=await response.json();
         setmsg(data);
         console.log(data);
      

         }

       const deletefarmer= (id)=>
       {     
                console.warn("nav")
              
               console.warn(id[0]);
           fetch("http://localhost:8703/farmer/delete/"+id[0],{
              method:'DELETE',
              headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
              }
    
             
  
              })
        
            fetchCrops();

   
           }

          const editfarmer=(id)=>{

               

             history.push("/editfarmer/"+id)


          }
           
        const  signout=()=>{

           toast.success("Succesfuly Signout")
          history.push("/home")
        }
              
         console.warn(msg);
         console.warn(msg.dealer_name);
                                          
    
    return ( 

        <Router>
        
        <div class="bg-lightblue" className="main" >    
              <div id="header"> <h1>Welcome, {farmer.map(on=>on.farmername)}</h1> 
              <div>    <button class="btn btn-primary " onClick={()=>editfarmer(farmer.map(ind=>ind.id))}>Update</button>
              <button class="btn btn-primary " onClick={()=>deletefarmer(farmer.map(ind=>ind.id))}>Delete</button>
              <button class="btn btn-primary" onClick={signout}>Sign Out</button>
              </div>
                </div>    
             <br></br>
             <div id="main1">
             {farmer.map(farm=><div class="container bg-light text-dark" id="farmer" >
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
                                            <h2>Bank Details</h2>
                                    <div class="col"><strong>Account Number: </strong><span>{farm.farmerbankdeatils.account_number}</span></div>
                                    <div class="col"><strong>Bank Name: </strong><span>{farm.farmerbankdeatils.bank_name}</span></div>
                                    <div class="col"><strong>IFSC Code  : </strong><span>{farm.farmerbankdeatils.ifsc_code}</span></div>
                                
                                </div> 
                                
                              

                             </div> 
                             
                             )} 
                   <br></br>
<div id="one">
             <NavLink to="/add" activeStyle={{backgroundColor:"lightblue",color:"white"}} >ADD Crop </NavLink>
            <NavLink to="/view" activeStyle={{backgroundColor:"lightblue",color:"white"}}>View Crop</NavLink>
            <NavLink to="/msg" activeStyle={{backgroundColor:"lightblue",color:"white"}}>Messages</NavLink>
            
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
            <Route path="/msg" exact render={()=>                                    
                        {

                        return    <div>
                               <p><strong>SubScriber id:</strong>      {msg.dealer_id}</p>
                               <p><strong>SubScriber name:</strong>    {msg.dealer_name}</p>
                               <p> <strong>SubScriber number:</strong> {msg.dealer_No}</p>
                               <p> <strong>SubScriber message:</strong> {msg.message}</p>


                        </div>        //<h1> You Select <span>PROJECTS</span> </h1>
                       
                        }}/>


            
            </div>
        
            </div>
            <ToastContainer />
    </div>
   

    </Router>        
           
                             
                    
    
    )
}

export default FarmerMain
