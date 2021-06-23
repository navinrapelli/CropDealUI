import React,{useState} from 'react'


import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CropAdd(props) {

      const[crop_name,setCropName]=useState("");
      const[quantity,setQuantity]=useState(0);
      const[selling_price,setSellinPrice]=useState(0);
      const[total,setTotal]=useState(0); 
       let  id=props.name.map(farm=>farm.id)

       

       console.warn(id[0]);
        //  let id=nav[0].id;
      async function Register()
       {   
            
               
            let item={crop_name,quantity,selling_price,total}
            console.warn(item)
           let result=await fetch("http://localhost:8703/farmer/crop/add/"+id[0],{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
            }
  

            })

            toast.success("Successfully Added Crop")
            result= await  result.json()          
            console.warn("result",result)
        }


            
            
       



    return (   
         
        
        <div className="col-sm-6 offset-sm-3 " >
        
            <br></br>
            <div>
            <input type="text" onChange={(e)=>setCropName(e.target.value)}     class="form-control " placeholder="Crop Name" id="name" required></input>
          
            </div>
            <br></br>
        
            <input type="text" onChange={(e)=>setQuantity(e.target.value)} class="form-control" placeholder="Quantity" required ></input>
        
            
            <br></br>
            <input type="text" onChange={(e)=>setSellinPrice(e.target.value)} className="form-control" placeholder="Selling Prce in Rs" required></input>
             

            <br></br>
            <input type="text" onChange={(e)=>setTotal(e.target.value)} className="form-control" placeholder="Total" required></input>
            <br></br>
            <button onClick={Register} class="btn btn-primary">ADD</button>
    
            <ToastContainer />
          </div>
          
    )
}

export default CropAdd
