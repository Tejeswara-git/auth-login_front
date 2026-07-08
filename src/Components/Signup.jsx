import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
const API = 'http://localhost:5000' || import.meta.env.VITE_API

const Signup = () => {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()

        try {
            const response = await fetch(`${API}/api/user/register`, {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    username, email, password
                })
            })
            const data = await response.json()

            if(response.ok){
                console.log("User Registered");
                setusername("");
                setemail("");
                setpassword("");
                navigate('/login')
            } else {
                console.log(data.message);
                alert(data.message || 'Signup failed. Please try again.')
            }
        } catch (error) {
            console.error('Network error:', error)
            alert('Could not connect to server. Please try again.')
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