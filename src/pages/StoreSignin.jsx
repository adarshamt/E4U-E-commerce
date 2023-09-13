import '../Styles/StoreSignin.css'
import Navbars from '../Componets/Navbar'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

import axios from '../Services/AxiosInstance'
import Cookie  from 'js-cookie'


const StoreSignin = () => {

  const link = useNavigate()

  const ipref = useRef()

  const Submithandler = async(e)=>{

    e.preventDefault()

    const email = ipref.current.email.value
    console.log(" email :",email)
    const password = ipref.current.password.value

    const body = { email,password}

    console.log(" body data :",body)


    const respose = await axios.post('http://localhost:4743/store/login',body)
    
    console.log("login request response token :",respose)
    const remail =respose.data.email
    const token = respose.data.token

    if(token){

      Cookie.set("str_token",token)
       link(`/storeowner/${remail}`)
    }

     
    


  }

    
  
  return (<>
        <Navbars/>
    <div className='Main_div'>
        
        <div  className="subscription-form">
          
        <h2>Login <span>E4U store</span> </h2>
        <form ref={ipref}>
          <input name='email'  type="email" placeholder="email" required/>
          <input name='password' type="password" placeholder="password" required/>
          <button onClick={Submithandler} type="submit">login</button>
          
        </form>
          <p >Register  </p><button className='str_login_btn' onClick={()=>link('/storesignup')} >Sign up</button>
      </div>


    </div>

    </>
  )
}

export default StoreSignin