import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '../../CommonFieldComponent/FormFields';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from '@mui/material';
// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import { makeStyles } from '@material-ui/styles';
// components
import { useLocation, useHistory } from 'react-router-dom';
import Page from '../../component/Page';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { SectionWrapperStyled } from './LoginVerificationStyle';
import { API_URL, VERIFYOTP } from '../../Apiconst/Apiconst';
import {login} from '../../InnerComponent/Route/index'


function LoginVerification({handleClose, phoneNumber}) {
  const history = useHistory();

 
  const success = () => {};
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${VERIFYOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', 'login');
    bodyFormData.append('phone_or_email', 'phone');
    bodyFormData.append('phone', phoneNumber);
    bodyFormData.append('otp', values.otp);
    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          success(toast.success(response.data.message,{
            icon: '👏',
          }));
          handleClose()
          const token = response.data.response[0].role_name;
          const token_key = response.data.response[0].token;
          login(token, token_key );
          if(response.data.response[0].role_name === 'user') {
          window.location.href = '/dashboard-user'
          }else if(response.data.response[0].role_name === 'doctor'){
          window.location.href = '/dashboard-doctor'
          }else if(response.data.response[0].role_name === 'admin'){
          window.location.href = '/dashboard-admin'
          }
        } else {
          success(toast.error(response.data.message)); 
        }
      });
  };

  return (
    <>
      <Formik
        key='one'
        enableReinitialize
        initialValues={{
          otp: '',
        }}
        validationSchema={Yup.object().shape({
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
           <div className='row justify-content-center'>
              <div className='col-md-12 col-12 '>
                <div className='box '>
                  <div className='content-top-agile p-20 pb-0'>
                    <h2 className='text-primary Verifyotp_txt '>VERIFYOTP</h2>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <Form className='form'>
                    <div className='box-body'>
                      <div className='form-group'>
                        <div className='input-group mb-3 VERIFYOTP_inp'>
                          <Field
                            placeholder='Enter Otp'
                            className='form-control text-center '
                            type='text'
                            name='otp'
                          />
                        </div>
                        {errors.otp && touched.otp ? (
                          <div className='text-danger'>{errors.otp}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className='box-footer d-flex justify-content-center'>
                      <button type='submit' className='btn btn-primary Verify_Otp_btn'>
                        <i className='ti-save-alt'></i> Verify
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
}

export default LoginVerification;
