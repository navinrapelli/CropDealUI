
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

import {BrowserRouter as Router,NavLink,Route} from 'react-router-dom'
import FarmerRegister from './Components/Farmer/FarmerRegister'
import UpdateFarmer from './Components/Farmer/UpdateFarmer';
import UpdateDealer from './Components/Dealer/UpdateDealer'
function App() {
  return (
  
    <Router>
    
    
    <div className="App">
       {/* <RegisterDealer/>   */}
      {/* {<FarmerDisplay/> */}
      {/* {<DealerDisplay/> */}
      {/* {<CropsDisplay/> */}
       {/* <AdminMain/>    */}
      {/* <CropAdd/> */}
             
        {/* <Home/> */}
         {/* <EditCrop/>  */}
          {/* <FarmerRegister/>  */}
         {/* <CropsDisplayDe/> */}
         {/* <FarmerMain1/> */}
         <UpdateDealer/>
        
        {/* <Route exact path="/farmermain"> 
           <FarmerView/>  
        </Route>
        <Route exact path="/farmermain/edituser/:id/:farid">
          <EditCrop/>                                                                          
        </Route>
         <Route exact path="/editfarmer/:id">
         <UpdateFarmer/>
        </Route> */}

    

    </div>
    
    
    </Router>
  );
}

export default App;
