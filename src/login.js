import React, { useEffect,useState } from "react";
import './login.css'
import cyclist from './cyclist.jpg'

function Login() {
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("");
    const handleSubmit=()=>{
        const data ={
            email:email,
            password:password
        }
        alert (JSON.stringify(data))
    }

return(
   <div className="holder">
    <div className="Eddie"> 
    <p><span>EddieShop</span></p>
    <p className="SignUp">Don't have an account ?<span>SignUp</span></p>
    </div>
  
   <h1>Welcome</h1>
   <div className="details">
    <form onSubmit={handleSubmit}>
        <div className="inputs">
            <label className="email">Your Email
            <input type = "email" name="emailAddress" placeholder="name@domain.com" 
             value={email}
            onChange ={(e)=>{setEmail(e.target.value)}}
            />
            </label>
        </div>
        <div className="inputs">
            <label >Password
            <br/>
            <br/>
            <input type = "password" name="password" placeholder="at least 8 characters" value={password}
            onChange ={(e)=>{setPassword(e.target.value)}}/>
            
            </label>
        </div>
        <div className="checkbox">
            <label > 
               <input type = "checkbox" name="text"/>
               Keep me logged in
          </label>
            <label className="forgot">ForgotPassword?</label>
        </div>
        <div > 
            <button type ="login">Login</button>
        </div>
        <img src= {cyclist} alt="cycling gal" className="gal"/>
        <p>_____________________or_______________________</p>
        
        <div  className="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-instagram"></i>

        </div>
        
    </form>

   </div>
   </div> 
)
}
export default Login
