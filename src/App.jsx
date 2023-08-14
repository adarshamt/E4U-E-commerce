import { Routes,Route } from "react-router-dom"
import Home from "./Componets/Home"
import Login from "./Componets/Login"



function App() {
  

  return (
    <>

    <Routes>

   <Route path="/" element ={<Home/>}/>
   <Route path="/login" element ={<Login/>}/>
   

    </Routes>


      
     
    </>
  )
}

export default App
