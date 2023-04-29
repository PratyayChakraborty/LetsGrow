import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  // const Auth = useSelector((store) => store.auth.isAuth);
  // const adminAuth = useSelector((store) => store.auth.adminAuth);
  // const dispatch = useDispatch()
  // let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://gleaming-plum-long-johns.cyclic.app/user/login",
        {
          email,
          password,
        }
      );
      if (response.data.token === undefined) {
        alert("Please Login Again");
      } else {
        alert(response.data.token);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="outerSection">
        <Box w={["95%", "70%", "50%", "30%"]} className="loginSection">
          <div className="loginmainbox">
            <h1 id="loginTitle">LOG IN TO KFC</h1>
            <div className="loginFormdiv">
              <form onSubmit={handleSubmit} id="loginForm">
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
                  <label>Email</label>
                </div>
                <div id="loginerrorBox"></div>
                <div className="input-data">
                  <input
                    type="mobile"
                    name="mobile"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                  {/* <div className="underline"></div> */}
                  <label>Mobile</label>
                </div>
                <div id="loginerrorBox"></div>
                <div className="loginterms">
                  <p className="logintermtext">
                    By logging into the application or proceeding as a guest,
                    you agree to our{" "}
                    <span className="logintermlink">Privacy Policy</span> and{" "}
                    <span className="logintermlink">Terms of Use</span>.
                  </p>
                </div>
                <div className="loginBtndiv">
                  <input
                    type="submit"
                    value="Log In"
                    // onClick={handleLogin}
                  />
                </div>
                <div
                  className="redirecttosignup"
                  style={{ marginBottom: "5%" }}
                >
                  <p className="redirectsignuptext">
                    Don't have an account?
                    <Link to={"/signup"}>
                      <span className="redirectsignuplink">Join Now</span>
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

export default Login;
