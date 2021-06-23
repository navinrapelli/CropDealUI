import React from 'react'
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router,NavLink,useHistory} from 'react-router-dom'
import './Router12.css'
import FarmerDisplay from './FarmerDisplay'
import CropsDisplay from './CropsDisplay'
import DealerDisplay from './DealerDisplay'
import admin from './admin.jpg'



function AdminMain() {

    let history=useHistory();

    const singout=()=>{
            
           history.push("/home")
    }


    return (
        <Router>
        <div className="link1">
            
            

            <div id="one">
             <NavLink to="/admin/home" activeStyle={{backgroundColor:"lightblue"}} >HOME </NavLink>
            <NavLink to="/admin/farmers" activeStyle={{backgroundColor:"lightblue"}}>Farmers</NavLink>
            <NavLink to="/admin/crops" activeStyle={{backgroundColor:"lightblue"}}>Crops</NavLink>
            <NavLink to="/admin/dealer" activeStyle={{backgroundColor:"lightblue"}}>Dealers</NavLink>
             <button onClick={singout} className="btn-primary" >Sign out</button>
            </div>
    
            <div id="two">
            <Route  path="/admin/home" exact render={()=>
                        {

                        return <div className="ad">
                                  <h1>Hello Navin</h1>
                                  <img src={admin} alt=""></img>
                        </div>
                        }} />
             <Route path="/admin/farmers" exact render={()=>
                        {

                        return    <FarmerDisplay/>                   //<h1> You Select <span>PROJECTS</span> </h1>
                       
                        }}/>
            <Route path="/admin/crops" exact render={()=>
                        {

                        return <CropsDisplay/>
                        }}/>
            <Route path="/admin/dealer" exact render={()=>
                        {

                        return <DealerDisplay/>
                        }}/>
            </div>
        </div>
        </Router>
    )
}

export default AdminMain

