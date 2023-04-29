import React, { useState } from 'react'

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
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import chat4 from "../../assets/chat4.jpg"
import Insta from "../../assets/Insta.jpg"
import WhatsApp from "../../assets/WhatsApp.webp"
import chat from "../../assets/chat.jpg"

import ReactWhatsapp from 'react-whatsapp';

const Chat_Button = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown(current => !current);

        // setRating(disable)

    };
    const { isOpen, onToggle } = useDisclosure()
    const ss = {chat4}
    return (
        <>
            <VStack

                width={"50px"}
                // margin={"auto"}
                position={"fixed"} left="20px"
                bottom="100px"
                padding={"5px"}
            // bg={"red"}

            >

                {isShown &&
                    (
                        <SlideFade in={isOpen} >
                            <VStack gap="10px">
                                <VStack padding={"2px"} border={"1px solid white"} width="50px" borderRadius={"50%"}>
                                    <Image src={Insta} width={"60px"} borderRadius={"50%"} ></Image>

                                </VStack>
                                <VStack padding={"2px"} border={"1px solid white"} width="50px" borderRadius={"50%"}>
                                    <Image src={WhatsApp} width={"60px"} borderRadius={"50%"} ></Image>

                                </VStack>
                            </VStack>
                        </SlideFade>
                    )
                }



                <VStack onClick={handleClick} marginTop="20px" padding={"2px"} border={"1px solid white"} width="50px" borderRadius={"50%"}
                >
                    <Image id="chat_btn" src={chat4} width={"50px"} borderRadius={"50%"}

                    onClick={onToggle}
                        
                    ></Image>
            </VStack>
        </VStack >





            {/* <ReactWhatsapp number="6297386065" message="Hello World!!!" /> */ }

        </>
    )
}

export default Chat_Button
