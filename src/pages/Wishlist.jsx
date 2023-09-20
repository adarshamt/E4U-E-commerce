import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Navbarmui from "../Componets/NavbarMui";
import { Box,Typography, Button } from "@mui/material";
import '../Styles/Wishlist.css'

import axios from '../Services/AxiosInstance'
import Cookies from "js-cookie";
import { useEffect } from "react";

// import ClearIcon from "@mui/icons-material/Clear";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function wishlist() {

  const user_id = Cookies.get("userId")
  const fechDataHandler = async()=>{

     try {
       
   
        const response = await axios.get("http://localhost:4743/user/wishlist",{
          params: { user_id },
        })

        console.log("---------response",response)
      
     } catch (error) {

      console.log("error",error)
      
     }


  }

  useEffect(()=>{
 
    fechDataHandler()

  },[user_id,fechDataHandler()])
 



  return (
    <>
      <Navbarmui />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          height: "100vh",
          paddingTop:'4rem'
        }}
        className="wish_main_div"
      >
       
        <Stack
          sx={{
            width: "60%",
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
          }}
          direction="column"
          spacing={2}
        >
            <Typography sx={{fontSize:'25px',marginBottom:'10rem'}}>
                Wish list
            </Typography>
          <Item
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "6rem", height: "6rem" }}
              src="https://www.jiomart.com/images/product/original/590000165/brinjal-purple-striped-500-g-product-images-o590000165-p590000165-0-202203151524.jpg?im=Resize=(360,360)"
              alt=""
            />
            <Typography>Product name</Typography>
          
          
            <Box sx={{display:'flex',justifyContent:'space-between', width:'15rem'}}>

            <Button className="err-btton" color="error" variant="outlined">
                remove
            </Button>
            <Button className="add-btton" color='success' variant="outlined">
                Add To cart
            </Button>
            </Box>

            
          </Item>
        </Stack>
      </div>
    </>
  );
}
