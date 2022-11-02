import React, { useState, useEffect } from 'react';
import axios from 'axios';


// components
import { Link, useHistory } from 'react-router-dom';

import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { API_URL, GETOTP } from '../../../../Apiconst/Apiconst';
import { SectionWrapperStyled } from '../../../Auth/LoginVerificationStyle';


function GetOtpOnPhone() {
  const history = useHistory();
  const success = () => {};
//   const classes = useStyles();

const formik = useFormik({
    initialValues: {
        section: 'edit_profile',
        phone_or_email: 'phone',
        phone: '',
    },
    validationSchema: Yup.object().shape({
        phone: Yup.string().required('Phone is required'),
    }),
    onSubmit: (values) => {
        const url1 = `${API_URL}/${GETOTP}`;
        var bodyFormData = new FormData();
        bodyFormData.append('user_id', 10);
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
              history.push('/edit-user-verify-otp');
            } else {
              history.push('/get-otp');
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
                    <h2>GET OTP ON PHONE</h2>
                  </div>
                  <div className='row clearfix'>
                    <div className=''>
                      <form onSubmit={formik.handleSubmit}>

                        <div className='errPhone'>
                          <div className='input_field '>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <input
                              placeholder='Enter your phone'
                              label='Phone'
                              type='text'
                              name='phone'
                              {...formik.getFieldProps('phone')}
                            />
                           {formik.touched.phone && formik.errors.phone ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.phone}
                          </span>
                        ) : null}
                          </div>
                        </div>
    

                        <div className='box-footer d-flex justify-content-center '>
                          <button type='submit' className='btn btn-primary'>
                            <i className='ti-save-alt'></i>
                            Submit
                          </button>
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

export default GetOtpOnPhone;
