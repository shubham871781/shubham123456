import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../../CommonFieldComponent/FormFields';


// import { makeStyles } from '@material-ui/styles';
// components
import { Link, useHistory } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import * as Yup from 'yup';
import { API_URL, GETOTP } from '../../../Apiconst/Apiconst';
import { SectionWrapperStyled } from '../LoginFormStyle';

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
function LoginFormEmail() {
  const history = useHistory();
  const success = () => {};
  // const classes = useStyles();
  const [isShown, setIsShown] = useState(false);

  const url = `${API_URL}/${GETOTP}`;

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${GETOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', values.section);
    bodyFormData.append('phone_or_email', values.phone_or_email);
    bodyFormData.append('email', values.email);
    axios
      .post(url1, bodyFormData, {
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      })
      .then((response) => {
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          history.push('/login-verfication-email');
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
          phone_or_email: 'email',
          email: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Email is required'),
        })}
        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({ setFieldValue, touched, values, errors }) => (
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
                          <Link to='/get-otp'>Don't have account?<button className='btn btn-primary'>Signup</button> </Link>
                          </span>
                        </div>
                        <Form className='formm-horizontal'>
                          <div className='errPhonee'>
                            <h3 className='title'>Member Login</h3>
                            <div className='form-group'>
                              <span className='input-icon'>
                                <i className='fa fa-envelope'></i>
                              </span>

                              <Field
                                className='formm-control'
                                label='Email'
                                type='email'
                                name='email'
                                placeholder='Email Address'
                              />

                              {errors.email && touched.email ? (
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
                                      {errors.email}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </div>
                            <button type='submit' className='btn signin'>
                              Login
                            </button>
                          </div>
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

export default LoginFormEmail;
