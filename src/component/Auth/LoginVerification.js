import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../CommonFieldComponent/FormFields';

// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
// import { makeStyles } from '@material-ui/styles';
// components
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Page from '../../component/Page';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { SectionWrapperStyled } from './LoginVerificationStyle';
import { API_URL, GETOTPOFLOGINVERIFICATION } from '../../Apiconst/Apiconst';

// const useStyles = makeStyles((theme) => ({
//   tableOverflow: {
//     overflow: 'auto',
//   },
//   submit: {
//     top: '17px',
//   },
//   avatarpreview: {
//     width: '136px',
//     height: '131px',
//   },
//   svg: {
//     display: 'noneimportant',
//   },
// }));

function LoginVerification() {
  const history = useHistory();
  const success = () => {};
  // const classes = useStyles();
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);


  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${GETOTPOFLOGINVERIFICATION}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', values.section);
    bodyFormData.append('phone_or_email', values.phone_or_email);
    bodyFormData.append('phone', values.phone);
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
          // history.push('/login-verfication');
        } else {
          history.push('/login-verfication');
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
          section: 'login',
          phone_or_email: 'phone',
          phone: '',
          otp: '',
        }}
        validationSchema={Yup.object().shape({
                phone: Yup.string()
                .required('Email is required'),
                otp: Yup.string()
                .required('Otp is required')
        })}

        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({ setFieldValue, touched, values,errors }) => (
          <>
            {/* <br />
            <br /> 
            <br />
            <br />
            <br />
            <br />    <br />
            <div className='container h-p100'>
              <div className='row align-items-center justify-content-md-center h-p100'>
                <div className='col-12'>
                  <div className='row justify-content-center g-0'>
                    <div className='col-lg-5 col-md-5 col-12'>
                      <div className='bg-white rounded10 shadow-lg'>
                        <div className='content-top-agile p-20 pb-0'>
                          <h2 className='text-primary'>VERIFY OTP</h2>
                          {/* <p className='mb-0'>Verify Otp</p>							
                        </div>
                        <div className='p-40'>
                          <Form key='oneForm'>
                            <div className='form-group'>
                              <div className='input-group mb-3'>
                                <span className='input-group-text bg-transparent'>
                                  <i className='ti-lock'></i>
                                </span>
                                <Field
                                  className='form-control ps-15 bg-transparent'
                                  placeholder='Enter your phone'
                                  label='Phone'
                                  type='text'
                                  name='phone'
                                />
                              </div>
                            </div>
                            <ErrorMessage name='phone' />

                            <div className='form-group'>
                              <div className='input-group mb-3'>
                                <span className='input-group-text bg-transparent'>
                                  <i className='ti-lock'></i>
                                </span>
                                <Field
                                  className='form-control ps-15 bg-transparent'
                                  placeholder='Enter your otp'
                                  label='otp'
                                  type='text'
                                  name='otp'
                                />
                              </div>
                            </div>
                            <ErrorMessage name='otp' />

                            <div className='row'>
                            
                              <div className='col-12 text-center'>
                                <Button
                                  type='submit'
                                  fullWidth
                                  variant='contained'
                                  color='primary'
                                  className={classes.submit}
                                >
                                  ADD
                                </Button>
                              </div>
                            </div>
                          </Form>
                      
                        </div>
                      </div>

                      <div className='text-center'>
                        <p className='mt-20 text-white'>- Register With -</p>
                        <p className='gap-items-2 mb-20'>
                          <a
                            className='btn btn-social-icon btn-round btn-facebook'
                            href='#'
                          >
                            <i className='fa fa-facebook'></i>
                          </a>
                          <a
                            className='btn btn-social-icon btn-round btn-twitter'
                            href='#'
                          >
                            <i className='fa fa-twitter'></i>
                          </a>
                          <a
                            className='btn btn-social-icon btn-round btn-instagram'
                            href='#'
                          >
                            <i className='fa fa-instagram'></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
                          <i aria-hidden='true' className='fa fa-envelope'></i>
                        </span>
                        <Field
                          label='phone'
                          type='text'
                          name='phone'
                          placeholder='Enter your phone number'
                        />
                        {/* <ErrorMessage name='phone'>
                          {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage> */}
                        <span className='endd'>
                            {errors.phone && touched.phone ? (
                            <div>
                              {' '}
                              <button className='btt'
                                onMouseEnter={() => setIsShown1(true)}
                                onMouseLeave={() => setIsShown1(false)}
                                
                              >
                                <i className='ti-info'></i>
                              </button>
                              {isShown1 && <div className='error_txt'>{errors.phone}</div>}
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
                        {/* <ErrorMessage name='otp'>
                          {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                        </ErrorMessage> */}
                        <span className='endd'>
                            {errors.phone && touched.phone ? (
                            <div>
                              {' '}
                              <button className='btt'
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                
                              >
                                <i className='ti-info'></i>
                              </button>
                              {isShown && <div className='error_txt'>{errors.otp}</div>}
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

export default LoginVerification;
