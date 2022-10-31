import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { API_URL, GETOTP } from '../../../Apiconst/Apiconst';
import toast, { Toaster } from 'react-hot-toast';
import Modal from '../../../CommonComponent/Modal';
import LoginVerificationEmail from './LoginVerificationEmail';

const mystyle ={
  borderRadius : '10px',
  background : ' rgb(221 217 217)',
  paddingLeft: '5px',
  color: 'black'
}

function LoginFrom() {
  const history = useHistory();
  const success = () => {};
  const [isShown, setIsShown] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [email, setEmail] = useState(false);

  const addOtp = () => {
    setVerifyOtp(true);
  };
  const closeOtp = () => {
    setVerifyOtp(false);
  };
  const formik = useFormik({
    initialValues: {
      section: 'login',
      phone_or_email: 'email',
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Phone is required'),
    }),
    onSubmit: (values) => {
      const url = `${API_URL}/${GETOTP}`;

      var bodyFormData = new FormData();
      bodyFormData.append('section', values.section);
      bodyFormData.append('phone_or_email', values.phone_or_email);
      bodyFormData.append('email', values.email);
      axios
        .post(url, bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // console.log(response);
          if (response.data.status === 200) {
            success(toast.success(response.data.message));
            setIsShown(true);
            setEmail(values.email);
          } else {
            success(toast.error(response.data.message));
          }
        });
    },
  });

  return (
    <>
      {/* <div className='container'>
        <form id='login' onSubmit={formik.handleSubmit}>
          <p>Enter your phone number:</p>
          <input
            id='email'
            type='tel'
            name='email'
            {...formik.getFieldProps('email')}
          />
          {isShown && isShown === true ? (
            <>
              <button
                data-toggle='modal'
                onClick={() => addOtp()}
                type='button'
                className='btn btn-outline-success Verify_Otp_btn'
              >
                Verify-Otp
              </button>
              {verifyOtp && (
                <Modal
                  hideIcon={true}
                  handleClose={closeOtp}
                  className='customWidth otp_box'
                >
                  <LoginVerificationEmail
                    handleClose={closeOtp}
                    email={email}
                  />
                </Modal>
              )}
            </>
          ) : (
            <></>
          )}
          <div className='box-footer d-flex justify-content-center'>
          <Link to='/'>Login By Phone</Link>
            <Link to='/tab'>Sign-Up</Link>
            <button type='submit' className='btn btn-primary Verify_Otp_btn'>
              <i className='ti-save-alt'></i> Submit
            </button>
          </div>
        </form>
      </div> */}
    <div className='row justify-content-center'>
              <div className='col-md-12 col-12 login_box'>
                <div className='boxx'>
                  <div className='content-top-agile p-20 pb-0'>
                    <h2 className=' Verifyotp_txt '>LOGIN</h2>
                  </div>
 <form id='login' onSubmit={formik.handleSubmit}>
  <div class="form-outline mb-3 d-flex justify-content-center">
 
  <input
  style={mystyle}
            id='email'
            type='tel'
            name='email'
            {...formik.getFieldProps('email')}
          />
          
    {/* <input type="email" id="form2Example1" class="form-control" /> */}
  </div>
<div className='d-flex justify-content-center '>
  
  {isShown && isShown === true ? (
            <>
              <button
                data-toggle='modal'
                onClick={() => addOtp()}
                type='button'
                className=' btn btn-outline-success Verify_Otp_btn'
              >
                Verify-Otp
              </button>
              {verifyOtp && (
                <Modal
                  hideIcon={true}
                  handleClose={closeOtp}
                  className='customWidth otp_box'
                >
                  <LoginVerificationEmail
                    handleClose={closeOtp}
                    email={email}
                  />
                </Modal>
              )}
            </>
          ) : (
            <></>
          )}
  
  </div>
  

  <div className='box-footer d-flex justify-content-center'>
          
            <button type='submit' className='btn btn-primary Verify_Otp_btn'>
              <i className='ti-save-alt'></i> Submit
            </button>
            </div>
            <div class="text-center d-flex justify-content-center">
    <p>Not a member? <Link to='/tab'>Register</Link></p>
            
    <p>or sign in with: <Link to='/'>Phone</Link> </p>
  </div>
          

 

</form>
 </div>
              </div>
            </div>
    </>
  );
}

export default LoginFrom;
