import '../Styles/Products.css'

import Navbars from '../Componets/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { AiOutlineHeart } from 'react-icons/ai';

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
  
  console.log("data response",data)


  return (
    <>
    <Navbars/>
          <h3 style={{margin:'5% 0 2% 12%',fontFamily: 'Oswald'}}> products</h3>
      <div className="supr_main_div_pdt">

    {data.map((itm)=>(
      <>
    <div className="Pdt_main_div">
    <div className="container">  
     <div className="card">  
           <AiOutlineHeart style={{position:'absolute',top:'5%',left:'5%',fontSize:'30px',color:'#19cf19'}}/>
       <div className="imgBx">  
         <img src={itm.images[0].url} alt="orange"/>  
       </div>  
       <div className="contentBx">  
         <h2 >{itm.productName}</h2>  
         {/* <div className="size">  
           <h3>1 kg: 100</h3>  
           <span>7</span>  
           <span>8</span>  
           <span>9</span>  
           <span>10</span>  
          </div>   */}
           <h4 style={{color:'#002bff73'}}>Price  : ₹{itm.price}</h4>  
         <div className="color">  
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
    </div>
    </>
  )
}

export default Products