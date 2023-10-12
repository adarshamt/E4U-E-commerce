import '../Styles/StoreSignin.css'
import Navbars from '../Componets/NavbarMui'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

import axios from '../Services/AxiosInstance'
import Cookie  from 'js-cookie'

import Button from '@mui/material/Button';


const StoreSignin = () => {

  const link = useNavigate()

  const ipref = useRef()

  const Submithandler = async(e)=>{

    e.preventDefault()

    const email = ipref.current.email.value
    
    const password = ipref.current.password.value

    const body = { email,password}

   


    const response = await axios.post('http://localhost:4743/store/login',body)
    
    
    
    const token = response.data.token
   


    if(token){

      Cookie.set("str_token",token)
      Cookie.set("str_id",response.data.id)

       link(`/storeowner/${response.data.id}`)
    }

     
    


  }

    
  
  return (<>
        <Navbars/>
    <div className='Main_div'>

      
        <div className="image_div">
            <img style={{width:'30rem'}} src="https://ramezshopping.com/assets/imgs/page/login-1.png" alt="" />

        </div>
        <div  className="subscription-form">
          <h2 >store Login  </h2>
          
        <form ref={ipref}>
          <input className='input' name='email'  type="email" placeholder="email" required/>
          
          <input className='input' name='password' type="password" placeholder="password" required/>
          
        </form>
        <div className="btns">
          <button onClick={Submithandler} type="submit">login</button>

          <p >Register  </p>  <Button onClick={link('/storesignup')} variant="contained" color="success">
          Sign up
      </Button> 

          </div>
      </div>


    </div>

    </>
  )
}

export default StoreSignin