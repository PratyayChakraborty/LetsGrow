import React, { useEffect } from 'react';
import DiscountDiv2 from '../Components/Discount/Discountdiv2';
import DiscountDiv3 from '../Components/Discount/Discountdiv3';
import DiscountDiv4 from '../Components/Discount/Discountdiv4';
import { Box, Flex, Heading } from "@chakra-ui/react"
const Discount = () => {
  const [pageData, setPageData] = React.useState([]);

  useEffect(() => {
    fetch(`https://gleaming-plum-long-johns.cyclic.app/discount`)
      .then((res) => res.json())
      .then((data) => {
        setPageData(data.data);
        // console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box  className='container' margin={"auto"}>
      <Flex margin={"auto"} marginTop={"30px"} textAlign="center" color={"whatsapp.300"} borderLeft={"1px solid white"} borderBottom={"6px solid violet"} borderRight={"3px solid white"} borderRadius={"10px 300px 100px 0px"} className='container'><h1  >Discounts</h1></Flex>
      {pageData.length === 0 ? (
  <Heading
    padding={"250px 0px 0px 40px"}
    textAlign="center"
    color="#FF7135"
    as="h2"
    size="xl"
  >
    {`Loading..........`}
  </Heading>
) : (
  pageData.length % 2 === 0 ? (
    pageData.map((ele) => (
      <DiscountDiv2 key={ele._id} discount={ele.discountName} type={ele.type}/>
    ))
  ) : (
    pageData.map((ele) => (
      <DiscountDiv3 key={ele._id} discount={ele.discountName} type={ele.type}/>
    ))
  )
)}
      {/* // <DiscountDiv2 />
      // <DiscountDiv3 /> */}
     
    </Box>
  )
}

export default Discount