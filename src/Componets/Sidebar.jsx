import { useNavigate } from "react-router-dom";
import "../Styles/Sidebar.css";

import { logout, sidebar_hide } from "../store/ecommerse_slice";

import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

import Cookies from "js-cookie";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from '@mui/icons-material/Widgets';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const Sidebar = () => {
  const dispatch = useDispatch();


  const token = Cookies.get("token");
  const user= Cookies.get("userName")



  const data = useSelector((state) => state.E4U_slice);
 

  const nav = useNavigate();

  const logoutHandler = () => {
    // localStorage.clear()
    Cookies.remove("token");
    Cookies.remove("userId");
    Cookies.remove("userName");

    console.log("store data", data);
    dispatch(sidebar_hide())
    dispatch(logout());
    
    
  };




  return (
    <div className="main_sidebar">
      <div className="sidebar">
        <div
          className="side_nav"
         
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <ArrowBackIosIcon  onClick={() => dispatch(sidebar_hide())} /> {token &&  <h5 style={{color:'#fff'}} > hello  { user.substring(0, 5)}&nbsp;!</h5>}
        </div>
        <div className="side_content">
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: '1px solid #ccc'}}>
            <h2  onClick={() => nav("/")}>
             
              <HomeIcon /> Home
            </h2>
          </div>
          {/* <div style={{marginTop:'1rem',borderBottom: '1px solid #ccc'}}>

          <h2 >Categories</h2>
          </div> */}
          <ul>
           
              <li onClick={()=>nav('/wishlist')} ><LoyaltyIcon/> Wishlist</li>
              <li > <WidgetsIcon/> My Orders</li>
              
              <li ><AutoAwesomeIcon/> Offers</li>
            
          </ul>
        </div>
          {token ? (
            <Button sx={{width:'60%',backgroundColor:'red',margin:'3rem'}}  onClick={logoutHandler}  variant="contained" disableElevation>
              {" "}
              log out{" "}
            </Button>
          ) : null}
      </div>
      <div
        onClick={() => dispatch(sidebar_hide())}
        className="free_space"
      ></div>
    </div>
  );
};

export default Sidebar;
