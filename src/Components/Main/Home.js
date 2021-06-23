import React from 'react'
import './Home.css'
import farmer from './farmer.logo.jpg'
import delaer from './delaer2.jpg'

import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'

function Home() {
    return (
        <div id="main">
                 <nav class="navbar navbar-expand-lg navbar-white">
  <div class="container-fluid">
          
      <img src={farmer} alt="" width="80" height="80"></img>
    
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-3 mb-lg-4" id="one">
        <li class="nav-item">
          
          <Link to="/loginadmin"  > Admin</Link>
  
        </li>
        <li class="nav-item c-white">
        <Link to="/loginfarmer/45" > Farmer</Link>
        </li>
        <li class="nav-item">
        <Link to="/dealermain" > Dealer</Link>
        </li>
      </ul>
      <span id="crop">
        <h1>Crop Deal</h1>
      </span>
    </div>
  </div>
</nav>
                 
                 <img id="del"   src={delaer} alt=""></img>
                 <br></br>
                 
                 <p>@Crop Deal All rights are reserved.</p>
                  
        </div>
    )
}

export default Home
