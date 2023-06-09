import React from 'react';
import { Box, Flex } from "@chakra-ui/react"
const DiscountDiv4 = () => {
    return (
        <Box className="container" style={{
            boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
            marginBottom:"50px"
        }} color={"whatsapp.400"} fontSize="15px" padding="30px" margin="auto" marginRight={"60px"}>
            <Box className="well">


                <h3 className="susp">DISCOUNTS BY SPENDINGS</h3>
                <h5 className="susp2" style={{ paddingTop: "20px" }}> Get <strong style={{ color: "red" }}>Upto 5% Discount</strong> On Selected Services On Basis Of Your Spending In Panel* </h5>
                <p style={{ color: 'red' }}>Discount Slabs Are Mentioned In New Order Page Account Status Section.</p>
                <div className="buttoncent" style={{ marginTop: "15px" }}>
                    <p className="sup" style={{ marginBottom: "35px" }}>
                        <a href="/addfunds">
                            <button style={{
                                border: "1px solid",
                                boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                                padding: "10px",
                                borderRadius: "20px"
                            }}>
                                <span  >
                                    <svg viewBox="0 0 24 24" width="20px" height="20px" xmlns="" className="container">

                                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" fill="red">
                                        </path>
                                    </svg>
                                    Add Funds
                                </span>
                            </button>
                        </a>

                    </p></div>
            </Box>
        </Box>
    )
}

export default DiscountDiv4