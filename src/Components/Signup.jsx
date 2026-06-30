import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const API = import.meta.env.VITE_API

const Signup = () => {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const response = await fetch(`${API}/api/user/register`  , {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                username, email, password
            })
        
        })
        const data =await response.json()

if(response.ok){
    console.log("User Registered");
    setusername("");
    setemail("");
    setpassword("");

}
else{
    console.log(data.message);
}
    
    }



  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <label>Username</label>
            <input type = "text" value={username} onChange ={(e)=> setusername(e.target.value)}/>
            <label>Email</label>
            <input type = "text" value = {email} onChange ={(e)=> setemail(e.target.value)}/>
            <label>Password</label>
            <input type= "text" value = {password} onChange ={(e)=>setpassword(e.target.value)}/>
        <button type='submit'>SIGN UP</button>
        </form>
        <p> Already signedup ? <Link to = '/login'>LOGIN</Link></p>
    </div>
  )
}

export default Signup