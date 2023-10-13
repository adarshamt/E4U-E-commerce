import { useEffect, useRef, useState } from "react";
import "../Styles/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbars from "../Componets/NavbarMui";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";





import { useDispatch, useSelector } from "react-redux";



import ReactMapGL, { Marker } from "react-map-gl";
import { MapPin } from "phosphor-react";






const Signup = () => {
  const ipref = useRef();

  const nav = useNavigate();
  // const [location, setlocation] = useState();
  const dispatch=useDispatch()
  const data= useSelector(state=>state.E4U_slice.location)

      useEffect(()=>{

      console.log("location------------+++++++++++++++++", data);
    },[data])

  const registerHandler = async () => {
    const Name = ipref.current.name.value;

    const Email = ipref.current.email.value;

    const Phone = ipref.current.phone_number.value;
    const Password = ipref.current.password.value;
    const location = marker

    const passItems = {
      name: Name,
      email: Email,
      phone: Phone,
      password: Password,
      location,
    };
    console.log(" pass item ------------------", passItems);
    try {
      const response = await axios.post(
        "http://localhost:4743/user/registraion",
        passItems
      );

     

      console.log("register response--------------", response);
      nav("/login");
    } catch (error) {
      "error", error;
    }
  };

  const [viewport, setViewport] = useState({
    latitude: 11.1360,
    longitude: 75.8272,
    zoom: 13,
  });

  const [marker, setMarker] = useState(null);

  const handleMapClick = (event) => {
    const { lngLat } = event;

    if (lngLat) {
      const { lng, lat } = lngLat;
      setMarker({
        latitude: lat,
        longitude: lng,
      });
    
      
    }
  };
  return (
    <>
      <Navbars />

      <div className="main_div">
        <div className="header_div">
          <h3 style={{ display: "flex", justifyContent: "center" }}>Sign up</h3>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          ref={ipref}
        >
          <div>
            <TextField
              label="first name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              name="name"
            />
            <TextField
              label="last name"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
            />
          </div>
          <div>
            <TextField
              label="email"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              name="email"
            />
            <TextField
              label="phone number"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
              name="phone_number"
            />
          </div>
          <div>
            <TextField
              label="password"
              id="outlined-size-small"
              defaultValue=""
              size="small"
              name="password"
            />
            <TextField
              label="confirm password"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
            />
          </div>
          <div>
            {/* {location ? (
              <Button variant="outlined" onClick={handleOpen}>
                {" "}
                <CheckCircleIcon /> location locked
              </Button>
            ) : (
              <Button variant="contained" onClick={handleOpen}>
                <PersonPinCircleIcon />
                Select location
              </Button>
            )}
             */}
       
              <Box  >
                <h6>Select location</h6>
              <div style={{ height: "200px" }}>
      <ReactMapGL
        initialViewState={viewport}
        width="10rem"
        height="10rem"
        transitionDuration="200"
        mapboxAccessToken="pk.eyJ1IjoicmFodWxyYWRoYWtyaXNobmFuIiwiYSI6ImNsbTRwOXpqaTQ4aGIzZHRoa3g3bW1md2UifQ.0Zau3s28QwARyY1b9t73Ow"
        mapStyle="mapbox://styles/rahulradhakrishnan/clm4jf19100uu01peeobb3f1y"
        onViewportChange={(newViewport) => {
          setViewport(newViewport);
        }}
        onClick={handleMapClick}
      >
        {marker ? (
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20}
            offsetTop={-10}
            draggable={true}
            onDragEnd={handleMapClick}
          >
            <div>
              <MapPin size={22} style={{ color: "red" }} />
            </div>
          </Marker>
        ) : null}
      </ReactMapGL>
    </div>
                

            
              </Box>
        
          </div>
          <div className="btns">
            <Button
              variant="contained"
              sx={{ backgroundColor: "green" }}
              disableElevation
              onClick={registerHandler}
            >
              Sign up
            </Button>

            <h6>Dont't have account</h6>
            <Button
              variant="outlined"
              sx={{ backgroundColor: "" }}
              disableElevation
            >
              Register
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};
export default Signup;
