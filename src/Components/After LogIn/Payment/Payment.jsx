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


const Payment = () => {

    const tickets = [

    ]

    return (
        <>
            <VStack color="white" margin="20px" padding="10px">
                <Heading>Make  Payment</Heading>

                <VStack bg={"rgb(200,200,200,0.3)"} minWidth="250px" width={"90%"} padding="10px" gap={"20px"} borderRadius={"20px 5px"}>
                    <FormControl >
                        <FormLabel>Method</FormLabel>
                        <Select height="50" bg={"whiteAlpha.400"} color="black">
                            <option value="" >OP1</option>
                            <option value="" >OP1</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Order ID</FormLabel>
                        <Input type="number" bg={"whiteAlpha.400"} color="black" ></Input>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <Input type="number" bg={"whiteAlpha.400"} color="black" ></Input>

                    </FormControl>

                    {/* QR  */}
                    <VStack h={"200px"} minW={"200"} margin="auto" justifyContent={"center"} bg={"whiteAlpha.400"}>
                        <Heading>QR HERE</Heading>
                    </VStack>


                    <VStack color={"red.500"}
                        bg={"rgb(2,2,2,0.5)"}
                        borderRadius="10px"
                        padding={"5px"}
                    >


                        
                        <Text textAlign={"left"}>
                            <Text textAlign={"left"} fontWeight="bold" fontSize="20px">Instruction</Text>
                            Step 1 - Scan the barcodes <br />

                            Step 2 - Pay Amount<br />

                            Step 3 - Put amount & Transaction id/order id<br />

                            Step 4 - Click on check Button Amount will be add Instantly within 30 second .<br />


                        </Text>
                    </VStack>



                    <Button bg={"blue.500"} style={{
                        width: "80%",
                    }} _hover={{
                        background: "transparent",
                        border: "1px solid rgb(100,120,220)",
                        color: "blue.300",

                    }}>Check</Button>
                    <Text>By clicking Confirm & Pay button you agree to the Terms & Conditions</Text>
                </VStack>

            </VStack>

        </>
    )
}

export default Payment
