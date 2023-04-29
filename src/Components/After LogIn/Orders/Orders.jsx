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

import listx from "../../../assets/listx.png"
import pending3 from "../../../assets/pending3.png"
import progress2 from "../../../assets/progress2.png"
import done2 from "../../../assets/done2.png"
import Partial from "../../../assets/Partial.png"
import loading from "../../../assets/loading.png"
import cancle from "../../../assets/cancle.png"
import b1dd1b71c3e642298f948ae4058654 from "../../../assets/b1dd1b71c3e642298f948ae4058654.webp"



const Orders = () => {

    const orders = [

    ]

    return (
        <>
            <Box margin={"auto"} marginTop="30px" color={"white"} padding="20px">
                <Heading>View Orders</Heading>
                {/* searchbar */}
                <HStack border={"1px solid rgb(100,250,230)"} p={"10px"} borderRadius={"10px"}>
                    <Input type="search" placeholder="Search here" border={"none"}></Input>
                    <Button bg={"transparent"} border={"1px solid white"} _hover={{ color: 'rgb(100,250,230)', }}>Search</Button>
                    <Image></Image>
                </HStack>



                <VStack gap={"20px"} minHeight={"500px"} alignContent={"center"} marginTop={"20px"} bgImage={b1dd1b71c3e642298f948ae4058654}

                    style={{
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        justifyContent: "center",
                        borderRadius: "20px",
                    }}

                >

                    <VStack width={"80%"} p={"30px 0px"} borderRadius="20px" bg="rgba(0,20,20,0.55)">

                        <HStack _hover={{
                            bg: "rgb(189,62,155)",
                        }} bg={""} p={"5px"} border={"1px solid white"} justifyContent={"center"} width="80%" borderRadius={"10px"}>
                            <Image src={listx} borderRadius={"50%"} w={"30px"} bg={"white"} height="30px"></Image>
                            <Text>All</Text>
                        </HStack>
                        <HStack _hover={{ bg: "rgb(189,62,155)" }} justifyContent={"center"} bg={""} p={"5px"} border={"1px solid white"} width="80%" borderRadius={"10px"}>
                            <Image src={pending3} bg={"white"} borderRadius={"50%"} w={"30px"}></Image>

                            <Text>Pending</Text>
                        </HStack>
                        <HStack _hover={{ bg: "rgb(189,62,155)" }} bg={""} p={"5px"} justifyContent={"center"} border={"1px solid white"} width="80%" borderRadius={"10px"}>
                            <Image src={progress2} borderRadius={"50%"} w={"30px"} height="30px"></Image>

                            <Text>In Progress</Text>
                        </HStack>
                        <HStack _hover={{ bg: "rgb(189,62,155)" }} bg={""} p={"5px"} justifyContent={"center"} border={"1px solid white"} width="80%" borderRadius={"10px"}>
                            <Image src={done2} borderRadius={"50%"} w={"30px"} height="30px"></Image>

                            <Text>Completed</Text>
                        </HStack>
                        <HStack _hover={{ bg: "rgb(189,62,155)" }} bg={""} p={"5px"} justifyContent={"center"} border={"1px solid white"} width="80%" borderRadius={"10px"}>
                            <Image src={Partial} borderRadius={"50%"} w={"30px"} height="30px"></Image>

                            <Text>Partial</Text>
                        </HStack>
                        <HStack _hover={{ bg: "rgb(189,62,155)" }} bg={""} p={"5px"} justifyContent={"center"} border={"1px solid white"} width="80%" borderRadius={"10px"}>
                            <Image src={loading} bg={"white"} padding={"2px"} borderRadius={"50%"} w={"30px"} height="30px"></Image>

                            <Text>Processing</Text>
                        </HStack>
                        <HStack _hover={{ bg: "rgb(189,62,155)" }} bg={""} p={"5px"} justifyContent={"center"} border={"1px solid white"} width="80%" borderRadius={"10px"}>
                            <Image src={cancle} borderRadius={"50%"} bg={"white"} w={"30px"} height="30px"></Image>

                            <Text>Canceled</Text>
                        </HStack>
                    </VStack>
                </VStack>
            </Box>



            {/* Table */}

            <Box margin={"auto"} marginTop={"30px"} marginBottom={"30px"} borderTop="3px solid white" borderBottom="3px solid violet"
                borderRight={"5px solid white"} borderLeft={"6px solid violet"} borderRadius={"20px 5px 25px 3px"} color="white"
                width={"90%"}>
                <Heading>{ }</Heading>
                <TableContainer padding={"20px"} color="white" overflowWrap={"normal"}>
                    <Table padding={"20px"} color="white">
                        <Thead >
                            <Th color="white">ID</Th>
                            <Th color="white" width="20%">Date</Th>
                            <Th color="white"> Link</Th>
                            <Th color="white">Charge</Th>
                            <Th color="white"> Start Count</Th>
                            <Th color="white">Quantity</Th>
                            <Th color="white"> Service</Th>
                            <Th color="white"> Status</Th>
                            <Th color="white"> Remains</Th>

                        </Thead>
                        <Tbody color="white">
                            {
                                orders.map((data) =>
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

export default Orders
