import '../Styles/Login.css'

import Navbar from './Navbar'

const Login = () => {
  return (
    <div>

      <Navbar/>


      
   <div className='main_div'>

    <div>
      <img src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
    </div>

         <div className='form-div'>



                <form  className='registration_form'>

                    <label>Email </label>

                   <input   type='Email' placeholder='Email'/>



                  <label>Password </label>

                   <input   type='text' placeholder='Password'/>

                   <button className='signup'>Log in</button>
                </form>

          </div>




</div>


    </div>
  )
}

export default Login