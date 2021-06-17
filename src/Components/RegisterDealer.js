import React,{useState} from 'react'


function RegisterDealer() {

      const[dealername,setName]=useState("");
      const[dealeremail,setEmail]=useState("");
      const[dealerpassword,setPass]=useState("");
      const[dealercontactno,setNumber]=useState(""); 
      const[role,setRole]=useState("");
      const[errors,setErrors]=useState({});
    
    
      async function Register()
       {   
        
            let item={dealername,dealeremail,dealerpassword,dealercontactno,role}
            setErrors(validation(item))

                 if(validation(item)==null)
                 {
             console.warn(validation(item))
            console.warn(item)
           let result=await fetch("http://localhost:8702/dealer/add",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                  "Content-Type":'application/json',
                  "Accept":'application/json'
            }
  

            })
            result= await  result.json()          
            console.warn("result",result)}

            else{

                console.warn("fill the form nit")
            }

            
            
       }

       const validation=(item)=>{
           
        if(!item.dealername){
              console.warn("name is required")
            errors.dealername="Name is required"
        }
        if(!item.dealeremail){

            errors.dealeremail="Email is required"
        }else if(!/\S+@S+.\S+/.test(item.email))
        {
             errors.dealeremail="Email is invalid"
        }
        if(!item.dealerpassword){
            errors.dealerpassword="Password is required"
        } else if(item.dealerpassword.length<3)
        {
            errors.dealerpassword="Password Must be more than 3"
        }


       }


    return (   
         
        
        <div className="col-sm-6 offset-sm-3 " >
        
            <h1>Register here</h1>
            <div>
            <input type="text" onChange={(e)=>setName(e.target.value)}     class="form-control " placeholder="Name" id="name" required></input>
            {errors.dealername &&<p className="error">{errors.dealername}</p>}   
            </div>
            <br></br>
        
            <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" placeholder="Email" required ></input>
            {errors.dealeremail &&<p className="error">{errors.dealeremail}</p>} 
            
            <br></br>
            <input type="password" onChange={(e)=>setPass(e.target.value)} className="form-control" placeholder="Password" required></input>
            {errors.dealerpassword &&<p className="error">{errors.dealerpassword}</p>} 
            <br></br>
            <input type="text" onChange={(e)=>setNumber(e.target.value)} className="form-control" placeholder="Contatct No" required></input>
            <br></br>
            <input type="text" onChange={(e)=>setRole(e.target.value)} className="form-control" placeholder="Role" required></input>
            <br></br>
            <button onClick={Register} class="btn btn-primary">Register</button>
    
          </div>
          
    )
}

export default RegisterDealer
