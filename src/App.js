import React from 'react'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import {
  Routes,
  Route
} from "react-router-dom";

const App = () => {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>


    </div>
  )
}

export default App; 