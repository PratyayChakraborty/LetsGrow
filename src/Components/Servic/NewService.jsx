import React from "react";
import { Box, Button, Heading, Modal } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import ModalDdescription from "./description";
const NewService = (prop) => {
  const { allTypes } = prop;
  //   console.log(allTypes.alltypes);
  return (
    <Box
      margin={"auto"}
      marginTop={"30px"}
      marginBottom={"30px"}
      borderTop="3px solid white"
      borderBottom="3px solid violet"
      borderRight={"5px solid white"}
      borderLeft={"6px solid violet"}
      borderRadius={"20px 5px 50px 30px"}
      color="white"
      width={"90%"}
      key={prop.key}
    >
      <Heading>{prop.services}</Heading>
      <TableContainer padding={"20px"} color="white" overflowWrap={"normal"}>
        <Table padding={"20px"} color="white">
          <Thead>
            <Th color="white">ID</Th>
            <Th color="white" width="20%">
              Service
            </Th>
            <Th color="white"> Rate per 1000</Th>
            <Th color="white">Min order</Th>
            <Th color="white"> Max order</Th>
            <Th color="white">Average time</Th>
            <Th color="white"> Description</Th>
          </Thead>
          <Tbody color="white">
            {allTypes.alltypes.map((data) => (
              <Tr key={data._id}>
                <Td>{data._id}</Td>
                <Td flexWrap={"wrap"}>{data.subservices}</Td>
                <Td>{data.likesPrices}</Td>
                <Td>{data.minorder}</Td>
                <Td>{data.maxorder}</Td>
                <Td>{data.averageTime}</Td>
                <ModalDdescription sub={data.subservices}
                startTime={data.startTime} 
                speed={data.speed}
                refill={data.refill}
                quality={data.quality}
                props={data.props}
                key={data._id} />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NewService;
