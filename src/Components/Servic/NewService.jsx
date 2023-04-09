import React from 'react'
import { Box, Heading } from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const NewService = (prop) => {
    const newservice = [
        {
            id: 1,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        },
        {
            id: 2,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        }
        ,
        {
            id: 3,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        }
        ,
        {
            id: 4,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        }
        ,
        {
            id: 5,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        }
        ,
        {
            id: 6,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        }
        ,
        {
            id: 7,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        }
        ,
        {
            id: 8,
            service: "Twitter Retweets | Max 30K | 10k / Day | Non Drop | No Refill |",
            rate: 10000,
            minorder: 10,
            maxorder: 2500,
            averagetime: "24 h",
            desciption: "Not enough data",

        }
    ];
    return (

        <Box margin={"auto"} marginTop={"30px"} marginBottom={"30px"} borderTop="3px solid white" borderBottom="3px solid violet"
            borderRight={"5px solid white"} borderLeft={"6px solid violet"} borderRadius={"20px 5px 50px 30px"} color="white"
            width={"90%"}>
            <Heading>{prop.title}</Heading>
            <TableContainer padding={"20px"} color="white" overflowWrap={"normal"}>
                <Table padding={"20px"} color="white">
                    <Thead >
                        <Th color="white">
                            ID</Th>
                        <Th color="white" width="20%">Service</Th>
                        <Th color="white"> Rate per 1000</Th>
                        <Th color="white">Min order</Th>
                        <Th color="white"> Max order</Th>
                        <Th color="white">Average time</Th>
                        <Th color="white"> Description</Th>
                    </Thead>
                    <Tbody color="white">
                        {
                            newservice.map((data) =>
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
    )
}

export default NewService