import '../Styles/Products.css'

import Navbar from '../Componets/NavbarMui'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Products = () => {


  const [data,setData] = useState([])
  // const [image,setImage]=useState('')

  const nav = useNavigate()


  const getProducts=async()=>{
    try{
      const response =     await axios.get('http://localhost:4743/products')
      
      setData(response.data.data)
      
      
     
    }catch(error){
      console.log("error",error);
    }
  }
  useEffect(()=>{

 

    getProducts()
  },[])
  
  console.log("data response ",data)


  return (
    <>
    <Navbar/>
          <h3 style={{margin:'5% 0 2% 12%',fontFamily: 'Oswald'}}> products</h3>
      <div className="supr_main_div_pdt">

   
    {data.map((itm)=>( 
      <>
    <div  className="Pdt_main_div">
    <div key={itm._id} className="container"> 
     <div  onClick={()=>nav(`/view/products/${itm._id}`)} className="card">  
           <AiOutlineHeart style={{position:'absolute',top:'5%',left:'5%',fontSize:'30px',color:'#19cf19'}}/>
       <div  className="imgBx">  
         <img src={itm.images[0]?.url} alt="orange"/>  
       </div>  
       <div  className="contentBx">  
         <h2 >{itm.productName}</h2>  
         {/* <div className="size">  
           <h3>1 kg: 100</h3>  
           <span>7</span>  
           <span>8</span>  
           <span>9</span>  
           <span>10</span>  
          </div>   */}
           <h4 style={{color:'#002bff73'}}>Price  : ₹{itm.price}</h4>  
          
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