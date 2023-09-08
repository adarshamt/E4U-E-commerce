


import Navbar from '../Componets/Navbar'
import '../Styles/StoreSignup.css'


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'


import { useNavigate } from 'react-router-dom'

// import axios from 'axios'
import { useRef, useState } from 'react'
import axios from '../Services/AxiosInstance';



export const StoreLogin = () => {
  
const ipref = useRef()


  const link=useNavigate()
  const [image,setImage]= useState()


  const Handleimages = (event) =>{
    event.preventDefault()
    const files = event.target.files;

    setImage({
      images :files
    })}


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handle submit handler")
    console.log("image state ",image.images[0])
    try{

    const form = ipref.current;
    const storeData = {
      storename: form.storename.value,
      email: form.email.value,
      username: form.Username.value,
      password: form.password.value,
      phone: form.phone.value,
      address: form.address.value,
      category:form.category.value,
      
    };
    console.log("store data ",storeData)

    const formdatatosend = new FormData ()

    formdatatosend.append('images',image.images[0])
    console.log("form data to send ",formdatatosend)



    const response = await axios.post('/store/registraion',formdatatosend,{
      headers:{
        
        // *********** TO corect the req.files undifined error *******************
        'Content-Type':'multipart/form-data'
      }
    })
     

     console.log('Registration successful:', response.data.message);

    //  link('/storelogin')
  }
  catch (error) {
    console.error('Registration error:', error);
    console.log('Response:' , error.response);
  
}
  


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
          <img src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg" alt="" />
        </div>


   <div className='form_div_str'>

     

                   <form ref={ipref} className='signup_form_str'>

                              {/* <label> Store Name </label> */}
                           <input  name='storename'  type='text' placeholder='Store Name'/>
                           {/* <input  name='Category'  type='text' placeholder='Category'/> */}

                           {/* ************Input form ***********  */}

                <Form.Group  as={Col} md="" controlId="validationCustomUsername">

          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><MdOutlineArrowDropDownCircle/></InputGroup.Text>
          
             <Form.Control
            as="select"
            
            name='category'
            value={null}
            onChange={''}
            required
            placeholder='Category'
            ref={ipref}
            style={{height:'20px',width:'200px',marginBottom:'10px'}}
          >
            <option value="Grocery">grocery</option>
            <option value="vegitable">Vegitable</option>
            <option value="Meat">Meat</option>
            <option value="Fruits">Fruits</option>
            <option value="Bakery">Bakery</option>
            <option value="Bakery">Fish</option>
          </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please choose a category.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>


                             {/* <label>Email </label> */}
                          <input name='email'   type='Email' placeholder='Email'/>

                           {/* <label>Username </label> */}
                          <input name='Username'   type='String' placeholder='username'/>

                            {/* <label>Phone Number </label> */}
                            <input name='phone' style={{textDecoration:'none'}}   type='number' placeholder='Phone Number'/>


                                 <input name='password'   type='text' placeholder='Password'/>
                                
                                 <input name='location'   type='text' placeholder='location'/>
                                 
                                  <label> Upload Store image </label>
                                 <input onChange={Handleimages} name='image'   type='file' placeholder='image'/>


         
                       {/* <label>Address </label> */}
                        <textarea style={{border:'none',resize:'none',textAlign:'center'}} placeholder='Address'  name="address" id="" cols="30" rows="4"></textarea>
          
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