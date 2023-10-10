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
        
        <div  className="subscription-form">
          
        <h2>Login  </h2>
        <form ref={ipref}>
          <input name='email'  type="email" placeholder="email" required/>
          <input name='password' type="password" placeholder="password" required/>
          
        </form>
        <div className="btns">
          <button onClick={Submithandler} type="submit">login</button>

          <p >Register  </p>  <Button variant="contained" color="success">
          Sign up
      </Button> 

          </div>
      </div>


    </div>

    </>
  )
}

export default StoreSignin