import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

import axios from "../Services/AxiosInstance"

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import cookie from "js-cookie";
import { useDispatch } from "react-redux";





function AdminLogin() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const dispatch = useDispatch()

  const nav = useNavigate()


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Functions to update the state variables
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
   

    const body = {
      username,password
    }
    try {
      
        const response = await axios.post("/admin/login",body) 

        
        const admin_token = response.data.token;
        
        
        if (response.status == 200){
          
          

          cookie.set("admin_id", admin_token);
              
          
               dispatch(AdminLogin())
            nav('/admin')
          }


    } catch (error) {

      console.log("error catch :",error)
      
    }

  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#79AC78",
        height: "100vh",
        padding: "0 5rem",
      }}
      className="ad_login"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="image-bg-div"
      >
        <img
          style={{ width: "15rem", height: "15rem", marginBottom: "2rem" }}
          src="https://res.cloudinary.com/dcy1nhstg/image/upload/v1696308123/E4U%20images/admin-login_sppiso.png"
          alt=""
        />
        <h3>Admin Login</h3>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          padding: "20px",
          backgroundColor: "#B5CB99",
          borderRadius: "4%",
        }}
        className="ad_login_form"
      >
        <MDBContainer className="p-3 my-5 w-100">
          <MDBTabsContent>
            <MDBTabsPane
              show={justifyActive === "tab1"}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <MDBInput
                wrapperClass="mb-4"
                label="User name"
                id="form1"
                type="email"
                contrast
                value={username}
                onChange={handleUsernameChange}
                              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                contrast
                value={password}
                onChange={handlePasswordChange}
              />

              <MDBBtn onClick={handleSubmit} className="mx-2" color="success" style={{ width: "50%" }}
              >
                Login
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </div>
  );
}

export default AdminLogin;
