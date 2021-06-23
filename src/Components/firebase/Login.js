import React,{useState,useEffect} from 'react'

import {BrowserRouter as Router,Link,NavLink,Route,useHistory,useParams} from 'react-router-dom'
import { auth } from './FireBase';
import './login.css'


import { ToastContainer, toast,position } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginUser() {


    let history=useHistory();

    const[email,setemail]=useState("");
    const[password,setPass]=useState("");


    const login=(e)=>{

            
            e.preventDefault();
            auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                 
        toast.success("sign in sucessfully")
                history.push("/admin")

            })
            .catch((e)=>
            toast.error(e.message));
    }


    const register=(e)=>{
                
            e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{


        })

         .catch((e)=>alert(e.message));

    }
    
    return (
        <div className="login"> 
                      <div id="header"><h2>Sign in</h2></div>
                    <div>
            <div id="login_container" class="col-sm-6 offset-sm-3 " >
              <br></br>   
            <input type="text" onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="Email" required></input>
             

            <br></br>
            <input type="password" onChange={(e)=>setPass(e.target.value)} className="form-control" placeholder="Password" required></input>
            <br></br>
            <button class="btn btn-primary" onClick={login}>Sign in</button>
            <br></br>
            <br></br>
            <button class="btn btn-primary" onClick={register}>Create Account</button>
            </div>
            

            </div>
            <ToastContainer />
        </div>
    )
}

export default LoginUser
