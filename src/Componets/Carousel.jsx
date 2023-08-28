
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1691950286_Freedom_to_save_more_on_Beauty_and_Personalcare.jpg?im=Resize=(1680,320)'
        alt='...'
      >
      
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1691935239_Freedom_Finds.jpg?im=Resize=(1680,320)'
        alt='...'
      >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1691935181_Freedom_From_High_Prices_Kitchenware_Range_.jpg?im=Resize=(1680,320)'
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1692640422_Oral_Care_Fest_Without_Logo_Desktop.jpg?im=Resize=(1680,320)'
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>

     {/* *********************************** carousel break ************************** */}
    <MDBCarousel  style={{margin:"2%"}} showIndicators showControls fade>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={5}
      src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1692820219_Rakhi_special_delight_Desktop.jpg?im=Resize=(1680,320)'
    >
    
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={6}
      src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1692180619_Delicious_Deals_Savor_the_Savings_Desktop.jpg?im=Resize=(1680,320)'
      alt='...'
    >
     
    </MDBCarouselItem>

    <MDBCarouselItem
      className='w-100 d-block'
      itemId={7}
      src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1690827231_Shop_For_Monthly_Essentials_Desktop.jpg?im=Resize=(1680,320)'
      alt='...'
    >
    </MDBCarouselItem>
    <MDBCarouselItem
      className='w-100 d-block'
      itemId={8}
      src='https://www.jiomart.com/images/cms/aw_rbslider/slides/1692821627_Shop_For_Monthly_Essentials_Desktop.jpg?im=Resize=(1680,320)'
      alt='...'
    >
    </MDBCarouselItem>
  </MDBCarousel>
  </>
  );
}
