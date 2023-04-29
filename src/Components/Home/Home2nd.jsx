import React from 'react'
import Frame4 from '../../assets/Frame4.png'
import { Flex, Box } from '@chakra-ui/react'
const Home2nd = () => {
    return (
        <Box id='con'>
        <Flex className="container" flexDirection={{ base: "column", md: "column", lg: "row" }} >
            <Box className="container" >
                <img src={Frame4} alt="" className="img-fluid pt-5 pb-5 " style={{}} />
            </Box>
            <Box className="feature-content-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="50" color={"white"}>
                <h4 className="h5 text-primary">Empowering Social Media !</h4>
                <h2>Our Business Is To Grow Your Presence</h2>
                <p>API enabled reseller smm panel with quality features globally and super steady services.</p>
                <ul className="list-unstyled mt-5">
                    <li className="d-flex align-items-start mb-4">
                        <div className="icon-box bg-primary rounded me-4">
                            <i className="fas fa-headset text-white"></i>
                        </div>
                        <div className="icon-content">
                            <h3 className="h5">24/7 Support</h3>
                            <p>We are proud to say that offer 24/7 support to customer. They can register complain anytime to our customer care executives and they will be assisted anytime they want or need.
                            </p>
                        </div>
                    </li>

                    <li className="d-flex align-items-start mb-4">
                        <div className="icon-box bg-danger rounded me-4">
                            <i className="fas fa-desktop text-white"></i>
                        </div>
                        <div className="icon-content">
                            <h3 className="h5">Unique &amp; Friendly Dashboard</h3>
                            <p>View your orders at a glance on the dashboard. Filter and see statistics for individual campaigns. A simple way to keep track of orders.
                            </p>
                        </div>
                    </li>
                    <li className="d-flex align-items-start mb-4">
                        <div className="icon-box bg-primary bg-purple rounded me-4">
                            <i className="fas fa-rocket text-white"></i>
                        </div>
                        <div className="icon-content">
                            <h3 className="h5">Super Fast Delivery</h3>
                            <p>Our automated High quality cheap smm api and smm bots are expert in finishing their jobs within few minutes so you never have to wait for orders to get completed.
                            </p>
                        </div>
                    </li>
                </ul>
            </Box>
        </Flex>
        </Box>

    )
}

export default Home2nd