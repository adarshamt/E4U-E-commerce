import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import Signup from "./pages/SignUp"
import Stlogin from './pages/StoreSignin'
import Store  from  "./pages/Shops"
import StoreSignup from './pages/StoreSignup'
import Products from './pages/Products'
import StoreOwer from './pages/StoreOwner'




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

      <Route path="/storeowner" element ={<StoreOwer/>}/> 

    </Routes>

   
  )
}

export default App
