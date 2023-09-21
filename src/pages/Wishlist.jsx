import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Navbarmui from "../Componets/NavbarMui";
import { Box,Typography, Button } from "@mui/material";
import '../Styles/Wishlist.css'

import axios from '../Services/AxiosInstance'
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import Products from "./Products";

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

  const [product,setProduct]=useState([])

  console.log(" +++++++++++++++++++++ user id +++++++++++++",user_id)
  const fechDataHandler = async()=>{

     try {
       
   
        const response = await axios.get("http://localhost:4743/user/wishlist",{
          params: { user_id },
        })

        console.log("---------response products ------------",response.data.products)

        setProduct(response.data.products)

      
     } catch (error) {

      console.log("error",error)
      
     }


  }

  const removeFromWishlist =async(id)=>{


    try {
      

      const body ={

        user_id,
        product_id:id
      }
    
      const response = await axios.post("http://localhost:4743/user/wishlistremoveitem",body)

      console.log(" response------------------",response)

      fechDataHandler()

      
    } catch (error) {

      console.log("error :",error)
      
    }


  }


  const addToCart = async(id)=>{

    if(! user_id){

      window.alert(" Please log in to add to cart")
      nav('/login')
     }
     
  
      const body = {
        user_id,
        product_id:id
  
      }
      
  
      try {
        
        const response = await axios.post('http://localhost:4743/user/addtocart',body)
  
        console.log("************* add to cart response**** ",response.data.status)
  
        const status_message = response.data.message
        console.log(status_message,"*****************************")
  
        window.alert(status_message)
  
  
        
  
      } catch (error) {
        console.log(" addto cart axios error",error)
        
      }



  }

  useEffect(()=>{
 
    fechDataHandler()

  },[])
 



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
        {product.map((itm,index)=>(

          <Item key={index}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "6rem", height: "6rem" }}
              src={itm.images[0].url}
              alt=""
            />
            <Typography>{itm.productName}</Typography>
          
          
            <Box sx={{display:'flex',justifyContent:'space-between', width:'15rem'}}>

            <Button onClick={()=>removeFromWishlist(itm._id)} className="err-btton" color="error" variant="outlined">
                remove
            </Button>
            <Button onClick={()=>addToCart(itm._id)} className="add-btton" color='success' variant="outlined">
                Add To cart
            </Button>
            </Box>

            
          </Item>
            ))}
        </Stack>

      </div>
    </>
  );
}
