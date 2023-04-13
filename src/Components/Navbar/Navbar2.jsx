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
    Wrap, WrapItem
} from '@chakra-ui/react'
import '../../Styles/nav.css'
const Navbar2 = () => {
    const modal1 = useDisclosure()
    const modal2 = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Flex margin={"auto"} padding={"10px"}
            style={{
                boxShadow: " rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",

            }} >
            <a href="/"><Box ><Heading fontSize={"15px"} color="white" padding={"10px"} backgroundColor={"teal"} margin={"auto"} marginRight={"10px"} borderRadius={"10px"} >Let's Grow</Heading></Box></a>
            <Flex fontSize={{ base: "8px", md: "12px", lg: "15px" }}>

                <a href="/" className="containe"><Text id="nav-btn1">Home</Text> </a>
                <a href="/service" className="containe"><Text id="nav-btn1">Service</Text> </a>
                <a href="/discount" className="containe"><Text id="nav-btn1"> Discount</Text></a>


            </Flex>
            <Flex>
                <button className="btn btn-outline-primary" id="nav-btn" onClick={modal1.onOpen}>Sign UP
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
                </button>

                <button className="btn btn-outline-success" id="nav-btn" onClick={modal2.onOpen} >Sign IN
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
                                    Sign In
                                </Button>
                                <Button onClick={modal2.onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </button>
            </Flex>
        </Flex>
    )
}

export default Navbar2