


import { useRef } from 'react'
import '../Styles/Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import  Navbars  from '../Componets/Navbar'



 const Signup = () => {

  const ipref= useRef()
   
  const nav = useNavigate()
  const registerHandler = async() =>{

    
    
        const Name = ipref.current.name.value
       console.log("name :", Name)
        const Email= ipref.current.email.value
        console.log(Email)
         

        const Phone = ipref.current.phone_number.value
        const Password = ipref.current.password.value
       
    //  const Email = ipref.current.email.value
    //  const Username= ipref.current.userName.value
    //  const PhoneNumber = ipref.current.phoneNumber.value
    //  const Password = ipref.current.password.value
    //  const Address = ipref.current.address.value
      
     const passItems = {
            name : Name ,
           email:Email,
        //   username:Username,
           phone :Phone,
          password: Password,
        //   address : Address
         }

        console.log(passItems)
        try {
              const response= await axios.post("http://localhost:4743/user/registraion",passItems)
               
              console.log("response",response)
              const data = response
      
              console.log(
                "response",data
              )

              nav('/login')
        }
        catch(error){
          console.log("error",error)
        }
      }

 
  
  return (

    <>
      <Navbars/>
    <div className='main_div'>

      <div className='form-div'>

     

    <form onSubmit={(e)=>{e.preventDefault()}}  ref={ipref} className='registration_form'>

         <label>Name </label>

            <input name='name'   type='text' placeholder='name'/>


            <label>Email </label>

           <input  name='email'  type='Email' placeholder='Email'/>

           <label>Phone Number </label>

          <input name='phone_number'  type='number' placeholder='Phone Number'/>


         <label>Password </label>

       <input name='password'   type='text' placeholder='Password'/>

        
         
         <label>Upload your photo </label>

         <input type='file' name='file' placeholder='chood]se your image' /> 

         <label>Address </label>
         <textarea name="address" id="" cols="30" rows="4"></textarea>

    
         <div className='btn'>

<button onClick={registerHandler} className='signup'>Sign up</button>

<button  className='login'>Log in</button>


</div>

    
     </form>


  
   


    </div>

   



</div>
</>
  )
}
export default Signup