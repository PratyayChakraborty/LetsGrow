import React from 'react'


import Home from './Home';
import { Route, Routes } from 'react-router-dom'
import Service from './Service';
import Discount from './Discount';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/discount" element={<Discount />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/New_order" element={<New_order />}></Route>
      <Route path="/SlidBar" element={<SlidBar />}></Route>
      <Route path="/Orders" element={<Orders />}></Route>
      <Route path="/Tickets" element={<Tickets />}></Route>
      <Route path="/Account" element={<Account />}></Route>
      <Route path="/Payment" element={<Payment />}></Route>
      <Route path="/Chat_Button" element={<Chat_Button />}></Route>





    </Routes>
  )
}

export default AllRoutes
