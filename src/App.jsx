import { Routes,Route } from "react-router-dom"
import Home from "./Componets/Home"
import Login from "./Componets/Login"
import Signup from "./pages/SignUp"


function App() {

  return (
    
    
    <Routes>

      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/signup" element ={<Signup/>}/>


    </Routes>

   
  )
}

export default App
