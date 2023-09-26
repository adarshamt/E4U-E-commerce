import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import Signup from "./pages/SignUp"
import Stlogin from './pages/StoreSignin'
import Store  from  "./pages/Shops"
import StoreSignup from './pages/StoreSignup'
import Products from './pages/Products'
import StoreOwer from './pages/StoreOwner'
import ViewProducts from "./pages/ViewProducts"
import Cart from "./pages/Cart"
import BoxSx from "./Componets/muiTest"
import StoreProducts from "./pages/StoreProducts"
import Wishlist from "./pages/Wishlist"
import Adminpanel from "./pages/Admin"
import { Payment } from "@mui/icons-material"
import PaymentSuccess from "./pages/PaymentSuccess"
import CheckoutForm from "./pages/checkoutForm"
// import Checkout from "./pages/Checkout"




function App() {

  return (
    
    
    <Routes>

      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<UserLogin/>}/>
      <Route path="/signup" element ={<Signup/>}/>
      <Route path="/stores" element ={<Store/>}/>
      <Route path="/storelogin" element ={<Stlogin/>}/>
      <Route path="/storesignup" element ={<StoreSignup/>}/> 
      <Route path="/products" element ={<Products/>}/> 

      <Route path="/storeowner/:id" element ={<StoreOwer/>}/> 
      <Route path="/view/products/:id" element ={<ViewProducts/>}/> 
      <Route path="/cart" element ={<Cart/>}/> 
      <Route path="/wishlist" element ={<Wishlist/>}/> 
      <Route path="/storeproducts/:id" element ={<StoreProducts/>}/> 
      <Route path="/admin" element ={<Adminpanel/>}/> 
      {/* <Route path="/user/checkout" element ={<Checkout/>}/>  */}
      <Route path="/payment" element ={<Payment/>}/> 
      <Route path="/paymentsucccess" element ={<PaymentSuccess/>}/> 
      

      <Route path="/ckeckform" element ={<CheckoutForm/>}/> 

    </Routes>

   
  )
}

export default App
