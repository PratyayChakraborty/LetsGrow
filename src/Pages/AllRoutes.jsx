import React from 'react'


import Home from './Home';
import { Route, Routes } from 'react-router-dom'
import Service from './Service';
import Discount from './Discount';
import New_order from "../Components/After LogIn/New_order/New_order"
import SlidBar from "../Components/SlidBar/SlidBar"
import Orders from '../Components/After LogIn/Orders/Orders';
import Tickets from '../Components/After LogIn/Tickets/Tickets';
import Account from '../Components/After LogIn/Account/Account';
import Payment from '../Components/After LogIn/Payment/Payment';
import Chat_Button from '../Components/Chat_Button/Chat_Button';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
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
