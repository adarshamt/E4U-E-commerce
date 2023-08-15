import '../Styles/Registration.css'
// import {
//   MDBInputGroup,
// } from 'mdb-react-ui-kit';

// export default function Registration() {
//   return (
//     <div className='main_container'>

//     <div className="sub_container">
//       <MDBInputGroup textBefore='@' className='mb-3'>
//         <input className='form-control' type='text' placeholder="Recipient's username" />
//       </MDBInputGroup>

//       <MDBInputGroup className='mb-3' textAfter='@example.com'>
//         <input className='form-control' type='text' placeholder="Recipient's username" />
//       </MDBInputGroup>

//       <label htmlFor='basic-url2' className='form-label'>
//         Your vanity URL
//       </label>
//       <MDBInputGroup className='mb-3' textBefore='https://example.com/users/'>
//         <input className='form-control' id='basic-url2' type='text' />
//       </MDBInputGroup>

//       <MDBInputGroup className='mb-3' textBefore='$' textAfter='.00'>
//         <input className='form-control' type='text' />
//       </MDBInputGroup>

//       <MDBInputGroup className='mb-3'>
//         <input className='form-control' placeholder='Username' type='text' />
//         <span className='input-group-text'>@</span>
//         <input className='form-control' placeholder='Server' type='text' />
//       </MDBInputGroup>

//       <MDBInputGroup className='mb-3' textBefore='With textarea'>
//         <textarea className='form-control' />
//       </MDBInputGroup>
 
//       </div>
 
//     </div>
//   );
// }

import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';

export default function Registration() {
  const [formValue, setFormValue] = useState({
    fname: 'Mark',
    lname: 'Otto',
    email: '',
    city: '',
    state: '',
    zip: '',
  });

//   const onChange = (e: any) => {
//     setFormValue({ ...formValue, [e.target.name]: e.target.value });
//   };

  return (

    <div className="main_container">
        
        <h3> Registration</h3>


        <video src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"></video>
       <div className="sub_container">




    <MDBValidation className='row g-3'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.fname}
          name='fname'
        //   onChange={onChange}
          id='validationCustom01'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.lname}
          name='lname'
        //   onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Username'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={formValue.city}
          name='city'
        //   onChange={onChange}
          id='validationCustom03'
          required
          label='City'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
        <MDBInput
          value={formValue.zip}
          name='zip'
        //   onChange={onChange}
          id='validationCustom05'
          required
          label='Zip'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <div className='col-12'>
        <MDBBtn type='submit'>Submit form</MDBBtn>
        {/* <MDBBtn type='reset'>Reset form</MDBBtn> */}
      </div>
    </MDBValidation>


        </div>
    </div>
  );
}