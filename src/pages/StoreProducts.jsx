import Navbarmui from "../Componets/NavbarMui";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import StorefrontIcon from '@mui/icons-material/Storefront';

import axios from "../Services/AxiosInstance";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [storename, setStorename] = useState("");

  const { id } = useParams();

  const body = {
    id,
  };
  console.log(" body id:", body);

  const getproducts = async () => {
    try {
      const response = await axios.get("http://localhost:4743/store/products", {
        params: {
          id: id, // Replace with the actual id you want to send
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
  console.log(" products :", products);

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
       
        <Typography color="green" padding=" 5% 0 0 5%" fontWeight="900"  gutterBottom variant="h4" component="div">
           <  StorefrontIcon fontSize="60px" />
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
          {products.map((itm) => (
            <Card key={itm.id} sx={{ margin: "3%", maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140, margin: "5%" }}
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
                <Button size="medium">Add to cart</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreProducts;
