import '../Styles/Products.css'

import Navbars from '../Componets/Navbar'

const Products = () => {
  return (
    <>
    <Navbars/>
    <div className="Pdt_main_div">
    <div className="container">  
     <div className="card">  
       <div className="imgBx">  
         <img src="/src/assets/orange.jpg" alt="orange"/>  
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
  )
}

export default Products