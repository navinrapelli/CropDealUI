import React,{useState,useEffect} from 'react'
import {useParams} from  'react-router-dom'
import {BrowserRouter as Router,Link,NavLink,Route,useHistory} from 'react-router-dom'
import './DR.css'
import CropsDisplayDe from './CropsDisplayDe'
function DealerMain() {

      const[dealer,setdelaer]=useState([]);
      let history=useHistory();
    

       useEffect(()=>{
           
      
        
        fetchdealer();

       },[]);


       const fetchdealer= async()=>{

        const response=await fetch("http://localhost:8702/dealer/203")
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

           const editdealer=(id)=>{

               

            history.push("/editdealer/"+id)


         }

                 
        const  signout=()=>{

            history.push("/home")
          }
                    
         
                                          
    
    return ( 
        <Router>
            <div className="navin">
            <div id="header"> <h1>Welcome, {dealer.map(on=>on.dealername)}</h1> 
             <div id="navv">
              <span><NavLink to="/home" activeStyle={{backgroundColor:"Black",color:"white"}} >Personal Details </NavLink></span>
               <span><NavLink to="/crops" activeStyle={{backgroundColor:"Black",color:"white"}}>Crops</NavLink></span> 
            </div>
            <div>    <button class="btn btn-primary " onClick={()=>editdealer(dealer.map(ind=>ind.id))} >Update</button>
              <button class="btn btn-primary " onClick={()=>deletedealer(dealer.map(ind=>ind.id))} >Delete</button>
              <button class="btn btn-primary" onClick={signout}>Sign Out</button>
              </div>
              </div>
              
            
            
              <Route  path="/home" exact render={()=>
                        {

                        
                       return(

                        <div class="bg-lightblue" className="main" >    
                        <br></br>
                        <div id="main1">
                        {dealer.map(deal=><div class="container bg-light text-dark" id="dealer" >
                                                   <div class="col" className="na">
                                                       <h2>Personal Details</h2>
                                                           <div class="col"><strong>Name: </strong><span>{deal.dealername}</span></div>
                                                           <div class="col"><strong>Email: </strong><span>{deal.dealeremail}</span></div>
                                                           <div class="col"><strong>Contact No : </strong><span>{deal.dealercontactno}</span></div>
                                                           <div class="row"></div>
                                                  </div> 
                                                         <br></br><hr></hr>
                                                  <div class="col" className="na">
                                                       <h2>Bank Details</h2>
                                                       <div class="col"><strong>Account Number:</strong><span>{deal.dealerbankdeatils.account_number}</span></div>
                                                       <div class="col"><strong>Bank Name: </strong><span>{deal.dealerbankdeatils.bank_name}</span></div>
                                                       <div class="col"><strong>IFSC Code  : </strong><span>{deal.dealerbankdeatils.ifsc_code}</span></div>
                                                 </div> 
                                          </div> 
                                        )}
                             </div>
               </div>

                       ) 
                       
                       }} />
          <Route path="/crops" exact render={()=>
                        {

                        return    <CropsDisplayDe delid={dealer.map(ind=>ind.id)}/>//<h1> You Select <span>PROJECTS</span> </h1>
                       
                        }}/>
          
          







            </div>    
     
    </Router>                          

                        
           
                             
                    
    
    )
}

export default DealerMain
