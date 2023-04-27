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
} from '@chakra-ui/react'
import growth from "../../../assets/growth.webp"
import money_min from "../../../assets/money_min.webp"
import s52pi6rq9wjyg50b from "../../../assets/s52pi6rq9wjyg50b.png"
import budgetmin from "../../../assets/budgetmin.webp"
import book from "../../../assets/book.webp"



const New_order = () => {
    return (
        <>
            <HStack margin="auto" marginTop="50px" padding="20px" justifyContent={"space-evenly"}

                flexDirection={{
                    base: "column",

                    md: "row",
                    lg: "row"
                }}
                gap={"20px"}
            >

                <Box width={{ base: "80%", md: "20%", lg: "20%" }} padding="5px" justifyContent={"center"} textAlign={"center"}
                    borderRight={"5px solid rgba(250, 10, 90)"}
                    borderLeft={"8px solid rgba(250, 6, 120)"}
                    borderTop={"1px solid rgba(250, 26, 120)"}
                    borderBottom={"5px solid rgba(240, 26, 120)"}
                    borderRadius={"5px 20px 10px 30px"}

                >
                    <Image src={growth} margin="auto" width="80px" height="80px"></Image>
                    <Text bg={"whatsapp.500"} margin="auto" color="white" borderRadius={"10px"} fontWeight="bold" w="60%" >NEW</Text>
                    <Text color={"white"}>Account Status</Text>
                    <Button background="blue.500">View Roles</Button>

                </Box>


                <Box width={{ base: "80%", md: "20%", lg: "20%" }} padding="5px" justifyContent={"center"} textAlign={"center"}
                    borderRight={"5px solid rgba(250, 10, 90)"}
                    borderLeft={"8px solid rgba(250, 6, 120)"}
                    borderTop={"1px solid rgba(250, 26, 120)"}
                    borderBottom={"5px solid rgba(240, 26, 120)"}
                    borderRadius={"5px 20px 10px 30px"}

                >
                    <Image src={money_min} margin="auto" width="80px" height="80px"></Image>
                    <Text bg={"whatsapp.500"} margin="auto" color="white" borderRadius={"10px"} fontWeight="bold" w="60%" >₹{0.00}</Text>
                    <Text color={"white"}>Current Balance</Text>
                    <Button background="blue.500">Add Funds</Button>

                </Box>

                <Box width={{ base: "80%", md: "20%", lg: "20%" }} padding="5px" justifyContent={"center"} textAlign={"center"}
                    borderRight={"5px solid rgba(250, 10, 90)"}
                    borderLeft={"8px solid rgba(250, 6, 120)"}
                    borderTop={"1px solid rgba(250, 26, 120)"}
                    borderBottom={"5px solid rgba(240, 26, 120)"}
                    borderRadius={"5px 20px 10px 30px"}

                >
                    <Image src={s52pi6rq9wjyg50b} margin="auto" width="80px" height="80px"></Image>
                    <Text bg={"whatsapp.500"} margin="auto" color="white" borderRadius={"10px"} fontWeight="bold" w="60%" >85471</Text>
                    <Text color={"white"}>Total Users</Text>
                    <Button background="blue.500">My Account</Button>

                </Box>

                <Box width={{ base: "80%", md: "20%", lg: "20%" }} padding="5px" justifyContent={"center"} textAlign={"center"}
                    borderRight={"5px solid rgba(250, 10, 90)"}
                    borderLeft={"8px solid rgba(250, 6, 120)"}
                    borderTop={"1px solid rgba(250, 26, 120)"}
                    borderBottom={"5px solid rgba(240, 26, 120)"}
                    borderRadius={"5px 20px 10px 30px"}

                >
                    <Image src={budgetmin} margin="auto" width="80px" height="80px"></Image>
                    <Text bg={"whatsapp.500"} margin="auto" color="white" borderRadius={"10px"} fontWeight="bold" w="60%" >95487</Text>
                    <Text color={"white"}>All Orders</Text>
                    <Button background="blue.500">View Orders</Button>

                </Box>
            </HStack>



            <HStack margin="auto" marginTop="50px" padding="20px" justifyContent={"space-evenly"}
                color={"whatsapp.500"}
                flexDirection={{
                    base: "column",

                    md: "row",
                    lg: "row"
                }}
                gap={"20px"} >
                <VStack gap={"20px"} width={{ base: "80%", md: "50%", lg: "50%" }} bg={"rgb(120,120,120,0.08)"} p={"20px"}
                    borderRadius={"20px 0px"}
                >
                    <FormControl>
                        <FormLabel>Category</FormLabel>
                        <Select fontSize={"20px"}>
                            <option color='black'>op1</option>
                            <option color='black'>op2</option>

                        </Select>
                    </FormControl>

                    <FormControl >
                        <FormLabel>Service</FormLabel>
                        <Select fontSize={"20px"}>
                            <option color='black'>op1</option>
                            <option color='black'>op2</option>

                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Link</FormLabel>
                        <Input type='link'></Input>
                    </FormControl>


                    <FormControl>
                        <FormLabel>Quantity</FormLabel>
                        <Text fontSize={"10px"} textAlign="left">(Min: 100 - Max: 5000)</Text>
                        <Input type='number'></Input>
                    </FormControl>


                    <FormControl>
                        <FormLabel>Charge</FormLabel>
                        <Input type='number'></Input>

                    </FormControl>

                    <Button bg={"transparent"} border={"1px solid green"} color={"green.500"}>Place Order</Button>
                </VStack>

                <VStack borderRadius={"10px"} width={{ base: "80%", md: "50%", lg: "50%" }} bg={"rgb(180,180,180,0.15)"} justifyContent={"left"} textAlign={"left"} color={"white"} padding="10px">
                    <HStack  >
                        <Image src={book} width="40px"></Image>
                        <Heading fontSize={"30px"}>
                            Instructions
                        </Heading>
                    </HStack>


                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>1. Do Not Place Multiple Orders With Same Link At Same Time , Wait For One Order To Complete Then Put New Order.</Text>
                    </Box>

                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>2.Read Service Description Before Ordering.</Text>
                    </Box>

                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>3. For YouTube Services Put Quantities In Multiple Of 100 ( For Eg. 100, 200, 300, 1000 etc.)</Text>
                    </Box>

                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>4. Guarantee Is Only Provided For Refill Enabled Services . Do Not Ask For Drop Refills In Other Services.</Text>
                    </Box>

                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>5. No Refunds Will Be Given To Your Original Payment Meathod. If Order is Cancelled Amount Will Be Automatically Added To Your Account Funds.</Text>
                    </Box>
                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>6. For Partial Orders Remaining Amount Will Be Refunded To Your Account Balance. Do Not Ask For Completion Of Partial Orders As They Are Automatically Refunded.</Text>
                    </Box>
                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>7. Do Not Change Username when order is in progress / available for refill. Order will be marked completed and no refunds will be given for it.</Text>
                    </Box>
                    <Box width={"100%"} padding="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" margin={"5px"}>
                        <Text>8. Please put correct link/ username . You will be responsible for it and no refunds will be given.</Text>
                    </Box>

                </VStack>

            </HStack>
        </>
    )
}

export default New_order
