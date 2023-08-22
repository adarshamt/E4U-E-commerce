import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'

import Navbar from './Navbar'
import { useRef } from 'react'
import axios from 'axios'




  const Login = () => {

  const ipRef = useRef()

  const nav = useNavigate()
    const loginHandler = async ()=>{
  const Email = ipRef.current.email.value
  console.log("email",Email) 
  const Password = ipRef.current.password.value
  console.log(Password)


  const passitem ={
    email: Email,
    password:Password
   }
  try { 
    const response= await axios.post("http://localhost:4743/user/login",passitem)
     
    console.log("response",response)
    const data = response

    console.log(
      "response",data
    )
  }
   
      catch(error){
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
                   <input name='email'  type='Email' placeholder='Email'/>
         
                   <label>Password </label>
                   <input name='password'  type='text' placeholder='Password'/>

                   <button onClick={loginHandler} className='signup'>Log in</button>

                   <p  onClick={()=>nav('/signup')}> don't have account  <button>Register</button></p>

                </form>

          </div>




    </div>


    </div>
  )
}

export default Login