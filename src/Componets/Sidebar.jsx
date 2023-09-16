
import { useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css'

import {  logout, sidebar_hide } from '../store/ecommerse_slice';

import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';


import Cookies from 'js-cookie';


const Sidebar = () => {

  const dispatch = useDispatch()
    
   const data = useSelector(state=>state.E4U_slice)
   console.log(" redux state :",data)

    const nav = useNavigate()
    

     const logoutHandler = ()=>{

      // localStorage.clear()
      Cookies.remove('token')
      Cookies.remove('userId')
      
      console.log("store data",data)
      dispatch(logout())
        

     }
  const categories = ['My Orders', 'Wishlist', 'Books', 'Beauty'];

  return (
    <div className='main_sidebar'>
    <div className="sidebar">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h2 onClick={()=>nav('/')} >Home</h2> <span onClick={()=>dispatch(sidebar_hide())}><GrClose/></span>
        </div>
        <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      {
       (data.login ==true)? <Button onClick={logoutHandler} className='logout_btn'> log out </Button>:null
      }
     
    </div>
    <div onClick={()=>dispatch(sidebar_hide())} className="free_space">
      

    </div>
    
    </div>
  );
};

export default Sidebar;
