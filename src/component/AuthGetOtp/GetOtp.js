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
import { Link, useHistory } from 'react-router-dom';
import Page from '../../component/Page';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { SectionWrapperStyled } from '../Auth/LoginVerificationStyle';
import { API_URL, GETOTP, USERREGISTRATION } from '../../Apiconst/Apiconst';
import { red } from '@mui/material/colors';
import VerifyOtp from './VerifyOtp';
import VerifyOtpByEmail from './Common/VerifyOtpByEmail';
import Modal from '../../CommonComponent/Modal';
import { yupResolver } from '@hookform/resolvers/yup';

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: 'auto',
  },
  submit: {
    top: '17px',
  },
  avatarpreview: {
    width: '136px',
    height: '131px',
  },
  svg: {
    display: 'noneimportant',
  },
}));

function GetOtp() {
  const history = useHistory();
  const success = () => {};
  const classes = useStyles();
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

  // const formik = useFormik({
  //   initialValues: {
  //     section: 'registration',
  //     phone_or_email: 'phone',
  //     phone_or_email: 'email',
  //     phone: '',
  //     email: '',
  //     fname: '',
  //     lname: '',
  //   },
  const schema = Yup.object().shape({
    phone: Yup.string().required('Phone  is required'),
    email: Yup.string().required('Email  is required'),
    fname: Yup.string().required('First name is required'),
    lname: Yup.string().required('Last name is required'),
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
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          localStorage.removeItem('emailverify')
          localStorage.removeItem('phoneverify')
          history.push('/')
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
                success(toast.success(response.data.message));
                setIsShown1(false);
              }
            });

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
              if (response.data.status === 200) {
                success(toast.success(response.data.message));
                setIsShown(true);
                
              } else {
                success(toast.success(response.data.message));
                setIsShown(false);
              }
            });
        } else {
          history.push('/')
          success(toast.success(response.data.message));
        }
      });
  };
  // });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    errors,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
    <div className='row justify-content-center'>
            <div className="col-lg-6 col-12 ">
					  <div className="box ">
						<div className="box-header with-border">
						  <h3 className="box-title d-flex justify-content-center">User registration</h3>
						</div>
						{/* <!-- /.box-header --> */}
						<form className="form" onSubmit={handleSubmit(onSubmit)}>
							<div className="box-body">
								<div className="form-group">
									<label className="form-label">First Name</label>
									<div className="input-group mb-3">
										<span className="input-group-text"><i className="ti-user"></i></span>
                    <input
                  placeholder='Enter first name'
                  className="form-control"
                  type='text'
                  name='fname'
                  {...register('fname')}
                />
									</div>
								</div>
								<div className="form-group">
									<label className="form-label">Last Name</label>
									<div className="input-group mb-3">
                  <span className="input-group-text"><i className="ti-user"></i></span>
                    <input
                  placeholder='Enter last name'
                  className="form-control"
                  label='Phone'
                  type='text'
                  name='lname'
                  {...register('lname')}
                />
									</div>
								</div>
								<div className="form-group">
									<label className="form-label">Phone Number</label>
									<div className="input-group mb-3">
                  <span className="input-group-text"><i className="ti-mobile"></i></span>
                    <input
                    placeholder='Enter your phone number'
                    className="form-control"
                    label='Phone'
                    type='text'
                    name='phone'
                    {...register('phone')}
                  />
               
                {localStorage.getItem('phoneverify') ? (
                  <>
                    <span className='text-primary'>verified</span>
                  </>
                ) : (
                  <>
                    {isShown && isShown === true ? (
                      <>
                        <button
                          data-toggle='modal'
                          onClick={() => addOtp()}
                          type='button'
                          className='btn btn-outline-success'
                        >
                          Verify-Otp
                        </button>
                        {verifyOtp && (
                          <Modal
                            hideIcon={true}
                            handleClose={closeOtp}
                            customWidth='50%'
                            className='customWidth'
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
								<div className="form-group">
									<label className="form-label">Email</label>
									<div className="input-group mb-3">
                  <span className="input-group-text"><i className="ti-email"></i></span>
                    <input
                  placeholder='Enter your email'
                  className="form-control"
                  type='text'
                  name='email'
                  {...register('email')}
                />
                {localStorage.getItem('emailverify') ? (
                  <>
                    <span className='text-primary'>verified</span>
                  </>
                ) : (
                  <>
                    {isShown1 && isShown1 === true ? (
                      <>
                        <button
                          data-toggle='modal'
                          onClick={() => addOtpEmail()}
                          type='button'
                          className='btn btn-outline-success'
                        >
                          Verify-Otp
                        </button>
                        {verifyOtpEmail && (
                          <Modal
                            hideIcon={true}
                            handleClose={closeOtpEmail}
                            customWidth='50%'
                            className='customWidth'
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
							{/* <!-- /.box-body --> */}
							<div className="box-footer d-flex justify-content-center">
								<button type="button" className="btn btn-warning me-1 ">
								  <i className="ti-trash"></i> Cancel
								</button>
								<button type="submit" className="btn btn-primary">
								  <i className="ti-save-alt"></i> Save
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

export default GetOtp;
