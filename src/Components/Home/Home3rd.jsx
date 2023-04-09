import React from 'react';
import broadcast from '../../assets/broadcast.webp';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import "../../Styles/Homesyl.css"
const Home3rd = () => {
    return (
        <Box className="promo-section">

            <Box class="container" data-aos="fade-up">
                <Heading class="h5 text-primary">Process</Heading>
                <Heading color="white">It's Easier Than Making A Cup Of Tea !</Heading>
                <Text color="white">Your social media success is largely dependent on the number of likes, comments and followers you have.</Text>
            </Box>

            <Flex className="container" flexDirection={{ base: "column", md: "column", lg: "row" }} >

                <Box className="container" data-aos="fade-up" data-aos-delay="50" color={"white"} width={{ base: "100%", md: "50%", lg: "50%" }}>
                    <div className="col-lg-6 col-md-12 order-0 order-lg-1">

                        <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                            <i className="far fa-folder-tree fa-2x"></i>
                        </div>
                        <div className="icon-content">
                            <span className="text-primary h6">Step 1</span>
                            <h3 className="h5 mb-2">Sign Up To Create New Account</h3>
                            <p>Sign Up &amp; create account for best social media marketing services in world, Indiansmmservices is cheapest SMM Panel with speed delivery.
                            </p>
                        </div>


                        <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                            <i className="far fa-bezier-curve fa-2x"></i>
                        </div>
                        <div className="icon-content">
                            <span className="text-primary h6">Step 2</span>
                            <h3 className="h5 mb-2">Add Funds To Account</h3>
                            <p>Add funds to your smm panel account with plenty of available major payment gateways such as paytm, coinbase, stripe, paypal and more.
                            </p>
                        </div>


                        <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                            <i className="far fa-layer-group fa-2x"></i>
                        </div>
                        <div className="icon-content">
                            <span className="text-primary h6">Step 3</span>
                            <h3 className="h5 mb-2">Select Service You Want To Order</h3>
                            <p>Find the perfect service according to your requirement from 100s of categories such as Instagram, Facebook, Youtube, Twitter etc.
                            </p>
                        </div>

                        <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                            <i className="far fa-truck fa-2x"></i>
                        </div>
                        <div className="icon-content">
                            <span className="text-primary h6">Step 4</span>
                            <h3 className="h5 mb-2">Put Order, Sit Back &amp; Enjoy</h3>
                            <p>Add proper link and quantity to get price for service automatically. Verify details and you are good to go.
                            </p>
                        </div>


                    </div>
                </Box>
                <Box className="container" width={{ base: "100%", md: "50%", lg: "50%" }}>
                    <img src={broadcast} alt="" className="img-fluid pt-5 pb-5 " />
                </Box>
            </Flex>
        </Box>

    )
}

export default Home3rd