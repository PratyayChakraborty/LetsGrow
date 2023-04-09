import React from 'react';
import DiscountDiv2 from '../Components/Discount/Discountdiv2';
import DiscountDiv3 from '../Components/Discount/Discountdiv3';
import DiscountDiv4 from '../Components/Discount/Discountdiv4';
import { Box, Flex } from "@chakra-ui/react"
const Discount = () => {
  return (
    <Box  className='container' margin={"auto"}>
      <Flex margin={"auto"} marginTop={"30px"} textAlign="center" color={"whatsapp.300"} borderLeft={"1px solid white"} borderBottom={"6px solid violet"} borderRight={"3px solid white"} borderRadius={"10px 300px 100px 0px"} className='container'><h1  >Discounts</h1></Flex>
      <DiscountDiv2 />
      <DiscountDiv3 />
      <DiscountDiv4 />
    </Box>
  )
}

export default Discount