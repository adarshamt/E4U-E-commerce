
import { useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css'

import { login, logout, sidebar_hide } from '../store/ecommerse_slice';

import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


const Sidebar = () => {

  const dispatch = useDispatch()

    const nav = useNavigate()
  const categories = ['My Orders', 'Wishlist', 'Books', 'Beauty'];

  return (
    <>
    <div className="sidebar">
        <h2 onClick={()=>nav('/')} >Home</h2> <span onClick={()=>dispatch(sidebar_hide())}><GrClose/></span>
        <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <Button onClick={()=>dispatch(logout())} className='logout_btn'> log out </Button>
       
    </div>
    
    </>
  );
};

export default Sidebar;
