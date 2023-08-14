
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
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
    </MDBCarousel>
  );
}