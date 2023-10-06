import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Sheet from "@mui/joy/Sheet";
import { useEffect, useState } from "react";
import axios from "../Services/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../Componets/NavbarMui";

import { Breadcrumbs, Stack, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { cart_counter } from "../store/ecommerse_slice";
import { useDispatch } from "react-redux";

const ViewProducts = () => {
  const { id } = useParams();
  console.log(" id :", id);

  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [pname, setPname] = useState();
  const [storename, setstorename] = useState()

  const user_id = Cookies.get("userId");

  const dispatch = useDispatch();

  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    

    const getProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4743/product/view/${id}`
        );

        // console.log(" products res url :",response.data.data.images[0].url)
        console.log(response.data.data.store_id.storeName, "response ---------------------------------");
        setData(response.data.data);
         setstorename(response.data.data.store_id.storeName)
        console.log(" data use state :", response.data.data.images[0].url);

        setImage(response.data.data.images[0].url);

        // console.log("image : ",image)
        let productname = response.data.data.productName;
        // console.log("product name :",productname)
        setPname(productname);
      } catch (error) {
        console.log("error", error);
      }
    };

    getProducts();
  }, []);

  const addtoCartHandler = async (id) => {
    const user_id = Cookies.get("userId");
    console.log(" cookie id ----------------------", user_id);

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

      setButtonClicked(true);
 
      getCartItems()


      // window.alert(status_message)
    } catch (error) {
      console.log(" addto cart axios error", error);
    }
  };

  function handleClick(event) {
    event.preventDefault();
    nav("/");
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      onClick={() => nav("/products")}
    >
      Products
    </Link>,
    <Typography key="3" color="text.primary">
      {pname}
    </Typography>,
  ];

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

      console.log(" products length ******************* ------", response.data.products.length);

      const count = response.data.products.length;
      
      dispatch(cart_counter({ count }));
    } catch (err) {
      console.log("Get cart items error", err);
    }
  };



  return (
    <>
      <Navbar />

      <div style={{ margin: "2% 0 0 2%" }} className="BreadCrumbs">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>

      <div
        style={{
          display: "flex",
          height: "75vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="view_main_div"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
            height: "80%",
            alignItems: "start",
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
            backgroundColor:'yellow',
            
          }}
        >
          <Box
            sx={
              {
                // position: 'absolute',
                // display: 'block',
                // width: '1px',
                // bgcolor: 'warning.300',
                // left: '500px',
                // top: '-24px',
                // bottom: '-24px',
                // '&::before': {
                //   top: '4px',
                // content: '"vertical"',
                // display: 'block',
                // position: 'absolute',
                // right: '0.5rem',
                // color: 'text.tertiary',
                // fontSize: 'sm',
                // fontWeight: 'lg',
                // },
                // '&::after': {
                //   top: '4px',
                //   // content: '"horizontal"',
                //   display: 'block',
                //   position: 'absolute',
                //   left: '0.5rem',
                //   color: 'text.tertiary',
                //   fontSize: 'sm',
                //   fontWeight: 'lg',
                // },
              }
            }
          />

          <Card
            orientation="horizontal"
            sx={{
              width: "100%",
              flexWrap: "wrap",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              // make the card resizable for demo
              overflow: "auto",
              resize: "horizontal",
            }}
          >
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 400 }}>
              {/* {data.length > 0 && <>{data?.images.map((image,index)=>{
            console.log(image.url)
            return(
            <img style={{padding:'2%'}}
            src={image?.url}
            key={image?.url}
            srcSet={image?.url}
            loading="lazy"
            alt=" no image found"
          /> 
          )})}</>} */}
              <img
                style={{ padding: "5%", width: "25rem", height: "25rem" }}
                src={image}
                // srcSet={data.images[0].url}

                loading="lazy"
                alt=" no image found"
              />
            </AspectRatio>
            <CardContent>
              <Typography fontSize="3rem" fontWeight="lg">
                {data.productName}
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                {data.discription}
              </Typography>
              <Sheet
                sx={{
                  bgcolor: "background.level1",
                  borderRadius: "sm",
                  p: 1.5,
                  my: 1.5,
                  display: "flex",
                  gap: 2,
                  "& > div": { flex: 1 },
                }}
              >
                <div>
                  <Typography level="body-xs" fontWeight="xl">
                    M.R.P
                  </Typography>
                  <Typography fontWeight="lg">{data.price}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Shop
                  </Typography>
                  <Typography fontWeight="lg">{storename}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Rating
                  </Typography>
                  <Typography fontWeight="lg">★ ★ ★ ☆ ☆</Typography>
                </div>
              </Sheet>
              <Box
                sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
              >
                <Button
                  onClick={() => addtoCartHandler(data._id)}
                  variant="outlined"
                  color="neutral"
                >
                  Add to cart
                </Button>
                {/* <Button variant="solid" color="primary">
                  Buy now
                </Button> */}

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
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};

export default ViewProducts;
