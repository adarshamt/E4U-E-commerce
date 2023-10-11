import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

import Navbar from "../Componets/NavbarMui";
import { useRef } from "react";
import axios from "../Services/AxiosInstance";
import { useDispatch } from "react-redux";
import { login } from "../store/ecommerse_slice";

import cookie from "js-cookie";
import Button from '@mui/material/Button';


const UserLogin = () => {
  const ipRef = useRef();

  const nav = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async () => {
    const email = ipRef.current.email.value;

    const password = ipRef.current.password.value;

    const body = {
      email,
      password,
    };
    try {
      const response = await axios.post("user/login", body);

      const data = response;
      const token = data.data.token;
      const userId = response.data.user_id;

      cookie.set("userId", userId);

      if (token) {
        cookie.set("token", token);

        dispatch(login());

        nav("/");
      }
    } catch (error) {
      window.alert("wrong credentials");
      console.log("error", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="main_divs">
        <div>
          <img style={{width:'23rem',height:"21rem"}}
            src="https://ramezshopping.com/assets/imgs/page/login-1.png"
            alt=""
          />
        </div>

        <div className="form-div">
          <form
            ref={ipRef}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="registration_form"
          >
            <label>Email </label>
            <input name="email" type="email" placeholder="Email" />

            <label>Password </label>
            <input name="password" type="password" placeholder="Password" />

            <Button sx={{marginTop:'2rem'}} variant="contained" onClick={loginHandler} >
              Log in
            </Button>
             
            <p style={{marginTop:'4rem'}} onClick={() => nav("/signup")}>
              {" "}
              Create an account{" "}
              <Button variant="contained" color="success">
                Sign up
              </Button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
