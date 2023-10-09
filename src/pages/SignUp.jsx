import { useRef } from "react";
import "../Styles/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbars from "../Componets/NavbarMui";
import Map from "../Componets/MapBox";

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

  return (
    <>
      <Navbars />
      <div className="main_div">
        <div className="form-div">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            ref={ipref}
            className="registration_form"
          >
            <label>Name </label>

            <input name="name" type="text" placeholder="name" />

            <label>Email </label>

            <input name="email" type="Email" placeholder="Email" />

            <label>Phone Number </label>

            <input
              name="phone_number"
              type="number"
              placeholder="Phone Number"
            />

            <label>Password </label>

            <input name="password" type="text" placeholder="Password" />

            <label>Upload your photo </label>

            <input type="file" name="file" placeholder="chood]se your image" />

            <label>Address </label>
            <textarea name="address" id="" cols="30" rows="4"></textarea>
            <label>Select your location </label>
            <div
              className="map_div"
              style={{
              
                width: "200px",
                margin: "5%",
                height: "200px",
              }}
            >
              <Map />
            </div>

            <div className="btns_signup">
              <button onClick={registerHandler} className="signup_btn">
                Sign up
              </button>

              <button className="login_btn">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
