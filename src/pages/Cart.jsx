import Navbar from "../Componets/NavbarMui";
import "../Styles/Cart.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { Card, CardContent, TextField, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Cookies from "js-cookie";
import axios from "../Services/AxiosInstance";
import { useEffect } from "react";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cart_counter } from "../store/ecommerse_slice";

const Cart = () => {
  const dispatch = useDispatch();
  // let products;
  const [products, setProducts] = React.useState([]);
  const [carttotal, setCartTotal] = React.useState(0);

  const nav = useNavigate();

  const user_id = Cookies.get("userId");

  const deliveryCharge = (15 / 100) * carttotal;

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4743/user/cart/products",
        {
          params: {
            id: user_id,
          },
        }
      );

      setProducts(response.data.products);

      const count = response.data.products.length;

      dispatch(cart_counter({ count }));

      setCartTotal(response.data.total);
    } catch (err) {
      console.log("Get cart items error", err);
    }
  };

  const deletItemHandler = async (id) => {
    const user_id = Cookies.get("userId");

    const body = {
      user_id,
      product_id: id,
    };

    try {
      const response = await axios.post(
        "http://localhost:4743/user/removefromcart",
        body
      );

      getCartItems();
    } catch (error) {
      console.log(" addto cart  error", error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_4Baxb5ttFuRGgg",
      amount: data.amount,
      currency: data.currency,
      // name: book.name,
      description: "Test Transaction",
      // image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `http://localhost:4743/user/veryfypayment/${user_id}`;
          const { data } = await axios.post(verifyUrl, response);
        
          if (data.status == "success") {
            
            nav("/");
            getCartItems();
           
          } 
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:4743/user/payment";
      const { data } = await axios.post(orderUrl, {
        amount: carttotal + deliveryCharge,
      });
     
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ margin: "3% 0 0 5%" }} className="cart_maindiv">
        <h2 style={{ marginLeft: "6%" }}> My Cart</h2>
        <div className="cart_subdiv">
          <Box className=" map component" sx={{ width: "50%", padding: "2%" }}>
            <Stack spacing={6}>
              {products && (
                <>
                  <>
                    {products.length > 0 ? (
                      products.map((itm, index) => (
                        <Item
                          key={index}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={{ width: "70px", height: "90px" }}
                            src={itm.images[0].url}
                            alt=" no image found"
                          />
                          <Typography component={"span"} variant="h6">
                            {" "}
                            {itm.productName}
                          </Typography>
                          <RemoveCircleIcon />
                          <TextField style={{ width: "50px" }} value={1} />
                          <AddCircleIcon />

                          <TextField
                            value={itm.price}
                            style={{ width: "100px" }}
                            id="standard-basic"
                            variant="standard"
                          />

                          <HighlightOffIcon
                            onClick={() => deletItemHandler(itm._id)}
                          />
                        </Item>
                      ))
                    ) : (
                      <Item>
                        <h2>cart is empty</h2>
                      </Item>

                      // <Item>
                      //   <TextField
                      //     style={{ width: "500px" }}
                      //     value={54545454}
                      //   />

                      //   <img
                      //     style={{ width: "70px", height: "90px" }}
                      //     src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                      //   />
                      // </Item>
                    )}
                  </>
                </>
              )}
            </Stack>
          </Box>

          <Box sx={{ width: "50%", padding: "2%" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 70 }} aria-label="spanning table">
                <TableBody>
                  <TableRow>
                    <TableCell>MRP Total</TableCell>
                    <TableCell align="right">₹ {carttotal || 0}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Discount</TableCell>
                    <TableCell align="right">₹ 00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Delivery Fee</TableCell>
                    <TableCell align="right">₹ {deliveryCharge || 0}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>total</TableCell>
                    <TableCell align="right">
                      {" "}
                      ₹ {carttotal + deliveryCharge || 0}{" "}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              onClick={handlePayment}
              sx={{ width: "90%", margin: "5% 0 0 5%", height: "12%" }}
              variant="outlined"
            >
              Place order
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Cart;
