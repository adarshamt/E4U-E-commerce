import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaStore } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { sidebar_show } from "../store/ecommerse_slice.jsx";

import { FcApproval } from "react-icons/fc";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "../Styles/Navbar.css";
import { Button } from "react-bootstrap";
import Sidebar from "./Sidebar";

import cookie from "js-cookie";

function Navbars() {
  const data = useSelector((state) => state.E4U_slice);

  const nav = useNavigate();

  const dispatch = useDispatch();

  const checkToken = cookie.get("token");

  const sidebarHandler = () => {
    dispatch(sidebar_show());
  };

  return (
    <>
      {data.sidebar == true ? <Sidebar /> : null}

      <Navbar bg="primary" expand="lg" className="bg-body-tertiary">
        <Button
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
          className="menu_btn"
          onClick={sidebarHandler}
        >
          {" "}
          <GiHamburgerMenu />
        </Button>

        <Container fluid>
          <Navbar.Brand
            onClick={() => nav("/")}
            style={{ color: "white" }}
            href="#"
          >
            E4U
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
            </Nav>
            <Form style={{ alignItems: "center" }} className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <div className="signin_container">
              <Button
                style={{ backgroundColor: "transparent", boxShadow: "none" }}
                onClick={() => nav("/storelogin")}
                className="store_signin_btn"
              >
                <FaStore style={{ fontSize: "20px" }} />
                Store sign in
              </Button>

              <Button
                style={{ backgroundColor: "transparent", boxShadow: "none" }}
                className="signin_btn"
                onClick={() => nav("/login")}
              >
                <FaUserAlt style={{ fontSize: "20px" }} />

                {!checkToken ? (
                  <span>Cutomer login </span>
                ) : (
                  <span>
                    Active <FcApproval />{" "}
                  </span>
                )}
              </Button>

              <Button
                style={{ backgroundColor: "transparent", boxShadow: "none" }}
              >
                <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link onClick={() => nav("/products")}>All Products </Nav.Link>

            <Nav.Link onClick={() => nav("/stores")} href="#pricing">
              Stors
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
