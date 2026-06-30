import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const API = import.meta.env.VITE_API

const Login = () => {
   
    const [email,setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit =async (e)=>{
e.preventDefault()
const response = await fetch (`${API}/api/user/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {email,password}
    )
})
const data = await response.json()
if (response.ok) {
    console.log(data);
  
    setemail("");
    setpassword("");
    navigate('/welcome')
  } else {
    console.log(data.message);
  }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <label>Email</label>
            <input type = "text" value= {email} onChange = {(e)=>setemail(e.target.value) }/>
            <label>Password</label>
            <input type = 'text' value = {password} onChange ={(e)=> setpassword(e.target.value)}/>
            <button type='submit'>LOGIN</button>
        </form>
        <p> Don't have the account ? <Link to ='/signup'> Signup</Link> </p>
    </div>
  )
}

export default Login