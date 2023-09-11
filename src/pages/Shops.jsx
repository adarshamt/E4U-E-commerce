// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

import Navbar from '../Componets/Navbar'

import '../Styles/Store.css'
import axios from '../Services/AxiosInstance';
import { useEffect, useState } from 'react';

const Shops = () => {

  const [data,setData] = useState([])


  const getStores=async()=>{
    try{
      const response =     await axios.get('http://localhost:4743/stores/list')
      
      setData(response.data)
      

      
    }catch(error){
      console.log("error",error);
    }
  }
  useEffect(()=>{

 

    getStores()
  },[])

  // console.log("store response data",data[0].image[0][0].url)

  //  const photo = data[0].image[0][0].url

      // console.log("photo :",photo)
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

{/* ***************** stors display ************** */}
   


   <div className="list_container">

         <h2 >Grocery</h2>
           <div  className="grocery_div">
   {data.filter((item) =>item.category=='Grocery').map((itm)=>(
    <>
    
                 <Card key={itm.id} style={{ width: '18rem',padding:'3%',border:'1px solid #e0e0e0',backgroundColor:'transparent',
                                borderRadius:'24px' }}>
                    <Card.Img variant="top" src={itm.image[0][0].url} />
                     <Card.Body>
                       <Card.Title>
                         {/* {itm.storName } */}
                         STORE NAME
                         
                         </Card.Title>
                         <Card.Text>
             
                         </Card.Text>
                           <button >Shop now</button>
                       </Card.Body>
                   </Card>
             </>
          ))}
             </div>

             <h2 >FRUITS</h2>
           <div  className="fruits_div">
   {data.filter((item) =>item.category=='Fruits').map((itm)=>(
    <>
    
                 <Card key={itm.id} >
                    <Card.Img variant="top" src={itm.image[0][0].url} />
                     <Card.Body>
                       <Card.Title>
                         {itm.userName}
                         {/* STORE NAME */}
                         
                         </Card.Title>
                         <Card.Text>
             
                         </Card.Text>
                           <button >Shop now</button>
                       </Card.Body>
                   </Card>
             </>
          ))}
             </div>

   </div>

    </div>
    </>
  )
}

export default Shops