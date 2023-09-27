import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import  axios from '../Services/AxiosInstance.jsx'
import { useEffect } from 'react';
import { useState } from 'react';

import '../Styles/Admin.css'
import { Store } from '@mui/icons-material';


const pages = ['User', 'store', 'Products'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Adminpanel() {

    const [user,setuser] = useState([])
    const [stores,setstores] = useState([])
    const [products,setProducts] = useState([])

     const [userbutton, setUserButton] = useState(false);
     const [storebutton, setStoreButton] = useState(false);
     const [productbutton, setProdcutButton] = useState(false);



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

   const userHandler = () => {
    setUserButton(!userbutton);
    setStoreButton(false)
    setProdcutButton(false)

    // console.log("----------------- user butten in handler --------------",userbutton)
  };
  const storeHandler =()=>{

    setUserButton(false);
    setStoreButton(!storebutton)
    setProdcutButton(false)


  }
  const productHandler =()=>{

    setUserButton(false);
    setStoreButton(false)
    setProdcutButton(!productbutton)


  }

//  **************************** table *****************************

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#219C90',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

//   const { name,email,phoneNumber,username}= user[0]

//   console.log( name,email, phoneNumber,username)
  

//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('New user', 'email@gmail.com', "username", "phone number", ),
//   ];



//  console.log("---------------- products array ---------------",products)
  const fetchUser = async()=>{

    try {
        
        const response = await axios.get("http://localhost:4743/user/allusers")

        // console.log(" response ---------------- ", response)


        const users = response.data.Users
        // console.log("******************** users ",users)
        setuser(users)
    } catch (error) {

        console.log("error ",error)
        
    }
  }

   const userDEleteHandler = async (id)=>{

    try {

      

      const body ={
        
        user_id : id,

      }

      const response = await axios.post("http://localhost:4743/user/delteleuser",body)

      // console.log("------------------- response data",response.data.status)

      const status = response.data.status
      if( status == 200){

        fetchUser()
      }
      
    } catch (error) {
      console.log(" error ",error)
      
    }
   }

   
  const fetchStore = async()=>{

    try {
        
        const response = await axios.get("http://localhost:4743/stores/list")

        console.log(" response ---------------- stores ", response.data)


        const stores = response.data

        setstores(stores)
        // console.log("---------------- stores  array---------------",stores)

    } catch (error) {

        console.log("error ",error)
        
    }
  }

   const StoreDEleteHandler = async (id)=>{

    try {

      

      const body ={
        
        store_id : id,

      }

      const response = await axios.post("http://localhost:4743/stores/",body)

      // console.log("------------------- response data",response.data.status)

      const status = response.data.status
      if( status == 200){

        fetchStore()
      }
      
    } catch (error) {
      console.log(" error ",error)
      
    }
   }
  const fetchProduct = async()=>{

    try {
        
        const response = await axios.get("http://localhost:4743/products")

        // console.log(" response products ----------------", response.data.data[0].store_id.storName)


        const products = response.data.data
         console.log("******************** users ",products)
        setProducts(products)
    } catch (error) {

        console.log("error ",error)
        
    }
  }

   const productDEleteHandler = async (id)=>{

    try {

      

      const body ={
        
        product_id : id,

      }

      const response = await axios.post("http://localhost:4743/products",body)

      // console.log("------------------- response data",response.data.status)

      const status = response.data.status
      if( status == 200){

        fetchProduct()
      }
      
    } catch (error) {
      console.log(" error ",error)
      
    }
   }
  useEffect(()=>{
    fetchProduct()
   fetchUser()
   fetchStore()
   
  },[])

  return (
    <>
    <AppBar sx={{backgroundColor:'#618264'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <SupervisorAccountIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Admin
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography onClick={()=>userHandler()} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <SupervisorAccountIcon  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Admin
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => ( */}
              <Button
                // key={page}
                onClick={userHandler}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                User
              </Button>
              <Button
                // key={page}
                onClick={storeHandler}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Store
              </Button>
              <Button
                // key={page}
                onClick={productHandler}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Products
              </Button>
            {/* ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography onClick={()=>userHandler} textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    {/* ******************************maindisplay *************************** */}

    {/* <Box  sx={{ width:'100%',height: '100vh', overflowY: 'auto',backgroundColor:"#D0E7D2",display:'flex',alignItems:'center',
    
    justifyContent:'center'}}>

      <img src="https://www.imf.org/wp-content/uploads/2017/08/BLOG-1024x600-image-of-charts-TOP5Charts-iStock-615507200.jpg" alt="" />

     


    </Box> */}
  
    {/* ********************************************************************************************************************** */}


   {userbutton &&
  
    <Box className="user-container"  sx={{ width:'100%',height: '100vh', overflowY: 'auto',backgroundColor:"#D0E7D2",display:'flex',alignItems:'start',
    
    justifyContent:'center',padding:'5%',position:'static'}}   >

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700  }} aria-label="customized table">
        <TableHead   >
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">
               <Stack sx={{display:'flex',justifyContent:'center'}} spacing={3} direction="row">
     
      {/* <Button sx={{width:'3rem',fontSize:'.5rem',fontWeight:'300'}} variant="outlined">Block user</Button> */}
      <Button onClick={()=>userDEleteHandler(row._id)} className='dlt_btn' sx={{width:'8rem',height:'2rem',
           fontSize:'.7rem',fontWeight:'800', fontFamily:" 'Oswald', sans-serif"}} variant="outlined">Delete User</Button>
    </Stack>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Box>

  }
    {/* **********************************************   Store ************************************************************************ */}


   {storebutton &&
  
    <Box className="store-container" sx={{ width:'100%',height: '100vh', overflowY: 'auto',backgroundColor:"#D0E7D2",display:'flex',alignItems:'start',
    
    justifyContent:'center',padding:'5%',position:'static'}}  >

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700  }} aria-label="customized table">
        <TableHead   >
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            {/* <StyledTableCell align="center">Name</StyledTableCell> */}
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.storeName}
                
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.name}</StyledTableCell> */}
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">
               <Stack sx={{display:'flex',justifyContent:'center'}} spacing={3} direction="row">
     
      {/* <Button sx={{width:'3rem',fontSize:'.5rem',fontWeight:'300'}} variant="outlined">Block user</Button> */}
      <Button onClick={()=>StoreDEleteHandler(row._id)} className='dlt_btn' sx={{width:'8rem',height:'2rem',
           fontSize:'.7rem',fontWeight:'800', fontFamily:" 'Oswald', sans-serif"}} variant="outlined">Delete User</Button>
    </Stack>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Box>

  }
    {/* ************************************************** Prodducts ******************************************************************** */}


   {productbutton &&
  
    <Box  className="product-container" sx={{ width:'100%',height: '100vh', overflowY: 'auto',backgroundColor:"#D0E7D2",display:'flex',alignItems:'start',
    
    justifyContent:'center',padding:'5%',position:'static'}}  >

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700  }} aria-label="customized table">
        <TableHead   >
          <TableRow>
            <StyledTableCell align='center'>product</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Price ₹</StyledTableCell>
            <StyledTableCell align="center">Store</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='center'sx={{width:'12rem'}}  >
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align="center" >{row.category}</StyledTableCell>
              <StyledTableCell align="center"><img style={{width:'3rem',height:'3rem'}} src={row.images[0].url} alt='No image found' /></StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.store_id.storeName}</StyledTableCell>
              <StyledTableCell align="center">
               <Stack sx={{display:'flex',justifyContent:'center'}} spacing={3} direction="row">
     
      {/* <Button sx={{width:'3rem',fontSize:'.5rem',fontWeight:'300'}} variant="outlined">Block user</Button> */}
      <Button onClick={()=>productDEleteHandler(row._id)} className='dlt_btn' sx={{width:'8rem',height:'2.5rem',
           fontSize:'.7em',fontWeight:'600' }} variant="outlined">Delete Product</Button>
    </Stack>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Box>

  }


    
    </>
  );
}
export default Adminpanel;