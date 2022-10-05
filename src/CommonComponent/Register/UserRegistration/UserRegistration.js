import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../../CommonFieldComponent/FormFields';



import { API_URL, USERREGISTRATION } from '../../../Apiconst/Apiconst';
// components
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';

import { SectionWrapperStyled } from '../../../component/Auth/LoginVerificationStyle';
 import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import Loader from '../../../CommonFieldComponent/Loader';

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

export default function UserRegistration() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const success = () => {};

  const [userRequest, setUserRequest] = useState({
    user: null,
  });
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);



  const onSubmit = (values, e) => {
    console.log(values);
    const url1 = `${API_URL}/${USERREGISTRATION}`;
    var bodyFormData = new FormData();
    bodyFormData.append('fname', values.fname);
    bodyFormData.append('lname', values.lname);
    bodyFormData.append('phone', values.phone);
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
          confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you doctor.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => history.push('/doctor-registration')
              },
              {
                label: 'No',
                onClick: () => history.push('/')
              }
            ]
          });
        } else {
          history.push('/user-registration');
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
          fname: '',
          lname: '',
          phone: '',
          email: '',
        }}
        validationSchema={Yup.object().shape({
          fname: Yup.string().required('First name  is required'),
          lname: Yup.string().required('Last name is required'),
          phone: Yup.string().required('Phone is required'),
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
              <div className='form_wrapper'>
                <div className='form_container'>
                  <div className='title_container'>
                    <h2> USER REGISTRATION</h2>
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
                              placeholder='Enter first name'
                              label='First Name'
                              type='text'
                              name='fname'
                            />
                            <span className='endd'>
                              {errors.fname && touched.fname ? (
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
                                      {errors.fname}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </div>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <Field
                              placeholder='Enter Last name'
                              label='Last Name'
                              type='text'
                              name='lname'
                            />
                            <span className='endd'>
                              {errors.lname && touched.lname ? (
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
                                      {errors.lname}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </div>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <Field
                              placeholder='Enter phone number'
                              label='Phone'
                              type='text'
                              name='phone'
                            />
                            <span className='endd'>
                              {errors.phone && touched.phone ? (
                                <div>
                                  {' '}
                                  <button
                                    className='btt'
                                    onMouseEnter={() => setIsShown2(true)}
                                    onMouseLeave={() => setIsShown2(false)}
                                  >
                                    <i className='ti-info'></i>
                                  </button>
                                  {isShown2 && (
                                    <div className='error_txt'>
                                      {errors.phone}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </div>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <Field
                                    placeholder='Enter email'
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
                                    onMouseEnter={() => setIsShown3(true)}
                                    onMouseLeave={() => setIsShown3(false)}
                                  >
                                    <i className='ti-info'></i>
                                  </button>
                                  {isShown3 && (
                                    <div className='error_txt'>
                                      {errors.email}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </span>
                          </div>
                          <div className='box-footer d-flex justify-content-center '>
                            <button type='submit' className='btn btn-primary' >
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
