import React, { useState, useEffect } from 'react';
import axios from 'axios';


// components
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Page from '../../component/Page';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { SectionWrapperStyled } from '../Auth/LoginVerificationStyle';
import { API_URL, VERIFYOTP } from '../../Apiconst/Apiconst';

function VerifyOtp({ handleClose, phonenumber }) {
  const history = useHistory();
  const success = () => {};
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const close = () => {
    handleClose;
  };
  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${VERIFYOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append('section', 'registration');
    bodyFormData.append('phone_or_email', 'phone');
    bodyFormData.append('phone', phonenumber);
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
          localStorage.setItem('phoneverify', response.data.message);
          localStorage.setItem('phoneverify1', response.data.message);
          handleClose();
        } else {
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
          otp: '',
        }}
        validationSchema={Yup.object().shape({
          otp: Yup.string().required('Otp is required'),
        })}
        onSubmit={(values) => {
          onSubmit(values);
          console.log(values);
        }}
      >
        {({ setFieldValue, touched, values, errors }) => (
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

export default VerifyOtp;
