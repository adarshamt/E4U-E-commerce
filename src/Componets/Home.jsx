import Navbars from './Navbar'
import '../Styles/Home.css'
import Carousel from './Carousel'
import Footer from './footer'


const Home = () => {
   
  return (
    <div className='main_container'>
      <div className='navbar_div'>

      <Navbars/>
      </div>


     <div style={{height:'100 vh', backgroundColor:'yellow'}} className='body_div'>

        <Carousel/>

     </div>
     
    

      <Footer/>




        
    </div>
  )
}

export default Home