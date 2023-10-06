import "../Styles/Products.css";

import Navbar from "../Componets/NavbarMui";
import { useEffect, useState } from "react";
import axios from "axios";

import { AiOutlineHeart } from "react-icons/ai";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

import { Breadcrumbs, Stack, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Cookies from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { wishlist_counter } from "../store/ecommerse_slice";

const Products = () => {
  const [data, setData] = useState([]);
  // const [image,setImage]=useState('')

  const [wishlist, setWishlist] = useState([]);

  const nav = useNavigate();
  const user_id = Cookies.get("userId");
  
  const dispatch =useDispatch() 
   
  

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4743/products");

      setData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getProducts();
    if(user_id){
    getWishlist();
    }
  }, [user_id]);
 
  const getWishlist = async () => {
    try {
    
      const response = await axios.get(`http://localhost:4743/user/wishlist`, {
        params: { user_id },
      });
      console.log(
        "*************** wishlist response products ----------------------------*************",
        response.data.products.length
      );
      const count = response.data.products.length
      dispatch(wishlist_counter({count}))
      
      setWishlist(response.data.ids); // Store the user's wishlist data in state
    } catch (error) {
      console.log("wishlist error", error);
    }
  };
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item === productId);
  };

  function handleClick(event) {
    event.preventDefault();
    nav("/");
  }

  const notify = (msg) => toast(msg);

  const addtowishlist = async (id) => {
    
    try {
      
      const product_id = id;
      const body = {
        user_id,
        product_id,
      };

      const response = await axios.post(
        "http://localhost:4743/user/addtowishlist",
        body
      );
      notify(response.data.message);
      getWishlist();
      console.log(
        " add to wishlist response------------",
        response.data.message
      );
    } catch (error) {
      console.log(" add to wishlist error", error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {

      
      const body = {
        user_id,
        product_id: id,
      };

      const response = await axios.post(
        "http://localhost:4743/user/wishlistremoveitem",
        body
      );

      console.log(" response------------------", response.data.message);
      notify(response.data.message);


      getWishlist();
    } catch (error) {
      console.log("error :", error);
    }
  };


  const fechDataHandler = async () => {
    try {
      const response = await axios.get("http://localhost:4743/user/wishlist", {
        params: { user_id },
      });

      console.log(
        "---------response products ------------",
        response.data.products.length
      );
      const count =response.data.products.length


      dispatch(wishlist_counter({count}))

    } catch (error) {
      console.log("error", error);
    }
  };

  const breadcrumbs = [
    
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      Products
    </Typography>,
  ];


 

  return (
    <>
      <Navbar />
      <div style={{ margin: "3%" }} className="BreadCrumbs">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <h3 style={{ margin: "5% 0 2% 12%", fontFamily: "Oswald" }}> products</h3>
      <div className="supr_main_div_pdt">
        {data.map((itm) => (
          <>
          <Link>
            <div key={itm._id} className="Pdt_main_div">
              <div  className="container">
                <div className="card">
                  <div
                    style={{
                      width: "2rem",
                      zIndex: "10000",
                      height: "3rem",
                      position: "absolute",
                      top: "5%",
                      left: "5%",

                      color: "red",
                    }}
                  >
                    {isProductInWishlist(itm._id) ? (
                      <FavoriteIcon
                        style={{
                          position: "absolute",
                          top: "5%",
                          left: "5%",
                          fontSize: "30px",
                          colo33r: "red",
                        }}
                      onClick={() => removeFromWishlist(itm._id)}

                        />
                        ) : (
                      <AiOutlineHeart
                        style={{
                          position: "absolute",
                          top: "5%",
                          left: "5%",
                          fontSize: "30px",
                          color: "red",
                        }}
                      onClick={() => addtowishlist(itm._id)}
                      />
                    )}
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
                  </div>
                  <div
                    onClick={() => nav(`/view/products/${itm._id}`)}
                    className="imgBx"
                  >
                    <img src={itm.images[0]?.url} alt="orange" />
                  </div>
                  <div className="contentBx">
                  {itm.productName.length > 10
                 ?<h3>{ itm.productName.substring(0, 18) }</h3>
                  : <h3>{ itm.productName} </h3>}
                    {/* <div className="size">  
           <h3>1 kg: 100</h3>  
           <span>7</span>  
           <span>8</span>  
           <span>9</span>  
           <span>10</span>  
          </div>   */}
                    <h4 style={{ color: "#002bff73" }}>Price : ₹{itm.price}</h4>

                    {/* <a href="#">Buy Now</a> */}
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
