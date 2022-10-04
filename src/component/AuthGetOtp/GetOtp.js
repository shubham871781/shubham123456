import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../CommonFieldComponent/FormFields';

// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
// components
import { Link, useHistory } from 'react-router-dom';
import Page from '../../component/Page';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { SectionWrapperStyled } from '../Auth/LoginVerificationStyle';
import { API_URL, GETOTP } from '../../Apiconst/Apiconst';


function GetOtp() {
  const history = useHistory();
  const success = () => {};
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${GETOTP}`;
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
          history.push('/verfiy-otp');
        } else {
          history.push('/');
          success(toast.success(response.data.message));
        }
      });
  };
  function bigImg(e) {
    e.target.style.display = 'none';
  }

  function normalImg(e) {
    e.target.style.display = 'block';
  }
  return (
    <>
      {/* <ToastContainer /> */}
      <Formik
        key='one'
        enableReinitialize
        initialValues={{
          section: 'registration',
          phone_or_email: 'phone',
          phone: '',
        }}
        validationSchema={Yup.object().shape({
          phone_or_email: Yup.string().required('Phone or email is required'),
          phone: Yup.string().required('Phone number is required'),
        })}
        w
        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({ setFieldValue, touched, values, handleBlur, errors }) => (
          <>
            <SectionWrapperStyled>
              <div className='form_wrapper'>
                <div className='form_container'>
                  <div className='title_container'>
                    <h2>GET OTP ON PHONE</h2>
                  </div>
                  <div className='row clearfix'>
                    <div className=''>
                      <Form>

                        <div className='errPhone'>
                          <div className='input_field '>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <Field
                              placeholder='Enter your phone'
                              label='Phone'
                              type='text'
                              name='phone'
                              onBlur={handleBlur}
                            />
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
                              {isShown && <div className='error_txt'>{errors.phone}</div>}
                            </div>
                          ) : null}
                            </span>
                          </div>
                        </div>
    

                        <div className='box-footer d-flex justify-content-center '>
                          <button type='submit' className='btn btn-primary'>
                            <i className='ti-save-alt'></i>
                            Submit
                          </button>
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

export default GetOtp;
