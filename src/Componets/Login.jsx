import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'

import Navbar from './Navbar'
import {  useRef } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/ecommerse_slice'






  const Login = () => {

    

  const ipRef = useRef()

   const nav = useNavigate()
   const dispatch =useDispatch()

   const store_data = useSelector(state=>state.E4U_slice)

    const loginHandler = async ()=>{

      
      
      const email = ipRef.current.email.value
      console.log("email",email) 
      const password = ipRef.current.password.value
      console.log(password)


      const body ={
         email,
        password
      }
      try { 
        const response= await axios.post("http://localhost:4743/user/login",body)
        
        console.log("response",response)
        const data = response
        if (data.data.status == "success"){
          
          dispatch(login())

          
      

       console.log("response data email",store_data)
       nav('/')

       
     console.log("login after message",Login)
        
        }
  }
   
      catch(error){
      window.alert('wrong credentials')
       console.log("error",error)
          }
     }
  
    
  return (
    <div>

      <Navbar/>


      
   <div className='main_divs'>

    <div>
      <img src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
    </div>

         <div className='form-div'>



                <form  ref={ipRef}  onSubmit={(e)=>{e.preventDefault()}} className='registration_form'>

                   <label>Email </label>
                   <input name='email'  type='email' placeholder='Email'/>
         
                   <label>Password </label>
                   <input name='password'  type='password' placeholder='Password'/>

                   <button onClick={loginHandler} className='signup'>Log in</button>

                   <p  onClick={()=>nav('/signup')}> create an Account  <button>Register</button></p>

                </form>

          </div>




    </div>


    </div>
  )
}

export default Login