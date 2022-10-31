import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { TextField } from '../../CommonFieldComponent/FormFields';
// import {
//   Grid,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   Box,
// } from '@mui/material';
// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import { makeStyles } from '@material-ui/styles';
// components
import { Link, useHistory } from 'react-router-dom';
// import Page from '../../component/Page';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { API_URL, GETOTP } from '../../../../Apiconst/Apiconst';
import { SectionWrapperStyled } from '../../../Auth/LoginVerificationStyle';

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
function GetOtpOnMail() {
  const history = useHistory();
  const success = () => {};
//   const classes = useStyles();

const formik = useFormik({
    initialValues: {
        section: 'edit_profile',
        phone_or_email: 'email',
        email: '',
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required'),
    }),
    onSubmit: (values) => {
        const url1 = `${API_URL}/${GETOTP}`;
        var bodyFormData = new FormData();
        bodyFormData.append('user_id', 10);
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
                              label='email'
                              type='text'
                              name='email'
                              {...formik.getFieldProps('email')}
                            />
                           {formik.touched.email && formik.errors.email ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.email}
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

export default GetOtpOnMail;
