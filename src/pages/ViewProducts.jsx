
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useEffect, useState } from 'react';
import axios from '../Services/AxiosInstance';
import { useParams } from 'react-router-dom';

import Navbar from '../Componets/Navbar'

const ViewProducts = () => {
    const {id} =useParams()
    console.log(" id :",id)

    const[data,setData] = useState([])
    const [image,setImage]=useState('')
    const getProducts=async()=>{

        try{
          const response =     await axios.get(`http://localhost:4743/product/view/${id}`)
          
          // console.log(" products res url :",response.data.data.images[0].url)

          setData(response.data.data)

          console.log(" data use state :",response.data.data)
          setImage(response.data.image.url)
          console.log("image : ",image)
        }catch(error){
          console.log("error",error);
        }
      }
      useEffect(()=>{
    
     
    
        getProducts()
      },[])




    
  return (
    <>
      <Navbar/>

    <div style={{display:'flex',height:'80vh', justifyContent:'center',alignItems:'center'}}   className="view_main_div">
    
    <Box
      sx={{
          display:'flex',
          justifyContent:'center',      
        width: '90%',
        height:'90%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Box
        sx={{
          // position: 'absolute',
          // display: 'block',
          // width: '1px',
          // bgcolor: 'warning.300',
          // left: '500px',
          // top: '-24px',
          // bottom: '-24px',
          // '&::before': {
          //   top: '4px',
            // content: '"vertical"',
            // display: 'block',
            // position: 'absolute',
            // right: '0.5rem',
            // color: 'text.tertiary',
            // fontSize: 'sm',
            // fontWeight: 'lg',
          // },
          // '&::after': {
          //   top: '4px',
          //   // content: '"horizontal"',
          //   display: 'block',
          //   position: 'absolute',
          //   left: '0.5rem',
          //   color: 'text.tertiary',
          //   fontSize: 'sm',
          //   fontWeight: 'lg',
          // },
        }}
      />

      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio  flex ratio="1" maxHeight={182} sx={{ minWidth: 400 }} >
          <img style={{padding:'2%'}}
            src={image}
            
            srcSet={image}
            loading="lazy"
            alt=" no image found"
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {data.productName}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {data.discription}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
               M.R.P 
              </Typography>
              <Typography fontWeight="lg">{data.price}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Shop
              </Typography>
              <Typography fontWeight="lg">{data.id}</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Rating
              </Typography>
              <Typography fontWeight="lg">★	★	★	☆ ☆</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Add to cart
            </Button>
            <Button variant="solid" color="primary">
              Buy now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
    </div>
    
      </>
  )

}

export default ViewProducts