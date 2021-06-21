import React from 'react'
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router,NavLink,} from 'react-router-dom'
import './Router12.css'
import FarmerDisplay from './FarmerDisplay'
import CropsDisplay from './CropsDisplay'
import DealerDisplay from './DealerDisplay'



function AdminMain() {
    return (
        <Router>
        <div className="link1">
            
            

            <div id="one">
             <NavLink to="/home" activeStyle={{backgroundColor:"lightgreen",}} >HOME </NavLink>
            <NavLink to="/farmers" activeStyle={{backgroundColor:"lightgreen"}}>Farmers</NavLink>
            <NavLink to="/crops" activeStyle={{backgroundColor:"lightgreen"}}>Crops</NavLink>
            <NavLink to="/dealer" activeStyle={{backgroundColor:"lightgreen"}}>Dealers</NavLink>
            </div>
    
            <div id="two">
            <Route  path="/home" exact render={()=>
                        {

                        return <h1>Hello Admin</h1>
                        }} />
             <Route path="/farmers" exact render={()=>
                        {

                        return    <FarmerDisplay/>                   //<h1> You Select <span>PROJECTS</span> </h1>
                       
                        }}/>
            <Route path="/crops" exact render={()=>
                        {

                        return <CropsDisplay/>
                        }}/>
            <Route path="/dealer" exact render={()=>
                        {

                        return <DealerDisplay/>
                        }}/>
            </div>
        </div>
        </Router>
    )
}

export default AdminMain

