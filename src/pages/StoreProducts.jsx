import Navbarmui from "../Componets/NavbarMui";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import StorefrontIcon from "@mui/icons-material/Storefront";

import axios from "../Services/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { cart_counter } from "../store/ecommerse_slice";

const StoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [storename, setStorename] = useState("");
  const dispatch = useDispatch();

  const { id } = useParams(); // store id ***************
  const nav = useNavigate();

  const user_id = Cookies.get("userId");

  const body = {
    id,
  };

  const getproducts = async () => {
    try {
      const response = await axios.get("http://localhost:4743/store/products", {
        params: {
          id: id,
        },
      });

      setProducts(response.data.data);
      setStorename(response.data.store.storeName);
    } catch (err) {
      console.log("error :", err);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);

  const addtoCartHandler = async (id) => {
    if (!user_id) {
      window.alert(" Please log in to add to cart");
      nav("/login");
    }

    const body = {
      user_id,
      product_id: id,
    };

    const notify = (msg) => toast(msg);

    try {
      const response = await axios.post(
        "http://localhost:4743/user/addtocart",
        body
      );

      const status_message = response.data.message;

      notify(status_message);
      getCartItems();
    } catch (error) {
      console.log(" addto cart axios error", error);
    }
  };

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

      const count = response.data.products.length;

      dispatch(cart_counter({ count }));
    } catch (err) {
      console.log("Get cart items error", err);
    }
  };

  return (
    <>
      <Navbarmui />
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#F3FDE8",
        }}
        className="str_dsply_pdts"
      >
        <Typography
          color="green"
          padding=" 5% 0 0 5%"
          fontWeight="900"
          gutterBottom
          variant="h4"
          component="div"
        >
          <StorefrontIcon fontSize="60px" />
          {storename}
        </Typography>

        <div
          style={{
            padding: "2%",
            display: "flex",
            justifyContent: "start",
            flexWrap: "wrap",
          }}
          className="str_sub_div"
        >
          {products.map((itm, index) => (
            <Card
              key={index}
              sx={{
                margin: "3%",
                maxWidth: 345,
                width: "15rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia
                sx={{ height: 150, width: 150, margin: "5%" }}
                image={itm.images[0].url}
                title={itm.productName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {itm.productName}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  ₹{itm.price}
                </Typography>
              </CardContent>
              <CardActions color="yellow">
                {/* <Button size="medium">Buy now</Button> */}
                <Button
                  style={{
                    border: "2px solid ",
                    width: "100%",
                    borderRadius: "250px",
                    display: "flex",
                    justifyContent: "space-between",
                    borderWidth: ".02rem",
                    borderColor: "#B5CB99",
                  }}
                  onClick={() => addtoCartHandler(itm._id)}
                  size="medium"
                >
                  Add to cart
                  <AddIcon />
                </Button>
                <ToastContainer
                  position="top-left"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreProducts;
