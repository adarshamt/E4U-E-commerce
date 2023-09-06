

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// import Sidebar from '../Componets/StoreOwerSidebar'

import { MdOutlineArrowDropDownCircle } from 'react-icons/md'

import axios from '../Services/AxiosInstance'

import '../Styles/StoreOwner.css'
const StoreOwner = () => {

  const [validated, setValidated] = useState(false);

  const [formdata,setFormData] = useState({
    
    productName:'',
    discription:'',
    price:'',
    category:'',
    images:[]


  })
  const HandleInputChange = (event)=>{

    console.log("handle input change function")

    const {name,value} =event.target

    setFormData({
      ...formdata, [name]:value
    })

    console.log("formdata ",formdata)

  }

    


  const handleSubmitB = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const Handleimages = (event) =>{
    event.preventDefault()

    const files = event.target.files;
    setFormData({
      ...formdata,
      images :files
    })

  }

  const HandleSubmit = async(e)=>{
    e.preventDefault()
    try{

      const formDataToSend = new FormData()


      for (const key in formdata) {
      if (key === 'images') {
        for (let i = 0; i < formdata.images.length; i++) {
          formDataToSend.append('images', formdata.images[i]);
        }
      } else {
        formDataToSend.append(key, formdata[key]);
      }
    }

    console.log("form data to send",formDataToSend)

    const response = await axios.post('/store/addproduct',formDataToSend,{
      headers:{
        
        // *********** TO corect the req.files undifined error *******************
        'Content-Type':'multipart/form-data'
      }
    })
     

     console.log('Registration successful:', response.data.message);

    }
    catch (error) {
      console.error('Registration error:', error);
      console.log('Response:' , error.response);
    
  }
  }




  return (
    <div className='storOnwr_maindiv'>
       
      <div className="storeOwner">


        {/* <Sidebar/> */}
      </div>
      
      <div className="display_div">

      <Form encType="multipart/form-data"  noValidate validated={validated} onSubmit={handleSubmitB}>
        <Form.Group as={Col} md="" controlId="validationCustom01">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product name"
            name='productName'
            value={formdata.productName}
            onChange={HandleInputChange}
            // defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="" controlId="validationCustom02">
          <Form.Label>Discription</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Discription"
            name='discription'
            value={formdata.discription}
            onChange={HandleInputChange}


            // defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="" controlId="validationCustomUsername">
          <Form.Label>Category</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><MdOutlineArrowDropDownCircle/></InputGroup.Text>
            {/* <Form.Control
              type="text"
              placeholder="Category"
              aria-describedby="inputGroupPrepend"
              required
            /> */}
             <Form.Control
            as="select"
            
            name='category'
            value={formdata.category}
            onChange={HandleInputChange}
            // value={formData.propertyType}
            // onChange={handleInputChange}
            required
            placeholder='Category'
          >
            <option value="Grocery">grocery</option>
            <option value="vegitable">Vegitable</option>
            <option value="Meat">Meat</option>
            <option value="Fruits">Fruits</option>
            <option value="Bakery">Bakery</option>
          </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      
        <Form.Group as={Col} md="" controlId="validationCustom03">
          <Form.Label>Price in rupees ₹</Form.Label>
          <Form.Control type="text" placeholder="price" required 
          
          name='price'
            value={formdata.price}
            onChange={HandleInputChange}

            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
            

          </Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group as={Col} md="" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group> */}
        <Form.Group as={Col} md="" controlId="validationCustom05">
          <Form.Label>Upload images</Form.Label>
          <Form.Control placeholder="Zip" required
          
            // accept=".png, .jpg, .jpeg"
            type="file"
            name="images"
            multiple
            
            onChange={Handleimages}
          
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      
      {/* <Form.Group className="mb-">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
      <Button type="submit" onClick={HandleSubmit}>Submit form</Button>
    </Form>

    </div>
      </div>
  )
}

export default StoreOwner


// ********************  GPT  *****************


// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
// import axios from '../Services/AxiosInstance';
// import '../Styles/StoreOwner.css';

// const StoreOwner = () => {
//   const [validated, setValidated] = useState(false);

//   const [formData, setFormData] = useState({
//     productName: '',
//     description: '',
//     price: '',
//     category: '',
//     images: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleImages = (event) => {
//     const files = event.target.files;
//     setFormData({
//       ...formData,
//       images: [...formData.images, ...files],
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;

//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//     } else {
//       try {
//         const formDataToSend = new FormData();

//         for (const key in formData) {
//           if (key === 'images') {
//             for (let i = 0; i < formData.images.length; i++) {
//               formDataToSend.append('images', formData.images[i]);
//             }
//           } else {
//             formDataToSend.append(key, formData[key]);
//           }
//         }

//         console.log('form data to send', formDataToSend);

//         const response = await axios.post('/store/addproduct', formDataToSend);

//         console.log('Registration successful:', response.data.message);
//       } catch (error) {
//         console.error('Registration error:', error);
//         console.log('Response:', error.response);
//       }
//     }

//     setValidated(true);
//   };

//   return (
//     <div className='storOnwr_maindiv'>
//       <div className='storeOwner'></div>
//       <div className='display_div'>
//         <Form noValidate validated={validated} onSubmit={handleSubmit}>
//           {/* ... Your form fields ... */}
//           <Form.Group as={Col} md='' controlId='validationCustom05'>
//             <Form.Label>Upload images</Form.Label>
//             <Form.Control
//               placeholder='Zip'
//               required
//               accept='.png, .jpg, .jpeg'
//               type='file'
//               name='images'
//               multiple
//               onChange={handleImages}
//             />
//             <Form.Control.Feedback type='invalid'>
//               Please provide a valid zip.
//             </Form.Control.Feedback>
//           </Form.Group>
//           <Button type='submit'>Submit form</Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default StoreOwner;