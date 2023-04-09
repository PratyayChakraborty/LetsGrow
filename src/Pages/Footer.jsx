import { Flex, Box, List, ListItem, Grid, Image, Heading } from "@chakra-ui/react";
import { GrFacebook, GrLinkedin, GrSkype, GrTwitter } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import growup_4x from '../assets/growup_4x.webp'

function Footer() {
  return (
    <Box bg="transparent" color="white" pt="40px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" style={
      {
        boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
      }
    } >
      <Grid
        p={["10px 50px"]}
        rowGap="20px"
        templateColumns={[
          "repeat(1, auto)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)",
        ]}
      >
        <List display="flex" flexDirection={"column"} textAlign={["center", "left", "left", "left"]} justifyContent="left" lineHeight="26px" cursor="pointer">
          <ListItem justifyContent="center" cursor="pointer" >
            {/* <Image src={""} /> */}
            <Heading color={"teal"} display={"flex"} gap={"10px"}>Let's Grow
              {/* <img src={growup_4x} alt="" width={{ base: "10px", md: "60", lg: "10px" }} height={{ base: "10px", md: "60", lg: "10px" }} style={{ borderRadius: "50%" }} /> */}
            </Heading>
          </ListItem>
          <ListItem className="footerItems">Questions of feedback?</ListItem>
          <ListItem className="footerItems">We’d love to hear from you</ListItem>



          <Flex justifyContent="center" gap="20px" mt="20px" cursor="pointer">
            <GrFacebook className="ficons" href="/" />
            <GrTwitter className="ficons" href="/" />


            <GrSkype className="ficons" href="/" />


            <ImWhatsapp className="ficons" href="/" />

          </Flex>



        </List>

        <List textAlign={["center", "left", "left", "left"]} cursor="pointer">
          <ListItem className="footerItems first" href="/">CATEGORIES</ListItem>
          <ListItem className="footerItems" href="/">Pricing</ListItem>
          <ListItem className="footerItems" href="/">Home</ListItem>
          <ListItem className="footerItems" href="/">Service</ListItem>

        </List>

        <List textAlign={["center", "left", "left", "left"]} cursor="pointer">
          <ListItem className="footerItems first" href="/">USEFUL LINKS</ListItem>
          <ListItem className="footerItems" href="/">Home</ListItem>
          <ListItem className="footerItems" href="/">All Services</ListItem>
          <ListItem className="footerItems" href="/">Latest Services</ListItem>
          <ListItem className="footerItems" href="/">Featured Services</ListItem>
        </List>

        <List textAlign={["center", "left", "left", "left"]} cursor="pointer">
          <ListItem className="footerItems first" href="/">ABOUT  MY Let's Grow</ListItem>
          <ListItem className="footerItems" href="/">About Us</ListItem>
          <ListItem className="footerItems" href="/">FAQ</ListItem>
          <ListItem className="footerItems" href="/">Terms & Conditions</ListItem>
          <ListItem className="footerItems" href="/">Privacy Policy</ListItem>
        </List>

        <List textAlign={["center", "left", "left", "left"]} cursor="pointer">
          <ListItem className="footerItems first" href="/">CONTACT US</ListItem>
          <ListItem className="footerItems" href="/">+91 9874563210</ListItem>
          <ListItem className="footerItems" href="/">https://letsgrow.com</ListItem>
          <ListItem className="footerItems" href="/">support@myletsgrow.com</ListItem>

        </List>
      </Grid>


      <Box bg="black" p="10px 0" color={"white"}>
        2023 © All Rights Reserved
      </Box>
    </Box>
  );
}

export default Footer;
