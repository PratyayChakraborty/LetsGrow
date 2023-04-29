import React, { useState } from "react";
import './SlidBar.css'
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
import {Link} from "react-router-dom"
const SlideBar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <Box  className={menu_class} justifyContent={"center"}>
                <Link to={"/New_order"}>
                    <Box marginBottom={"20px"} borderRight={"3px solid violet"} borderRadius={"10px"} bg={"rgb(0,0,0,0.65)"} p={"20px"} _hover={{
                        
                        bg: "rgb(150,150,150,0.6)"
                    }} >
                        New Order</Box>
                </Link>
                
                <Link to={"/Orders"}>
                    <Box marginBottom={"20px"}borderRight={"3px solid violet"} borderRadius={"10px"} bg={"rgb(0,0,0,0.65)"} p={"20px"} _hover={{

                        bg: "rgb(150,150,150,0.6)"
                    }} >
                        Orders</Box>
                </Link>

                <Link to={"/Payment"}>
                    <Box marginBottom={"20px"}borderRight={"3px solid violet"} borderRadius={"10px"} bg={"rgb(0,0,0,0.65)"} p={"20px"} _hover={{

                        bg: "rgb(150,150,150,0.6)"
                    }} >
                        Add Fund</Box>
                </Link>
                <Link to={"Service"}>
                    <Box marginBottom={"20px"}borderRight={"3px solid violet"} borderRadius={"10px"} bg={"rgb(0,0,0,0.65)"} p={"20px"} _hover={{

                        bg: "rgb(150,150,150,0.6)"
                    }} >
                        Service</Box>
                </Link>
                <Link to={"/Account"}>
                    <Box marginBottom={"20px"}borderRight={"3px solid violet"} borderRadius={"10px"} bg={"rgb(0,0,0,0.65)"} p={"20px"} _hover={{

                        bg: "rgb(150,150,150,0.6)"
                    }} >
                        Account</Box>
                </Link>

                <Link to={"/Tickets"}>
                    <Box marginBottom={"20px"}borderRight={"3px solid violet"} borderRadius={"10px"} bg={"rgb(0,0,0,0.65)"} p={"20px"} _hover={{

                        bg: "rgb(150,150,150,0.6)"
                    }} >
                        Tickets</Box>
                </Link>

                

            </Box>
        </div>
    )
}

export default SlideBar