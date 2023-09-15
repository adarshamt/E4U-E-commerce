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
      <Route path="/storeproducts/:id" element ={<StoreProducts/>}/> 
      

      <Route path="/muitest" element ={<BoxSx/>}/> 

    </Routes>

   
  )
}

export default App
