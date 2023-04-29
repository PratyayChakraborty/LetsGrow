import React, { useState } from "react";
import "./Signup.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://gleaming-plum-long-johns.cyclic.app/user/register', {
        name,
        lname,
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="outerSection">
        <Box w={["95%", "70%", "50%", "30%"]} className="signupsection">
          <div className="signupmainbox">
            <h1 id="signupTitle">CREATE AN ACCOUNT</h1>
            <div className="signupformdiv">
            <form onSubmit={handleSubmit}>
                <div className="input-data">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {/* <div className="underline"></div> */}
                  <label>Name*</label>
                </div>
                <div id="signuperrorBox"></div>
                <div className="input-data">
                  <input
                    type="text"
                    value={lname}
                    onChange={(e) => setlName(e.target.value)}
                    required
                  />
                  {/* <div className="underline"></div> */}
                  <label>last Name*</label>
                </div>
                <div id="signuperrorBox"></div>
                <div className="input-data">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {/* <div className="underline"></div> */}
                  <label>Email*</label>
                </div>
                <div id="signuperrorBox"></div>
                <div className="input-data">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {/* <div className="underline"></div> */}
                  <label>Password*</label>
                </div>
                <div id="signuperrorBox"></div>
               
                <div className="signupBtndiv">
                  <input type="submit" value="Create Account" />
                </div>
                <div className="redirecttologin">
                  <p className="redirectlogintext">
                    Already a member?
                    <Link to={"/login"}>
                      <span className="redirectloginlink">Log In</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default SignUp;
