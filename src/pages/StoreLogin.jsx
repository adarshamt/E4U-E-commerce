


import Navbar from '../Componets/Navbar'
import '../Styles/StoreLogin.css'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useRef } from 'react'



export const StoreLogin = () => {
const ipref = useRef()


  const link=useNavigate()


//   const Storename = ipref.current.storename.value
//   const email = ipref.current.email.value
//   const username = ipref.current.username.value 
//   const password = ipref.current.password.value
  return (
    <>
    <Navbar/>
    <div className='main_div_str'>


        <div className="bag_img">
            <img src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg" alt="" />
        </div>


      <div className='form_div_str'>

     

    <form ref={ipref} className='registration_form_str'>

            <label> Store Name </label>
            <input  name='storename'  type='text' placeholder='Store Name'/>

           <label>Email </label>
           <input name='email'   type='Email' placeholder='Email'/>

           <label>Username </label>
           <input name='Username'   type='String' placeholder='username'/>

           <label>Phone Number </label>
           <input name='phone'   type='number' placeholder='Phone Number'/>


          <label>Password </label>
          <input name='phone'   type='text' placeholder='Password'/>
         
          <label>Address </label>
         <textarea name="address" id="" cols="30" rows="4"></textarea>
          

     </form>

      <div className='btn_div'>
      <button className='signup'>Sign up</button>
      <button onClick={()=>link("/")} className='login'>Log in</button>
      </div>





    </div>



</div>

</>
  )
}
export default StoreLogin