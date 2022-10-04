import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../CommonFieldComponent/FormFields';

// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
// import { makeStyles } from '@material-ui/styles';
// components
import { Link, useHistory } from 'react-router-dom';
import Page from '../../component/Page';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { API_URL, GETOTPOFLOGIN } from '../../Apiconst/Apiconst';
import { SectionWrapperStyled } from './LoginFormStyle';

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
function LoginFrom() {
  const history = useHistory();
  const success = () => {};
  // const classes = useStyles();

  const url = `${API_URL}/${GETOTPOFLOGIN}`;

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${GETOTPOFLOGIN}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', values.section);
    bodyFormData.append('phone_or_email', values.phone_or_email);
    bodyFormData.append('phone', values.phone);
    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          history.push('/login-verfication');
        } else {
          history.push('/get-otp');
          success(toast.success(response.data.message));
        }
      });
  };

  return (
    <>
      <Formik
        key='one'
        enableReinitialize
        initialValues={{
          section: 'login',
          phone_or_email: 'phone',
          phone: '',
        }}
        validationSchema={Yup.object().shape({
          phone: Yup.string().required('Phone is required'),
        })}
        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({errors, setFieldValue, touched, values }) => (
          <>
          

            <SectionWrapperStyled>
              <div className='form-bg login-formm'>
                <div className='container'>
                  <div className='row d-flex justify-content-center'>
                    <div className='col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8'>
                      <div className='formm-container'>
                        <div className='formm-icon'>
                          <i className='fa fa-user-circle'></i>
                          <span className='signup'>
                            <Link to='/get-otp'>Don't have account? Signup</Link>
                          </span>
                        </div>
                        <Form className='formm-horizontal'>
                          <h3 className='title'>Member Login</h3>
                          <div className='form-group'>
                            <span className='input-icon'>
                              <i className='fa fa-envelope'></i>
                            </span>

                            <Field
                              className='formm-control'
                              label='Phone'
                              type='text'
                              name='phone'
                              placeholder='Phone Number'
                            />
                          </div>
                          {errors.name && touched.name ? (
           <div className='text-warning'>{errors.name}</div>
         ) : null}
                          {/* <ErrorMessage name='phone'/> */}
                           

                          <button type='submit' className='btn signin mt-15'>
                            Login
                          </button>
                          <span className='forgot-pass'>
                            <Link className='btn signin' to='/login'>
                              Login By Email
                            </Link>
                          </span>
                        </Form>
                      </div>
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

export default LoginFrom;
{
  /* // <> */
}
{
  /* <br />
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
                            <h2 className='text-primary'>
                             Login
                            </h2>
                            <p className='mb-0'>Get started with Us</p>
                          </div>
                          <div className='p-40'>
                            <Form key='oneForm'>
                          
                                  <Field
                                    className='form-control ps-15 bg-transparent'
                                    label='section'
                                    type='hidden'
                                    name='section'
                                    disabled
                                  />
                            
                                  <Field
                                    className='form-control ps-15 bg-transparent'
                                    label='phone_or_email'
                                    type='hidden'
                                    variant='outlined'
                                    name='phone_or_email'
                                    placeholder='Email'
                                  />
                             
                              <ErrorMessage name='phone_or_email'/>

                              <div className='form-group'>
                                <div className='input-group mb-3'>
                                  <span className='input-group-text bg-transparent'>
                                  <i className='ti-email'></i>
                                  </span>
                                  <Field
                                    className='form-control ps-15 bg-transparent'
                                    label='Email'
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                  />
                                </div>
                              </div>
                              <ErrorMessage name='email'/>

                              <div>
                                <Link sx={{textAlign: 'center'}} to='/get-otp'>Sign Up</Link>
                              </div>

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
              </div>
              
            </> */
}
