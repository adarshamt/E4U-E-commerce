// import Navbars from '../Componets/Navbar'
import '../Styles/Home.css'
import Carousel from '../Componets/Carousel'
import Footer from '../Componets/footer'
import ProductSlider from '../Componets/ProductSlider'

import Navbarmui from'../Componets/NavbarMui'



const Home = () => {
   
  return (
    <div className='main_container'>
       <div className='navbar_div'>
       {/* <Navbars/> */}
       <Navbarmui/>
        </div>
    
        <div style={{height:'100 vh',marginTop:'0%'}} className='body_div'>

            <Carousel/>
        
          <div style={{margin:'5%'}} className="product_slider_div">

            <ProductSlider/>

          </div>

        </div>

     
      <Footer/>

      </div>
  )
}

export default Home