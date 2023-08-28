import Navbars from './Navbar'
import '../Styles/Home.css'
import Carousel from './Carousel'
import Footer from './footer'
import ProductSlider from './ProductSlider'



const Home = () => {
   
  return (
    <div className='main_container'>
       <div className='navbar_div'>
       <Navbars/>
        </div>
    
        <div style={{height:'100 vh',marginTop:'2%'}} className='body_div'>

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