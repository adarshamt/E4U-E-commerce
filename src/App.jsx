import { Routes,Route } from "react-router-dom"
import Home from "./Componets/Home"
import Login from "./Componets/Login"
import Signup from "./pages/SignUp"
import Stlogin from './pages/StoreLogin'



function App() {

  return (
    
    
    <Routes>

      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/signup" element ={<Signup/>}/>
      <Route path="/storelogin" element ={<Stlogin/>}/>


    </Routes>

   
  )
}

export default App
