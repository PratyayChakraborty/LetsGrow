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
    ButtonGroup
} from '@chakra-ui/react'
import growup_4x from '../../assets/growup_4x.webp'
const Navbar1 = () => {

    const modal1 = useDisclosure()
    const modal2 = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Flex style={{
            boxShadow: " rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
            margin: "auto",
        }}>
            <nav className="navbar"  >
                <div className="container-fluid" style={{ backgroundColor: "transparent", }} fontSize={{ base: "10px", md: "15px", lg: '18px' }}>
                    <a className="navbar-brand" href="/" ><Text fontSize={{ base: "10px", md: "15px", lg: '18px' }} height={"20%"} justifyContent={"center"} alignItems={"center"} style={{ backgroundColor: "teal", color: "white", borderRadius: "10px", padding: "5px", display: "flex", gap: "10px" }} >Let's Grow</Text>

                    </a>


                    <Box margin={"5px"} width={{ sm: "40px", md: "60px", lg: "100px" }} fontSize={{ base: "10px", md: "15px", lg: '18px' }}>
                        <a className=" " aria-current="page" href="/" style={{ color: "white" }} width={{ sm: "40px", md: "60px", lg: "100px" }}  ><Text >Home</Text> </a>
                    </Box>
                    <Box margin={"5px"} width={{ sm: "40px", md: "60px", lg: "100px" }} fontSize={{ base: "10px", md: "15px", lg: '18px' }}>
                        <a className="" href="/service" style={{ color: "white" }} width={{ sm: "40px", md: "60px", lg: "100px" }} ><Text>Service</Text></a>
                    </Box >
                    <Box margin={"5px"} width={{ sm: "40px", md: "60px", lg: "100px" }} fontSize={{ base: "10px", md: "15px", lg: '18px' }}>
                        <a className="" href="/discount" style={{ color: "white" }}> <Text >Discount</Text></a>

                    </Box>

                    <Button onClick={modal1.onOpen} colorScheme='blue' fontSize={{ base: "8px", md: "15px", lg: '18px' }} height={{ base: "25px", md: "30px", lg: "40px" }} ><Text margin="auto">Sign Up</Text></Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={modal1.isOpen}
                        onClose={modal1.onClose}
                        style={{ color: "black", }}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create your account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>First name</FormLabel>
                                    <Input ref={initialRef} placeholder='First name' />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Last name</FormLabel>
                                    <Input placeholder='Last name' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input ref={initialRef} placeholder='Email' />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder='Password' />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3}>
                                    SignUp
                                </Button>
                                <Button onClick={modal1.onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>


                    <Button colorScheme='green' onClick={modal2.onOpen} marginLeft={"5px"} fontSize={{ base: "8px", md: "15px", lg: '18px' }} height={{ base: "25px", md: "30px", lg: "40px" }}><Text margin="auto"> Log In</Text></Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={modal2.isOpen}
                        onClose={modal2.onClose}
                        style={{ color: "black", }}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Log In</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input ref={initialRef} placeholder='Email' />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder='Password' />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3}>
                                    LogIn
                                </Button>
                                <Button onClick={modal2.onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>


                </div>

            </nav>
        </Flex>
    )
}

export default Navbar1