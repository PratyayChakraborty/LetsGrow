import React from 'react'
import {
  Box, Heading, Text, Button, Flex, Image, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormLabel,
  FormControl,
  ButtonGroup,
  Wrap, WrapItem,
  HStack, VStack,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Textarea,
} from '@chakra-ui/react'


const Tickets = () => {

  const tickets = [

  ]

  return (
    <>
      <VStack color="white" margin="20px" padding="10px">
        <Heading>Submit New Ticket</Heading>

        <VStack bg={"rgb(200,200,200,0.3)"} minWidth="250px" width={"90%"} padding="10px" gap={"20px"} borderRadius={"20px 5px"}>
          <FormControl >
            <FormLabel>Subject</FormLabel>
            <Select height="50" bg={"whiteAlpha.400"} color="black">
              <option value="" >OP1</option>
              <option value="" >OP1</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Order ID</FormLabel>
            <Input bg={"whiteAlpha.400"} color="black" ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Message (If Any)</FormLabel>
            <Textarea bg={"whiteAlpha.400"} color="black" ></Textarea>
          </FormControl>

          <Button bg={"blue.500"} style={{

          }} _hover={{
            background: "transparent",
            border: "1px solid rgb(100,120,220)",
            color:"blue.300",
          }}>Submit Ticket</Button>
        </VStack>
      </VStack>


      {/* Table */}

      <Box margin={"auto"} marginTop={"30px"} marginBottom={"30px"} borderTop="3px solid white" borderBottom="3px solid violet"
        borderRight={"5px solid white"} borderLeft={"6px solid violet"} borderRadius={"20px 5px 25px 3px"} color="white"
        width={"90%"}>
        <Heading>{ }</Heading>
        <TableContainer padding={"20px"} color="white" overflowWrap={"normal"}>
          <Table padding={"20px"} color="white">
            <Thead >
              <Th color="white">Ticket ID</Th>
              <Th color="white">Order ID</Th>
              <Th color="white" >Subject</Th>
              <Th color="white"> Message</Th>
              {/* <Th color="white"> Status</Th> */}

            </Thead>
            <Tbody color="white">
              {
                tickets.map((data) =>
                  <Tr key={data.id}>
                    <Td>{data.id}</Td>
                    <Td flexWrap={"wrap"}>{data.service}</Td>
                    <Td>{data.rate}</Td>
                    <Td>{data.minorder}</Td>
                    <Td>{data.maxorder}</Td>
                    <Td>{data.averagetime}</Td>
                    <Td>{data.desciption}</Td>

                  </Tr>
                )
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default Tickets
