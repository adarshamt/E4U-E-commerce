


import Navbar from '../Componets/Navbar'
import '../Styles/StoreSignup.css'

import { useNavigate } from 'react-router-dom'

// import axios from 'axios'
import { useRef } from 'react'



export const StoreLogin = () => {
  
const ipref = useRef()


  const link=useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = ipref.current;
    const storeData = {
      storename: form.storename.value,
      email: form.email.value,
      username: form.username.value,
      password: form.password.value,
      phone: form.phone.value,
      address: form.address.value,
    };
    console.log("store data ",storeData)

    link('/storesignin')

}
//   const Storename = ipref.current.storename.value
//   const email = ipref.current.email.value
//   const username = ipref.current.username.value 
//   const password = ipref.current.password.value
  return (
    <>
    <div className="str_navbar">
        <Navbar/>

    </div>
    <div className='main_div_str'>


        <div className="bag_img">
            <img src="https://o.remove.bg/downloads/3cadb6c5-4193-45b2-be07-cf5ccf69cc2a/shop-with-sign-we-are-open_52683-38687-removebg-preview.png" alt="" />
        </div>


   <div className='form_div_str'>

     

     <form ref={ipref} className='signup_form_str'>

            {/* <label> Store Name </label> */}
            <input  name='storename'  type='text' placeholder='Store Name'/>

           {/* <label>Email </label> */}
           <input name='email'   type='Email' placeholder='Email'/>

           {/* <label>Username </label> */}
           <input name='Username'   type='String' placeholder='username'/>

           {/* <label>Phone Number </label> */}
           <input name='phone' style={{textDecoration:'none'}}   type='number' placeholder='Phone Number'/>


          {/* <label>Password </label> */}
          <input name='phone'   type='text' placeholder='Password'/>
         
          {/* <label>Address </label> */}
         <textarea style={{border:'none',resize:'none'}} name="address" id="" cols="35" rows="4"></textarea>
          
      <div className='btn_div'>
      <button onClick={handleSubmit} className='signup'>Sign up</button>
      <button onClick={()=>link("/storelogin")} className='login'>Log in</button>
      </div>

     </form>

  </div>



</div>

</>
  )
}
export default StoreLogin