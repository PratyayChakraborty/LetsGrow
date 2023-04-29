import React from 'react';
import {
  Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormLabel,
  FormControl
} from '@chakra-ui/react'



const Navbar = () => {

  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <div style={{
      boxShadow: " rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
    }}>
      <nav className="navbar navbar-expand-lg"  >
        <div className="container-fluid" style={{ backgroundColor: "transparent", }}>
          <a className="navbar-brand" href="/" style={{ backgroundColor: "teal", color: "white", borderRadius: "10px", padding: "5px", display: "flex", gap: "10px" }} ><h5>Let's Grow</h5>
            {/* <img src={growup_4x} alt="" width={"40px"} height={"40px"} style={{ borderRadius: "50%" }} /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "teal", }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/service" style={{ color: "white" }}>Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/discount" style={{ color: "white" }}>Discount</a>
              </li>
              <li className="nav-item" marginTop={{ base: "20px", md: "10px", lg: "0px" }}>

                <Button type="button" class="btn btn-outline-primary" style={{ marginLeft: "10px" }} onClick={modal1.onOpen} >Sign Up</Button>
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
              </li>
              <li className="nav-item" marginTop={{ base: "20px", md: "10px", lg: "0px" }}>
                <Button type="button" class="btn btn-outline-success" margin="10px" style={{ marginLeft: "10px" }} onClick={modal2.onOpen}>Log In</Button>
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
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar