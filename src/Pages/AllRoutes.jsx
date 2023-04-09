import React from 'react'


import Home from './Home';
import { Route, Routes } from 'react-router-dom'
import Service from './Service';
import Discount from './Discount';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/discount" element={<Discount />}></Route>
      <Route path="/service" element={<Service />}></Route>
    </Routes>
  )
}

export default AllRoutes