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
import { API_URL, GETOTP } from '../../../Apiconst/Apiconst';
import { SectionWrapperStyled } from '../../Auth/LoginVerificationStyle';


function GetOtpByEmail() {
  const history = useHistory();
  const success = () => {};
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);


  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${GETOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', values.section);
    bodyFormData.append('phone_or_email', values.phone_or_email);
    bodyFormData.append('email', values.email);
    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          history.push('/verfiy-otp-email'); 
          
        } else {
          history.push('/');
          success(toast.success(response.data.message));

        }
      });
  };

  return (
    <>
    {/* <ToastContainer /> */}
      <Formik
        key='one'
        enableReinitialize
        initialValues={{
          section: 'registration',
          phone_or_email: 'email',
          email: '',
        }}
        validationSchema={Yup.object().shape({
          phone_or_email: Yup.string().required('Phone or email is required'),
          email: Yup.string().required('Email is required'),
        })}
        w
        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({ setFieldValue, touched, errors, values }) => (
          <>
            <SectionWrapperStyled>
              <div className='form_wrapper'>
                <div className='form_container'>
                  <div className='title_container'>
                    <h2>GET OTP ON MAIL</h2>
                  </div>
                  <div className='row clearfix'>
                    <div className=''>
                      <Form>
                      <div className='errPhone'>
                        <div className='input_field'>
                          {' '}
                          <span>
                            <i aria-hidden='true' className='fa fa-envelope'></i>
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
                              <button className='btt'
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                
                              >
                                <i className='ti-info'></i>
                              </button>
                              {isShown && <div className='error_txt'>{errors.email}</div>}
                            </div>
                          ) : null}
                            </span>
                
                        </div>
                        <div  className='box-footer d-flex justify-content-center '>
                            <button
                                type='submit'
                                className='btn btn-primary'
                              >
                             <i  className='ti-save-alt'></i>
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

export default GetOtpByEmail;
