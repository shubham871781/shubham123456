import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../../CommonFieldComponent/FormFields';


// components
import { Link as RouterLink, useHistory } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 import * as Yup from 'yup';
// import { SectionWrapperStyled } from './GetOtpFormStyle';
import { API_URL, VERIFYOTP } from '../../../Apiconst/Apiconst';
import { SectionWrapperStyled } from '../LoginVerificationStyle';


function LoginVerificationEmail() {
  const history = useHistory();
  const success = () => {};
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${VERIFYOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', values.section);
    bodyFormData.append('phone_or_email', values.phone_or_email);
    bodyFormData.append('email', values.email);
    bodyFormData.append('otp', values.otp);
    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          localStorage.setItem('token', 'user');
          // localStorage.setItem('token_key', response.data.response[0].token);
          window.location.href = '/dashboard-user'
        } else {
          history.push('/login-verfication-email');
          success(toast.success(response.data.message));
        }
      });
  };

  function clickEvent(first, last) {
    if (first.value.length) {
      document.getElementById(last).focus();
    }
  }
  return (
    <>
      {/* <ToastContainer /> */}
      <Formik
        key='one'
        enableReinitialize
        initialValues={{
          section: 'login',
          phone_or_email: 'email',
          email: '',
          otp: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Email is required'),
          otp: Yup.string().required('Otp is required'),
        })}
        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({ setFieldValue, touched, values, errors }) => (
          <>
           <SectionWrapperStyled>
              <div className='form_wrapper'>
                <div className='form_container'>
                  <div className='title_container'>
                    <h2>VERIFICATION</h2>
                  </div>
                  <div className='row clearfix'>
                    <div className=''>
                      <Form>
                        <div className='errPhone'>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <Field
                              placeholder='Enter your email'
                              label='Email'
                              type='text'
                              name='email'
                            />
                            <span className='endd'>
                              {errors.email && touched.email ? (
                                <div>
                                  {' '}
                                  <button
                                    className='btt'
                                    onMouseEnter={() => setIsShown1(true)}
                                    onMouseLeave={() => setIsShown1(false)}
                                  >
                                    <i className='ti-info'></i>
                                  </button>
                                  {isShown1 && (
                                    <div className='error_txt'>
                                      {errors.email}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </div>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i aria-hidden='true' className='fa fa-lock'></i>
                            </span>
                            <Field
                              placeholder='Enter your otp'
                              label='otp'
                              type='text'
                              name='otp'
                            />
                            <span className='endd'>
                              {errors.otp && touched.otp ? (
                                <div>
                                  {' '}
                                  <button
                                    className='btt'
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}
                                  >
                                    <i className='ti-info'></i>
                                  </button>
                                  {isShown && (
                                    <div className='error_txt'>
                                      {errors.otp}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </div>
                          <div className='box-footer d-flex justify-content-center '>
                            <button type='submit' className='btn btn-primary'>
                              <i className='ti-save-alt'></i>
                              Submit
                            </button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapperStyled>
          </>
        )}
      </Formik>
    </>
  );
}

export default LoginVerificationEmail;
