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

const StoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [storename, setStorename] = useState("");

  const { id } = useParams(); // store id ***************
  const nav = useNavigate();
  const body = {
    id,
  };
  console.log(" store id:", body);

  const getproducts = async () => {
    try {
      const response = await axios.get("http://localhost:4743/store/products", {
        params: {
          id: id,
        },
      });

      console.log(" response :", response.data.store.storName);
      setProducts(response.data.data);
      setStorename(response.data.store.storName);
    } catch (err) {
      console.log("error :", err);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);

  const addtoCartHandler = async (id) => {
    const user_id = Cookies.get("userId");

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

      console.log(
        "************* add to cart response**** ",
        response.data.status
      );

      const status_message = response.data.message;
      console.log(status_message, "*****************************");

      notify(status_message);

      // window.alert(status_message)
    } catch (error) {
      console.log(" addto cart axios error", error);
    }
  };

  return (
    <>
      <Navbarmui />
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#EDE4FF",
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
                <Button size="medium">Buy now</Button>
                <Button onClick={() => addtoCartHandler(itm._id)} size="medium">
                  Add to cart
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
