import { useRef } from "react";
import "../Styles/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbars from "../Componets/NavbarMui";
import { MapBox } from "../Componets/MapBox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Signup = () => {
  const ipref = useRef();

  const nav = useNavigate();
  const registerHandler = async () => {
    const Name = ipref.current.name.value;

    const Email = ipref.current.email.value;

    const Phone = ipref.current.phone_number.value;
    const Password = ipref.current.password.value;

    const passItems = {
      name: Name,
      email: Email,
      phone: Phone,
      password: Password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4743/user/registraion",
        passItems
      );

      nav("/login");
    } catch (error) {
      "error", error;
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        >
          <div>
            <TextField
              label="first name"
              id="outlined-size-small"
              defaultValue=""
              size="small"
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
            />
            <TextField
              label="phone number"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
            />
          </div>
          <div>
            <TextField
              label="password"
              id="outlined-size-small"
              defaultValue=""
              size="small"
            />
            <TextField
              label="confirm password"
              id="outlined-size-normal"
              defaultValue=""
              size="small"
            />
          </div>
          <div>
            <Button  variant="contained" onClick={handleOpen}>
              <PersonPinCircleIcon/>
              Select location
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>

                <h3>modal display</h3>
               <MapBox />
              </Box>
            </Modal>
          </div>
          <div className="btns">
            <Button
              variant="contained"
              sx={{ backgroundColor: "green" }}
              disableElevation
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
