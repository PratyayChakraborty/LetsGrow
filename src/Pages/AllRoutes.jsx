import React from 'react'


import Home from './Home';
import { Route, Routes } from 'react-router-dom'
import Service from './Service';
import Discount from './Discount';
import SignUp from '../Components/Navbar/Signup';
import Login from '../Components/Navbar/Login';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/discount" element={<Discount />}></Route>
      <Route path="/service" element={<Service />}></Route>
    </Routes>
  )
}

export default AllRoutes
