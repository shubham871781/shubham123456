import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { API_URL, GETOTP, USERREGISTRATION } from '../../../Apiconst/Apiconst';
import VerifyOtp from '../../../component/AuthGetOtp/VerifyOtp';
import VerifyOtpByEmail from '../../../component/AuthGetOtp/Common/VerifyOtpByEmail';
import Modal from '../../Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { EMAIL, PHONEREG, TEXT_FIELD } from '../../../Validation/Validation';
function UserRegistration() {
  const history = useHistory();
  const success = () => {};
  const [userRequest, setUserRequest] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [phonenumber, setphonenumber] = useState(false);
  const [email, setEmail] = useState(false);

  const [verifyOtp, setVerifyOtp] = useState(false);
  const [verifyOtpEmail, setVerifyOtpEmail] = useState(false);

  const addOtp = () => {
    setVerifyOtp(true);
  };
  const closeOtp = () => {
    setVerifyOtp(false);
  };

  const addOtpEmail = () => {
    setVerifyOtpEmail(true);
  };
  const closeOtpEmail = () => {
    setVerifyOtpEmail(false);
  };

  const schema = Yup.object().shape({
    phone: Yup.string()
      .matches(PHONEREG, 'Phone number is not valid')
      .max(10)
      .min(10),
    email: Yup.string()
      .matches(EMAIL, 'Email is not valid '),
    fname: Yup.string()
    .matches(TEXT_FIELD, 'First name is not valid '),
    lname: Yup.string()
    .matches(TEXT_FIELD, 'Last name is not valid '),
  });
  const onSubmit = (values) => {
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
        console.log(response);
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          localStorage.removeItem('emailverify');
          localStorage.removeItem('phoneverify');
          history.push('/');
        } else if (response.data.message === 'Please Verify Your phone') {
          const url1 = `${API_URL}/${GETOTP}`;
          var bodyFormData = new FormData();
          bodyFormData.append('section', 'registration');
          bodyFormData.append('phone_or_email', 'email');
          bodyFormData.append('email', values.email);
          setEmail(values.email);
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
                setIsShown1(true);
              } else {
                success(toast.error(response.data.message));
                setIsShown1(false);
              }
            });
            const url2 = `${API_URL}/${GETOTP}`;
            var bodyFormData = new FormData();
          bodyFormData.append('section', 'registration');
          bodyFormData.append('phone_or_email', 'phone');
          bodyFormData.append('phone', values.phone);
          setphonenumber(values.phone);
          axios
            .post(url2, bodyFormData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((response) => {
              console.log(response);
              if (response.data.status === 200) {
                success(toast.success(response.data.message));
                setIsShown(true);
              } else {
                success(toast.error(response.data.message));
                setIsShown(false);
              }
            });
        } else if (
          response.data.message !== 'User with this Email already exists'
        ) {
          const url1 = `${API_URL}/${GETOTP}`;
          var bodyFormData = new FormData();
          bodyFormData.append('section', 'registration');
          bodyFormData.append('phone_or_email', 'email');
          bodyFormData.append('email', values.email);
          setEmail(values.email);
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
                setIsShown1(true);
              } else {
                success(toast.error(response.data.message));
                setIsShown1(false);
              }
            });
        } else if (
          response.data.message !== 'User with this Phone number already exists'
        ) {
          const url1 = `${API_URL}/${GETOTP}`;
          var bodyFormData = new FormData();
          bodyFormData.append('section', 'registration');
          bodyFormData.append('phone_or_email', 'phone');
          bodyFormData.append('phone', values.phone);
          setphonenumber(values.phone);
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
                setIsShown(true);
              } else {
                success(toast.error(response.data.message));
                setIsShown(false);
              }
            });
        } else {
          success(toast.error(response.data.message));
        }
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-12 '>
          <div className='box '>
            <div className='content-top-agile p-20 pb-0'>
              <h2 className='text-primary'>USER REGISTRATION</h2>
              <p className='mb-0'>Register a new membership</p>
            </div>
            {/* <!-- /.box-header --> */}
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <div className='box-body'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='form-label'>First Name</label>
                      <div className='input-group mb-3 VERIFYOTP_inp'>
                        <span className='input-group-text'>
                          <i className='ti-user'></i>
                        </span>
                        <input
                          placeholder='Enter first name'
                          className='form-control'
                          type='text'
                          name='fname'
                          {...register('fname')}
                          required
                        />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        className='text-danger'
                        name='fname'
                        as='p'
                      />
                    </div>
                  </div>

                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='form-label'>Last Name</label>
                      <div className='input-group mb-3 VERIFYOTP_inp'>
                        <span className='input-group-text'>
                          <i className='ti-user'></i>
                        </span>
                        <input
                          placeholder='Enter last name'
                          className='form-control'
                          label='Phone'
                          type='text'
                          name='lname'
                          {...register('lname')}
                          required

                        />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        className='text-danger'
                        name='lname'
                        as='p'
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='form-label'>Phone Number</label>
                      <div className='input-group mb-3 VERIFYOTP_inp'>
                        <span className='input-group-text'>
                          <i className='ti-mobile'></i>
                        </span>
                        <input
                          placeholder='Enter your phone number'
                          className='form-control'
                          label='Phone'
                          type='text'
                          name='phone'
                          {...register('phone')}
                          required

                        />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        className='text-danger'
                        name='phone'
                        as='p'
                      />

                      {localStorage.getItem('phoneverify') ? (
                        <>
                          <span className='text-primary'>Phone verified</span>
                        </>
                      ) : (
                        <>
                          {isShown && isShown === true ? (
                            <>
                              <button
                                data-toggle='modal'
                                onClick={() => addOtp()}
                                type='button'
                                className='btn btn-outline-success Verify_Otp_btn'
                              >
                                Verify-Otp
                              </button>
                              {verifyOtp && (
                                <Modal
                                  hideIcon={true}
                                  handleClose={closeOtp}
                                  className='customWidth otp_box'
                                >
                                  <VerifyOtp
                                    handleClose={closeOtp}
                                    phonenumber={phonenumber}
                                  />
                                </Modal>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label className='form-label'>Email</label>
                      <div className='input-group mb-3 VERIFYOTP_inp'>
                        <span className='input-group-text'>
                          <i className='ti-email'></i>
                        </span>
                        <input
                          placeholder='Enter your email'
                          className='form-control'
                          type='text'
                          name='email'
                          {...register('email')}
                          required

                        />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        className='text-danger'
                        name='email'
                        as='p'
                      />
                      {localStorage.getItem('emailverify') ? (
                        <>
                          <span className='text-primary'>Email verified</span>
                        </>
                      ) : (
                        <>
                          {isShown1 && isShown1 === true ? (
                            <>
                              <button
                                data-toggle='modal'
                                onClick={() => addOtpEmail()}
                                type='button'
                                className='btn btn-outline-success Verify_Otp_btn'
                              >
                                Verify-Otp
                              </button>
                              {verifyOtpEmail && (
                                <Modal
                                  hideIcon={true}
                                  handleClose={closeOtpEmail}
                                  className='customWidth otp_box'
                                >
                                  <VerifyOtpByEmail
                                    handleClose={closeOtpEmail}
                                    email={email}
                                  />
                                </Modal>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.box-body --> */}
              <div className='box-footer d-flex justify-content-center'>
                <button
                  type='submit'
                  className='btn btn-primary Verify_Otp_btn'
                >
                  <i className='ti-save-alt'></i> Submit
                </button>
              </div>
            </form>
          </div>
          {/* <!-- /.box -->			 */}
        </div>
      </div>
    </>
  );
}

export default UserRegistration;

