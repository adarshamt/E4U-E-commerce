import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';


import MoreIcon from '@mui/icons-material/MoreVert';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StoreIcon from '@mui/icons-material/Store';
import Tooltip from '@mui/material/Tooltip';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie'
import {cart_counter, sidebar_show, wishlist_counter} from '../store/ecommerse_slice.jsx'
import Sidebar from './Sidebar.jsx';
import { FcApproval } from 'react-icons/fc';

import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Cookies from 'js-cookie';

import axios from '../Services/AxiosInstance.jsx'
import '../Styles/Navbar.css'

 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


<style></style>


// **************** Start *******************
export default function Navbarmui(   ) {
  const data= useSelector(state=>state.E4U_slice)
  console.log(" redux data :",data)

  const nav = useNavigate()

  const dispatch = useDispatch()

  const checkToken = Cookie.get("token")
  console.log("check token",checkToken)


   




  const sidebarHandler = ()=>{



    dispatch( sidebar_show())
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  
   
  };

  const CartHanlder = ()=>{

    if(!checkToken){
      window.alert(" Please login to see your cart")
    return  nav('/login')
    }
    
    nav('/cart')


  } 

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        
      {(!checkToken)? < Button
       style={{backgroundColor:'transparent',color:'black',width:'100%',padding:'0',margin:'0',boxShadow:'unset',fontSize:'1rem'}}
      onClick={()=>nav('/login')} > login  </Button>  : <span> Active <FcApproval/></span> }
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={()=>nav('/storelogin')} >
      <IconButton  size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                <StoreIcon />
              </Badge>
            </IconButton>
        <p>Store Login</p>
      </MenuItem>
      <MenuItem onClick={()=>nav('/wishlist')}>
      <Tooltip title='  Wish list' >
            <IconButton  size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={data.wishlist_count} color="error">
                <FavoriteIcon  />
              </Badge>
            </IconButton>
            </Tooltip>
        <p>Wishlist</p>
      </MenuItem>


      <MenuItem  onClick={CartHanlder}>
      
      <Tooltip title="Cart">
            <IconButton
             
              size="large"
              aria-label="show 0 new notifications"
              color="inherit"
            >
              <Badge badgeContent={data.cart_count} color="error">
                
            <ShoppingCartIcon/>
              </Badge>
            </IconButton>
           </Tooltip>
        <p>Cart</p>
      </MenuItem>
      <MenuItem   onClick={handleProfileMenuOpen} >
      <Tooltip title=" user">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Tooltip>
      
        <p>User Login</p>
      </MenuItem>
    </Menu>
  );


  const [searchText, setSearchText] = useState('')
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Your function to execute when Enter key is pressed

      
      nav(`/search/${searchText} `)
    }
  };
  const handleInputChange = (event) => {
    setSearchText(event.target.value); // Update the searchText state when input changes
  };

  const user_id = Cookies.get("userId");

   
  const cartCounter = async ()=>{
    try {
      const response = await axios.get(
        "http://localhost:4743/user/cart/products",
        {
          params: {
            id: user_id,
          },
        }
      );

      

      const count = response.data.products.length

      dispatch(cart_counter({count}))

      


  }
  catch (err) {
  console.log("Get cart items error", err);
}
}
const fechDataHandler = async () => {
  try {
    const response = await axios.get("http://localhost:4743/user/wishlist", {
      params: { user_id },
    });

    const count = response.data.products.length;

    
    dispatch(wishlist_counter({ count }));
  } catch (error) {
    console.log("error", error);
  }
};

React.useEffect(()=>{
  cartCounter()
  fechDataHandler()
},[])



  return (<>
    { (data.sidebar == true)?<Sidebar/>:null}   
    <Box sx={{ flexGrow: 1, backgroundColor:'red'}}>
      <AppBar sx={{backgroundColor:'#419197'}} position="static">
        <Toolbar>
          <IconButton
          onClick={sidebarHandler}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
          onClick={()=>nav('/')}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            E4U
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
                   onKeyDown={handleKeyDown}
                   onChange={handleInputChange}
                   value={searchText}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Tooltip title='Store login' >
            <IconButton onClick={()=>nav('/storelogin')} size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="error">
                <StoreIcon />
              </Badge>
            </IconButton>
            </Tooltip>

            
            <Tooltip title='Wish list' >
            <IconButton onClick={()=>nav('/wishlist')} size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={data.wishlist_count} color="error">
                <FavoriteIcon  />
              </Badge>
            </IconButton>
            </Tooltip>

          

            <Tooltip title="Cart">
            <IconButton
              onClick={CartHanlder}
              size="large"
              aria-label="show 0 new notifications"
              color="inherit"
            >
              <Badge badgeContent={data.cart_count} color="error">
                {/* <NotificationsIcon /> */}
            <ShoppingCartIcon/>
              </Badge>
            </IconButton>
           </Tooltip>

           <Tooltip title=" user">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <>
    {/* *************************************** */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'#12486B'}} position="static">
        <Toolbar style={{marginLeft:'5%'}} variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography className='product_button' onClick={()=>nav('/products')} variant="h6" color="inherit" component="div">
           Products
          </Typography>
          
          <Typography className='product_button' onClick={()=>nav('/stores')} style={{marginLeft:'5%'}} variant="h6" color="inherit" component="div">
           Store
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
    </>
  );
}