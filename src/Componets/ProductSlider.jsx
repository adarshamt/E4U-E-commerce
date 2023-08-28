

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ProductSlider= ()=>{



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 return( 
    <>
  <Carousel responsive={responsive}>
    <div> <img src="https://www.jiomart.com//images/product/original/491934236/clinic-plus-strong-long-health-shampoo-1-l-product-images-o491934236-p590317996-0-202203151906.jpg?im=Resize=(150,150)" alt="asd" /></div>
    <div> <img src="https://www.jiomart.com//images/product/original/491278605/prabhat-cow-ghee-1-l-pouch-product-images-o491278605-p590087550-0-202203151615.jpg?im=Resize=(150,150)" alt="" /></div>
    <div><img src="https://www.jiomart.com//images/product/original/491252835/tide-jasmine-rose-detergent-powder-5-kg-get-extra-1-kg-free-product-images-o491252835-p590838653-0-202203151949.jpg?im=Resize=(150,150)" alt="" /></div>

    <div><img src="https://www.jiomart.com//images/product/original/491696497/del-monte-tomato-ketchup-1-1-kg-product-images-o491696497-p590126648-0-202304271751.jpg?im=Resize=(150,150)" alt="" /></div>
    <div><img src="https://www.jiomart.com//images/product/original/491696497/del-monte-tomato-ketchup-1-1-kg-product-images-o491696497-p590126648-0-202304271751.jpg?im=Resize=(150,150)" alt="" /></div>
    <div><img src="https://www.jiomart.com//images/product/original/491696497/del-monte-tomato-ketchup-1-1-kg-product-images-o491696497-p590126648-0-202304271751.jpg?im=Resize=(150,150)" alt="" /></div>
    <div><img src="https://www.jiomart.com//images/product/original/491696497/del-monte-tomato-ketchup-1-1-kg-product-images-o491696497-p590126648-0-202304271751.jpg?im=Resize=(150,150)" alt="" /></div>
    <div><img src="https://www.jiomart.com//images/product/original/491696497/del-monte-tomato-ketchup-1-1-kg-product-images-o491696497-p590126648-0-202304271751.jpg?im=Resize=(150,150)" alt="" /></div>
  </Carousel>;
  </>
 )
}

export default ProductSlider