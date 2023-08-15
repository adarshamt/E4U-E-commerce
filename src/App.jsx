import { Routes,Route } from "react-router-dom"
import Home from "./Componets/Home"
import Login from "./Componets/Login"
import Registration from "./Componets/Registration"



function App() {
  

  return (
    <>

    <Routes>

   <Route path="/" element ={<Home/>}/>
   <Route path="/login" element ={<Login/>}/>
   <Route path="/registration" element ={<Registration/>}/>
   

    </Routes>


      
     
    </>
  )
}

export default App
