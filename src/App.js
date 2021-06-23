
import './App.css';
import RegisterDealer from './Components/Dealer/RegisterDealer'
import FarmerDisplay from './Components/Admin/FarmerDisplay'
import DealerDisplay from './Components/Admin/DealerDisplay'
import CropsDisplay from './Components/Admin/CropsDisplay'
import AdminMain from  './Components/Admin/AdminMain'
import CropAdd from './Components/Farmer/CropAdd'
import FarmerView from './Components/Farmer/FarmerView'
import Home from './Components/Main/Home'
import EditCrop from './Components/Farmer/EditCrop'
import CropsDisplayDe from './Components/Dealer/CropsDisplayDe'

import {BrowserRouter as Router,NavLink,Route,useParams} from 'react-router-dom'
import FarmerRegister from './Components/Farmer/FarmerRegister'
import UpdateFarmer from './Components/Farmer/UpdateFarmer';
import UpdateDealer from './Components/Dealer/UpdateDealer'
import DealerMain from './Components/Dealer/DealerMain'
import Login from './Components/firebase/Login'
import LoginFarmer from './Components/Farmer/LoginFarmer'
function App() {


  
  return (
  
    <Router>
    
    
    <div className="App">
       {/* <RegisterDealer/>   */}
      {/* {<FarmerDisplay/> */}
      {/* {<DealerDisplay/> */}
      {/* {<CropsDisplay/> */}
       
      {/* <CropAdd/> */}
          {/* <DealerMain/> */}
       
         {/* <EditCrop/>  */}
          {/* <FarmerRegister/>  */}
          {/* <CropsDisplayDe/>  */}
         {/* <FarmerMain1/> */}
         {/* <UpdateDealer/> */}

         <Route exact path="/home">
               <Home/> 
         </Route>

              
         <Route exact path="/loginadmin">
          <Login/> 
        </Route>

      

        <Route exact path="/admin">
          <AdminMain/>   
        </Route>
               
                 <Route  path="/dealermain">
                   <DealerMain/>
               </Route>
               <Route exact path="/editdealer/:id">
                    <UpdateDealer/>
                </Route>  
        <Route exact path="/farmermain/:id">  
           <FarmerView/>  
        </Route>
        <Route exact path="/farmermain/edituser/:id/:farid">
          <EditCrop/>                                                                          
        </Route>
         <Route exact path="/editfarmer/:id">
         <UpdateFarmer/>
         </Route>  
         <Route exact path="/loginfarmer/:id1"> 
               <LoginFarmer/>
        </Route>
        <Route exact path="/farmerregistration">
          <FarmerRegister/>
        </Route>
        
    

    </div>
    
    
    </Router>
  );
}

export default App;
