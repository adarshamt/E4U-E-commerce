import Navbar from "../Componets/NavbarMui";
import "../Styles/StoreSignup.css";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

import { useNavigate } from "react-router-dom";

// import axios from 'axios'
import { useRef, useState } from "react";
import axios from "../Services/AxiosInstance";

export const StoreLogin = () => {
  const ipref = useRef();

  const link = useNavigate();
  const [image, setImage] = useState();

  const Handleimages = (event) => {
    event.preventDefault();
    const files = event.target.files;

    setImage({
      images: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = ipref.current;
      const storeData = {
        storename: form.storename.value,
        email: form.email.value,
        username: form.Username.value,
        password: form.password.value,
        phone: form.phone.value,
        address: form.address.value,
        category: form.category.value,
        images: [],
      };

      const formdatatosend = new FormData();
      for (const key in storeData) {
        if (key === "images") {
          formdatatosend.append("images", image.images[0]);
        } else {
          formdatatosend.append(key, storeData[key]);
        }
      }

      const response = await axios.post("/store/registraion", formdatatosend, {
        headers: {
          // *********** TO corect the req.files undifined error *******************
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <div className="str_navbar">
        <Navbar />
      </div>
      <div className="main_div_str">
        <div className="bag_img">
          <img
            src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg"
            alt=""
          />
        </div>

        <div className="form_div_str">
          <form ref={ipref} className="signup_form_str">
            <input name="storename" type="text" placeholder="Store Name" />

            <Form.Group as={Col} md="" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <MdOutlineArrowDropDownCircle />
                </InputGroup.Text>

                <Form.Control
                  as="select"
                  name="category"
                  value={null}
                  onChange={""}
                  required
                  placeholder="Category"
                  ref={ipref}
                  style={{
                    height: "20px",
                    width: "200px",
                    marginBottom: "10px",
                  }}
                >
                  <option value="Grocery">grocery</option>
                  <option value="Vegitables">Vegitables</option>
                  <option value="Meat">Meat</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Bakery">Fish</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please choose a category.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <input name="email" type="Email" placeholder="Email" />

            <input name="Username" type="String" placeholder="username" />

            <input
              name="phone"
              style={{ textDecoration: "none" }}
              type="number"
              placeholder="Phone Number"
            />

            <input name="password" type="text" placeholder="Password" />

            <input name="location" type="text" placeholder="location" />

            <label> Upload Store image </label>
            <input
              onChange={Handleimages}
              name="image"
              type="file"
              placeholder="image"
            />

            <textarea
              style={{ border: "none", resize: "none", textAlign: "center" }}
              placeholder="Address"
              name="address"
              id=""
              cols="30"
              rows="4"
            ></textarea>

            <div className="btn_div">
              <button onClick={handleSubmit} className="signup">
                Sign up
              </button>
              <button onClick={() => link("/storelogin")} className="login">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default StoreLogin;
