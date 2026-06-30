import React from 'react'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Components/Welcome'
import Signup from './Components/Signup'


const App = () => {
  return (
    
      <Routes>
<Route path = '/welcome' element ={<Welcome/>}/>
<Route path = '/signup' element  ={<Signup/>}/>
<Route path = '/' element  ={<Signup/>}/>
<Route path = '/login' element  ={<Login/>}/>
      </Routes>
  
  )
}

export default App