import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Routes,Route, Navigate} from  'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  

  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}></Route>  
          <Route path='/course' element={authUser ? <Courses/> : <Navigate to='/signup'/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default App
