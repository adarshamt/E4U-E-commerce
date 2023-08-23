
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
 
//   MDBTextArea
// }
// from 'mdb-react-ui-kit';
// import Navbars from './Navbar';

// import { useRef } from 'react';

// import axios from 'axios';




// function Signup() {
 
//   const ipRef = useRef()

//   const registerHandler = async() =>{
    
//     console.log("register handler function")

//   //   const Name = ipRef.current.name.value
//   //  console.log("name :", Name)
//     const Name =ipRef.current.firstName.value
//      const Email = ipRef.current.email.value
//      const Username= ipRef.current.userName.value
//      const PhoneNumber = ipRef.current.phoneNumber.value
//      const Password = ipRef.current.password.value
//      const Address = ipRef.current.address.value


//   const passItems = {
//       name : Name ,
//     email:Email,
//     username:Username,
//     phone :PhoneNumber,
//     password: Password,
//     address : Address
//   }
//   try {
//         const response= await axios.post("http://localhost:4743/user/registraion",passItems)
         
//         console.log("response",response)
//         const data = response

//         console.log(
//           "response",data
//         )
//   }
//   catch(error){
//     console.log("error",error)
//   }

//     }
//   return (
//     <>
// {/* 
//     <form onSubmit={(e)=>{e.preventDefault()}} action="" ref={ipRef}>

//        <input type="text" name='name' placeholder='name' />
//        <input type="text" name='password' placeholder='password' />

//        <button onClick={registerHandler} > Submit</button>



//     </form> */}
//     <Navbars/>


//     <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

//       <MDBRow>

//         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

//           <img src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />

//         </MDBCol>

//         <MDBCol md='6' className='position-relative'>

//           <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//           <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//           <MDBCard  className='my-5 bg-glass'>
//             <MDBCardBody ref={ipRef} onSubmit={(e)=>{e.preventDefault()}} className='p-5'>

//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput ref={ipRef} wrapperClass='mb-4' name='firstName' label='First name' id='form1' type='text'/>
//                 </MDBCol>

//                 <MDBCol col='6'>
//                   <MDBInput ref={ipRef} wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
//                 </MDBCol>
//               </MDBRow>

//               <MDBInput ref={ipRef} wrapperClass='mb-4' name='email' label='Email' id='form3' type='email'/>
//               <MDBInput ref={ipRef} wrapperClass='mb-4' name='userName' label='username' id='form4' type='text'/>
//               <MDBInput ref={ipRef} wrapperClass='mb-4' name='phoneNumber' label='phone number' id='form4' type='number'/>
              
//               <MDBInput ref={ipRef} wrapperClass='mb-4' name='password' label='Password' id='form5' type='password'/>
//               <MDBTextArea ref={ipRef} label='address' name='address' id='textAreaExample' rows={4} />

              

//               <MDBBtn onClick={registerHandler} className='w-100 mb-4' size='md'>Sign up</MDBBtn>

//               <div className="text-center">


//               </div>

//             </MDBCardBody>
//           </MDBCard>
                   
                


//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>

//     </>
//   );
// }

// export default Signup;



// import React, { useRef } from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon,
 
// }
// from 'mdb-react-ui-kit';

// function Signup() {
//   const ipRef= useRef()
   
//   const registerHandler = async() =>{

    
//         console.log("register handler function")
    
//         const Name = ipRef.current.name.value
//        console.log("name :", Name)
      
//       }


//   return (
//     <MDBContainer fluid>

//       <MDBCard ref={ipRef} className='text-black m-5' style={{borderRadius: '25px'}}>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//               <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//               <div   className="d-flex flex-row align-items-center mb-4 ">
//                 <MDBIcon fas icon="user me-3" size='lg'/>
//                 <MDBInput  name='name' label='Your Name' id='form1' type='text' className='w-100'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size='lg'/>
//                 <MDBInput label='Your Email' id='form2' type='email'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="lock me-3" size='lg'/>
//                 <MDBInput label='Password' id='form3' type='password'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="key me-3" size='lg'/>
//                 {/* <MDBInput label='Repeat your password' id='form4' type='password'/> */}
//               </div>

//               {/* <div className='mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div> */}

//               <MDBBtn onClick={registerHandler} className='mb-4' size='lg'>Register</MDBBtn>

//             </MDBCol>

//             <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//               <MDBCardImage src='https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' fluid/>
//             </MDBCol>

//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//   );
// }

// export default Signup;






import { useRef } from 'react'
import '../Styles/Signup.css'
import axios from 'axios'



 const Signup = () => {

  const ipref= useRef()
   
  const registerHandler = async() =>{

    
        console.log("register handler function")
    
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
        }
        catch(error){
          console.log("error",error)
        }
      }

 
  
  return (
    <div className='main_div'>

      <div className='form-div'>

     

    <form  ref={ipref} className='registration_form'>

         <label>Name </label>

            <input name='name'   type='text' placeholder='name'/>


            <label>Email </label>

           <input  name='email'  type='Email' placeholder='Email'/>

           <label>Phone Number </label>

          <input name='phone_number'  type='number' placeholder='Phone Number'/>


         <label>Password </label>

       <input name='password'   type='text' placeholder='Password'/>

         <label>Address </label>
         <textarea name="address" id="" cols="30" rows="4"></textarea>

     </form>

    </div>

    <div className='btn'>

      <button onClick={registerHandler} className='signup'>Sign up</button>

      <button  className='login'>Log in</button>


    </div>



</div>
  )
}
export default Signup