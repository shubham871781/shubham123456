import React, { useState, useEffect } from 'react';
import axios from 'axios';


// components
import { Link as RouterLink, useHistory } from 'react-router-dom';
// import Page from '../../component/Page';
import {useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { SectionWrapperStyled } from '../../../Auth/LoginVerificationStyle';
import { API_URL, VERIFYOTP } from '../../../../Apiconst/Apiconst';



function VerifyOtpOnMail() {
  const history = useHistory();
  const success = () => {};
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);



  const formik = useFormik({
    initialValues: {
        section: 'edit_profile',
        phone_or_email: 'email',
        email: '',
        otp: '',
    },
    validationSchema: Yup.object().shape({
          email: Yup.string().required('Email is required'),
          otp: Yup.string().required('Otp is required'),
    }),
    onSubmit: (values) => {
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
              history.push('/edit-user');
            } else {
              history.push('/verfiy-otp');
              success(toast.success(response.data.message));
            }
          });
    },
  });


  return (
    <>
    
<SectionWrapperStyled>
            <div className='form_wrapper'>
              <div className='form_container'>
                <div className='title_container'>
                  <h2>VERIFICATION</h2>
                </div>
                <div className='row clearfix'>
                  <div className=''>
                    <form onSubmit={formik.handleSubmit}>
                    <div className='errPhone'>
                      <div className='input_field'>
                        {' '}
                        <span>
                          <i aria-hidden='true' className='fa fa-envelope'></i>
                        </span>
                        <input
                          label='email'
                          type='text'
                          name='email'
                          placeholder='Enter your phone number'
                          {...formik.getFieldProps('email')}
                        />
                      </div>
                      {formik.touched.email && formik.errors.email ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.email}
                          </span>
                        ) : null}
                      <div className='input_field'>
                        {' '}
                        <span>
                          <i aria-hidden='true' className='fa fa-lock'></i>
                        </span>
                        <input
                          placeholder='Enter your otp'
                          label='otp'
                          type='text'
                          name='otp'
                          {...formik.getFieldProps('otp')}
                        />
                      </div>
                      {formik.touched.otp && formik.errors.otp ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.otp}
                          </span>
                        ) : null}
                      <div className='box-footer d-flex justify-content-center '>
                        <button type='submit' className='btn btn-primary'>
                          <i className='ti-save-alt'></i>
                          Submit
                        </button>
                      </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </SectionWrapperStyled>
      
     
    </>
  );
}

export default VerifyOtpOnMail;
