import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

import Navbar from '../Componets/Navbar'

import '../Styles/Store.css'

const Shops = () => {
  return (
    <>
  <Navbar/>
    <div className='store_main_container'>

    
  <div className='sidebar_main'>

    <h3>category</h3>

         <ListGroup>
             <ListGroup.Item disabled>Grocery</ListGroup.Item>
            <ListGroup.Item>Fruits & Vegitabels</ListGroup.Item>
            <ListGroup.Item>Fish & Meat</ListGroup.Item>
            <ListGroup.Item>Backeries</ListGroup.Item>
         </ListGroup>

    </div>




   <div className="list_container">
    <h2>grocery stores</h2>
    <div className="grocery_div">
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" />
             <Card.Body>
            <Card.Title>M Traders</Card.Title>
              <Card.Text>
             
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/3136/PNG/512/shop_open_online_store_icon_192439.png" />
             <Card.Body>
            <Card.Title>Pulari Stores</Card.Title>
              <Card.Text>
                 {/* Some quick example text to build on the card title and make up the
                     bulk of the card content. */}
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/store.png" />
             <Card.Body>
            <Card.Title>kalathil Stor</Card.Title>
              <Card.Text>
                
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
     </div>  

         {/* ******************* fruits an vegitables ************************** */}
            <h3>fruits shops</h3>
         <div className="fruits_div">
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" />
             <Card.Body>
            <Card.Title>AG Vegitabels</Card.Title>
              <Card.Text>
             
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/3136/PNG/512/shop_open_online_store_icon_192439.png" />
             <Card.Body>
            <Card.Title>Mint Store</Card.Title>
              <Card.Text>
               
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/store.png" />
             <Card.Body>
            <Card.Title>Famous Fruits</Card.Title>
              <Card.Text>
                
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>

         </div>   

       <h2>Fish & Meat</h2>
     <div className="meat_div">

     <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" />
             <Card.Body>
            <Card.Title>AL-Hilal Chikens</Card.Title>
              <Card.Text>
             
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/3136/PNG/512/shop_open_online_store_icon_192439.png" />
             <Card.Body>
            <Card.Title>Bismilla meats</Card.Title>
              <Card.Text>
               
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/store.png" />
             <Card.Body>
            <Card.Title>Seaway fish</Card.Title>
              <Card.Text>
                
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>

           
           


      </div>
        
        
         {/* ************Backer ************* */}

         <h2> Bakeri</h2>
         <div className="Bakery_div">

         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" />
             <Card.Body>
            <Card.Title>Anona Bakers</Card.Title>
              <Card.Text>
             
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://cdn.icon-icons.com/icons2/3136/PNG/512/shop_open_online_store_icon_192439.png" />
             <Card.Body>
            <Card.Title>Cake studio</Card.Title>
              <Card.Text>
               
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>
         <Card style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent', borderRadius:'24px' }}>
             <Card.Img variant="top" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/store.png" />
             <Card.Body>
            <Card.Title>Sangara Bakery</Card.Title>
              <Card.Text>
                
               </Card.Text>
                <button >Shop now</button>
               </Card.Body>
         </Card>

         </div>
  </div>

    </div>
    </>
  )
}

export default Shops