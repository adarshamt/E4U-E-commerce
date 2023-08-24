
import { useNavigate } from 'react-router-dom';
import '../Styles/Sidebar.css'



const Sidebar = () => {

    const nav = useNavigate()
  const categories = ['My Orders', 'Wishlist', 'Books', 'Beauty'];

  return (
    <div className="sidebar">
        <h2 onClick={()=>nav('/')} >Home</h2>
        <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
