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


const Account = () => {
    const user = {
        username: "username",
        email: "email@gamil.com",
        phone:"9874563210",
    }
    return (
        <>
            <VStack minHeight={"500px"} m={"50px"} color={"rgb(250,250,250)"}>
                <VStack bg={"rgb(200,200,200,0.20)"} padding={"20px"} width={"80%"} borderRadius={"10px"}
                gap={"20px"}
                >

                    <FormControl>
                        <FormLabel color={"rgb(250,250,250)"}>User Name</FormLabel>
                        <Input bg={"rgb(250,250,250,0.20)"} value={user.username}></Input>
                    </FormControl>

                    <FormControl>
                        <FormLabel color={"rgb(250,250,250)" }>Email</FormLabel>
                        <Input bg={"rgb(250,250,250,0.20)"} value={user.email} ></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel color={"rgb(250,250,250)"}>Phone</FormLabel>
                        <Input bg={"rgb(250,250,250,0.20)"} value={user.phone} ></Input>
                    </FormControl>
                    
                </VStack>

                <Text color={"rgb(250,250,250)"}> Change Password</Text>
                <VStack bg={"rgb(200,200,200,0.20)"} padding={"20px"} width={"80%"} borderRadius={"10px"}
                    gap={"20px"}
                >
                    <FormControl>
                        <FormLabel color={"rgb(250,250,250)"}>Current Password</FormLabel>
                        <Input bg={"rgb(250,250,250,0.20)"}></Input>
                    </FormControl>

                    <FormControl>
                        <FormLabel color={"rgb(250,250,250)"}>New Password</FormLabel>
                        <Input bg={"rgb(250,250,250,0.20)"}></Input>
                    </FormControl>

                    <FormControl>
                        <FormLabel color={"rgb(250,250,250)"}>Confirm New Password</FormLabel>
                        <Input bg={"rgb(250,250,250,0.20)"}></Input>
                    </FormControl>

                    <Button background={"blue.400"} color={'blackAlpha.800'}>Change Password</Button>
                </VStack>
                
            </VStack>
        </>
    )
}

export default Account
