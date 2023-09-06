import '../Styles/Products.css'

import Navbars from '../Componets/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {


  const [data,setData] = useState([])


  const getProducts=async()=>{
    try{
      const response =     await axios.get('http://localhost:4743/products')
      
      setData(response.data)
      
      
    }catch(error){
      console.log("error",error);
    }
  }
  useEffect(()=>{

 

    getProducts()
  },[])
  
  console.log(data)


  return (
    <>
    <Navbars/>

    {data.map((itm)=>(
      <>
    <div className="Pdt_main_div">
    <div className="container">  
     <div className="card">  
       <div className="imgBx">  
         <img src={itm.images[0].url} alt="orange"/>  
       </div>  
       <div className="contentBx">  
         <h2>Orange</h2>  
         {/* <div className="size">  
           <h3>1 kg: 100</h3>  
           <span>7</span>  
           <span>8</span>  
           <span>9</span>  
           <span>10</span>  
         </div>   */}
         <div className="color">  
           <h3>Price 1kg : 100</h3>  
           {/* <span></span>  
           <span></span>  
           <span></span>   */}
         </div>  
         <a href="#">Buy Now</a>  
       </div>  
     </div>  
   </div>  
    
   </div>
   </>
    ))}
    </>
  )
}

export default Products