
import Navbar from "../Componets/NavbarMui"
import '../Styles/Cart.css'

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import {Card,CardContent,TextField,Typography} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Cookies from "js-cookie";
import axios from "../Services/AxiosInstance";
import { useEffect } from "react";




const Cart = () => {
 

    let products =[]
    
  const getCartItems = async ()=>{

    try{

    const user_id =Cookies.get("userId")


    const response = await axios.get("http://localhost:4743/user/cart/products", {
      params: {
        id:user_id
      },
    })
        
   products = response.data.products
    console.log( "STATE products +++++++++++++ ",products)
   

  }
  catch(err){

    console.log("Get cart items error",err)
  }
}

         useEffect(()=>{

          getCartItems()
        },[])

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
        
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));

  return (
    <>
        <Navbar/>
    <div style={{margin:'3% 0 0 5%'}} className="cart_maindiv">
        <h2 style={{marginLeft:'6%'}}> My Cart</h2>
    <div className="cart_subdiv">

        <Box  sx={{ width: '50%', padding:'2%'}}>
             <Stack spacing={6}>
   { products.map((itm,index)=>(
    <>
   
    <img key={index} src={itm.images[0].url} alt="" />

    <h2>{itm.productName}</h2>
    </>
           
        //      <Item key={index} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
             
        //  <img style={{width:'70px',height:'90px'}} src={itm.images[0].url} alt=" no image found" />
        //  <Typography component={'span'} variant="h6"> {itm.productName}</Typography>
        //   <RemoveCircleIcon/>
        //  <TextField 
        //  style={{width:'50px'}}
         
        //    value={2}
        //  />
        //  <AddCircleIcon/>

        //  <TextField style={{width:'100px'}} id="standard-basic" variant="standard" />
        //      </Item>
              
))}
        </Stack>
    </Box>
    <Box   sx={{ width: '50%', padding:'2%'}}>

    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 70 }} aria-label="spanning table">
        {/* <TableHead>
          
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            
          </TableRow>
        </TableHead> */}
        <TableBody>
      
            <TableRow >
              <TableCell>MRP Total</TableCell>
              <TableCell align="right">0000</TableCell>
      
            </TableRow>
            <TableRow >
              <TableCell>Discount</TableCell>
              <TableCell align="right">0000</TableCell>
      
            </TableRow>
            <TableRow >
              <TableCell>Delivery Fee</TableCell>
              <TableCell align="right">0000</TableCell>
      
            </TableRow>
      
          <TableRow>
            
            <TableCell >total</TableCell>
            <TableCell align="right">25144</TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
       </div>

    </div>
    </>



  )
}

export default Cart