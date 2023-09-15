import React, { useState } from 'react'
import Navbarmui from '../Componets/NavbarMui'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from '../Services/AxiosInstance'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const StoreProducts = () => {

    const [storename,setStorename]= useState('')

    const {id}=useParams()
    console.log(" params id:",id)

    const getproducts = async ()=>{
        
        try{

    const response = await axios.get(`http://localhost:4743/store/products/${id}`)

    console.log(" response :",response)

    }
    catch(err){

        console.log("error :",err)
    }

}
    useEffect(()=>{
    
     
    
        getproducts()
      },[])

   
  

  return (<>
        <Navbarmui/>
 <div style={{width:'100%',height:'auto'}} className='str_dsply_pdts'>
     <div style={{padding:'2%',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}} className="str_sub_div">
         
           <Card sx={{ marginBottom:'3%', maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 140 }}
                 image="/static/images/cards/contemplative-reptile.jpg"
                 title="green iguana"
                 />
                 <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {id}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                   Lizards are a widespread group of squamate reptiles, with over 6,000
                     species, ranging across all continents except Antarctica
                         </Typography>
                         </CardContent>
                            <CardActions>
                     <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                         </CardActions>
                          </Card>
       
           
       


    </div>

    </div>
    </>
  )
}

export default StoreProducts