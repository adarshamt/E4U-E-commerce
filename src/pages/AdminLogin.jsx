import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

function AdminLogin() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: "#79AC78",
        height: "100vh",
      }}
      className="ad_login"
    >
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
         justifyContent:'end',
          padding: "20px", // Add some padding to the form
        }}
        className="ad_login_form"
      >
        <MDBContainer className="p-3 my-5 w-100">
          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <MDBInput
                wrapperClass="mb-4"
                label="User name"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />

              <MDBBtn
                style={{ backgroundColor: "#618264" }}
                className="mb-4"
              >
                Sign in
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </div>
  );
}

export default AdminLogin;
