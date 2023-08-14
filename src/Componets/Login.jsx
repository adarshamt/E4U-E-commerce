import '../Styles/Login.css'

const Login = () => {
  return (
    <div>
          <div className='main_div'>

<div className='form-div'>



<form  className='registration_form'>

 


      <label>Email </label>

     <input   type='Email' placeholder='Email'/>



   <label>Password </label>

 <input   type='text' placeholder='Password'/>

</form>

</div>

<div className='btn'>

<button className='signup'>Log in</button>

{/* <button onClick={()=>link("/")} className='login'>Log in</button> */}


</div>



</div>


    </div>
  )
}

export default Login