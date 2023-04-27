import React from 'react'


import Home from './Home';
import { Route, Routes } from 'react-router-dom'
import Service from './Service';
import Discount from './Discount';
import New_order from "../Components/After LogIn/New_order/New_order"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/discount" element={<Discount />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/New_order" element={<New_order />}></Route>

    </Routes>
  )
}

export default AllRoutes
