import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  API_URL,
  DOCTORREGISTRATION,
  DOCTORSPECIALITY,
  DOCTORQUALIFICATION,
  GETAllSTATE,
  GETALLCITYBYSTATE,
  GETALLAREABYCITY,
  GETOTP,
} from '../../../Apiconst/Apiconst';
import { useHistory, useLocation } from 'react-router-dom';
// import { useForm } from 'formik';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import VerifyOtp from '../../../component/AuthGetOtp/VerifyOtp';
import VerifyOtpByEmail from '../../../component/AuthGetOtp/Common/VerifyOtpByEmail';
import Modal from '../../Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import { EMAIL, PHONEREG, TEXT_FIELD } from '../../../Validation/Validation';
import * as Yup from 'yup';

export default function DoctorRegistration() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const success = () => {};
  const { state } = useLocation('');
  const [selectState, setSelectState] = useState([]);
  const [getState, setGetState] = useState('');
  const [userReq, setUserReq] = useState([]);
  const [userSpeciality, setUserSpeciality] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [phonenumber, setphonenumber] = useState(false);
  const [email, setEmail] = useState(false);
  const [allCity, setAllCity] = useState([]);
  const [getCity, setGetcity] = useState();
  const [allarea, setAllArea] = useState([]);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [verifyOtpEmail, setVerifyOtpEmail] = useState(false);
  const [profilePhoto1, setProfilePhoto] = useState([]);
  const [digitalSignature1, setDigital_signature] = useState([]);
  const [moreAttachment, setMoreAttachment] = useState([]);
  const [
    addressProofOfClinicRegetration1,
    setaddress_proof_of_clinic_registration,
  ] = useState([]);
  console.log(addressProofOfClinicRegetration1[0]);
  const [degreeCertificate1, setDegree_certificate] = useState([]);
  const [doctorRegestrationNoProof1, setDoctor_regestration_no_proof] =
    useState([]);
  const [clinicRegestrationCertificate1, setClinic_regestration_certificate] =
    useState([]);

  const profilePhoto = (e) => {
    setProfilePhoto(e.target.files);
  };
  // console.log(profilePhoto1.length)
  function digitalSignature(e) {
    setDigital_signature(e.target.files);
  }
  function addressProof(e) {
    setaddress_proof_of_clinic_registration(e.target.files);
  }
  function degreeCertificate(e) {
    setDegree_certificate(e.target.files);
  }
  function doctorRegestration(e) {
    setDoctor_regestration_no_proof(e.target.files);
  }
  function clinicRegestrationCertificate(e) {
    setClinic_regestration_certificate(e.target.files);
  }

  function moreAttatchments(e) {
    setMoreAttachment(e.target.files);
  }

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
    email: Yup.string().matches(EMAIL, 'Email is not valid '),
    first_name: Yup.string().matches(TEXT_FIELD, 'Name is not valid '),
    last_name: Yup.string().matches(TEXT_FIELD, 'Name is not valid '),
  });

  const onSubmit = (values) => {
    console.log(values);

    const url1 = `${API_URL}/${DOCTORREGISTRATION}`;
    var bodyFormData = new FormData();
    bodyFormData.append('first_name', values.first_name);
    bodyFormData.append('last_name', values.last_name);
    bodyFormData.append('email', values.email);
    bodyFormData.append('phone', values.phone);
    bodyFormData.append('registration_number', values.registration_number);
    bodyFormData.append('qualification_id', values.qualification_id);
    bodyFormData.append('clinic_name', values.clinic_name);
    bodyFormData.append(
      'clinic_registration_number',
      values.clinic_registration_number
    );
    bodyFormData.append('bio', values.bio);
    bodyFormData.append('specilization_id', values.specilization_id);
    bodyFormData.append('experience_years', values.experience_years);
    bodyFormData.append('user_id', 2);
    bodyFormData.append('address1', values.address1);
    bodyFormData.append('address2', values.address2);
    bodyFormData.append('pincode', values.pincode);
    bodyFormData.append('city_id', getCity ? getCity : '');
    bodyFormData.append('state_id', getState);
    bodyFormData.append('area_id', values.area_id);
    bodyFormData.append('profile_photo', profilePhoto1[0]);
    bodyFormData.append('digital_signature', digitalSignature1[0]);
    bodyFormData.append('more_attatchments', moreAttachment[0]);
    bodyFormData.append(
      'address_proof_of_clinic_registration',
      addressProofOfClinicRegetration1[0]
    );
    bodyFormData.append('degree_certificate', degreeCertificate1[0]);
    bodyFormData.append(
      'doctor_regestration_no_proof',
      doctorRegestrationNoProof1[0]
    );
    bodyFormData.append(
      'clinic_regestration_certificate',
      clinicRegestrationCertificate1[0]
    );
    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          localStorage.removeItem('emailverify');
          localStorage.removeItem('phoneverify');
          history.push('/');
        } else if (
          response.data.message === 'Phone number and Email not verified'
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
        } else if (response.data.message === 'Email is required') {
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
        } else if (response.data.message === 'Phone is required') {
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
        } else {
          success(toast.error(response.data.message));
        }
      });
  };
  // });

  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${DOCTORQUALIFICATION}`;
    const url1 = `${API_URL}/${DOCTORSPECIALITY}`;
    const url2 = `${API_URL}/${GETAllSTATE}`;

    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserReq(data.response);
      });
    axios
      .get(url1, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserSpeciality(data.responce);
      });

    axios
      .get(url2, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setSelectState(data.data);
      });
  }, [state]);

  const selectStateId = (e) => {
    const stateid = e.target.value;
    setGetState(stateid);
    const url = `${API_URL}/${GETALLCITYBYSTATE}/${stateid}/`;
    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setAllCity(data.data);
      });
  };
  const selectCityId = (e) => {
    const cityId = e.target.value;
    setGetcity(cityId);
    const url = `${API_URL}/${GETALLAREABYCITY}/${cityId}/`;
    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setAllArea(data.data);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className='container h-p100'>
        <div className='row align-items-center justify-content-md-center h-p100'>
          <div className='col-12'>
            <div className='row justify-content-center g-0'>
              <div className='col-lg-8 col-md-6 col-12'>
                <div className='bg-white rounded10 shadow-lg'>
                  <div className='content-top-agile p-20 pb-0'>
                    <h2 className='text-primary'>DOCTOR REGISTRATION</h2>
                    <p className='mb-0'>Register a new membership</p>
                  </div>
                  <div className='p-40'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='row'>
                        <div className='col-6'>
                          <label className='form-label'>First Name</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your first name'
                                label='first_name'
                                type='text'
                                name='first_name'
                                {...register('first_name')}
                                required
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              className='text-danger'
                              name='first_name'
                              as='p'
                            />
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>Last Name</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your last name '
                                label='last_name'
                                type='text'
                                name='last_name'
                                {...register('last_name')}
                                required
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              className='text-danger'
                              name='last_name'
                              as='p'
                            />
                          </div>
                        </div>

                        <div className='col-6'>
                          <label className='form-label'>Register Number</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your registration number'
                                label='Registration_number1'
                                type='text'
                                name='registration_number'
                                {...register('registration_number')}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className='col-6'>
                          <label className='form-label'>Clinic Number</label>

                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your clinic name'
                                label='Clinic_name'
                                type='text'
                                name='clinic_name'
                                {...register('clinic_name')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>
                            Clinic Registration Number
                          </label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your clinic registration number'
                                label='Clinic_registration_number'
                                type='text'
                                name='clinic_registration_number'
                                {...register('clinic_registration_number')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      
                        <div className='col-6'>
                          <label className='form-label'>Address 1</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your Address 1'
                                label='address1'
                                type='text'
                                name='address1'
                                {...register('address1')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>Address 2</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your Address 2'
                                label='address2'
                                type='text'
                                name='address2'
                                {...register('address2')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>Pincode</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your Pincode'
                                label='pincode'
                                type='text'
                                name='pincode'
                                {...register('pincode')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>Experience</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your experience years'
                                label='Experience_years'
                                type='number'
                                min='0'
                                name='experience_years'
                                {...register('experience_years')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>State</label>
                          <div className='input-group mb-3 '>
                            <select
                              className='form-input p-5 ' //select2
                              style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                borderColor: 'black',
                              }}
                              name='state_id'
                              onChange={selectStateId}
                              required
                            >
                              <option value='' selected>
                                Select State
                              </option>
                              {selectState &&
                                selectState.map((d) => {
                                  return (
                                    <option key={d.id} value={d.id}>
                                      {d.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>City</label>
                          <div className='input-group mb-3 '>
                            <select
                              className='form-input p-5 ' //select2
                              style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                borderColor: 'black',
                              }}
                              name='city_id'
                              onChange={selectCityId}
                              required
                            >
                              <option value=''>Select City</option>
                              {allCity &&
                                allCity.map((d) => {
                                  return (
                                    <option key={d.id} value={d.id}>
                                      {d.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>Area</label>
                          <div className='input-group mb-3 '>
                            <select
                              className='form-input p-5 '
                              data-placeholder='Select a State' //select2
                              style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                borderColor: 'black',
                              }}
                              name='area_id'
                              {...register('area_id')}
                              required
                            >
                              <option value='' selected>
                                Select Area
                              </option>
                              {allarea &&
                                allarea.map((d) => {
                                  console.log(d);
                                  return (
                                    <option key={d.id} value={d.id}>
                                      {d.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>

                        <h4 className='box-title text-info mb-0 mt-20'>
                          <i className='ti-save me-15'></i> Requirements
                        </h4>
                        <hr className='my-15' />
                        <div className='col-6'>
                          <label className='form-label'>Email</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your email'
                                label='email'
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
                                <span className='text-primary'>
                                  Email verified
                                </span>
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
                        <div className='col-6'>
                          <label className='form-label'>Phone</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your phone number'
                                label='phone'
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
                                <span className='text-primary'>
                                  Phone verified
                                </span>
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
                          <label className='form-label'>Qualification</label>
                          <div className='input-group mb-3'>
                            <select
                              className='form-input p-5 '
                              placeholder='Enter your user id'
                              style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                borderColor: 'black',
                              }}
                              name='qualification_id'
                              {...register('qualification_id')}
                              required
                            >
                              <option value='' selected>
                                Select Qualification
                              </option>
                              {userReq.map((d) => {
                                return (
                                  <option key={d.id} value={d.id}>
                                    {d.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>Specilization</label>
                          <div className='input-group mb-3 '>
                            <select
                              className='form-input p-5 ' //select2
                              style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                borderColor: 'black',
                              }}
                              name='specilization_id'
                              {...register('specilization_id')}
                              required
                            >
                              <option value='' selected>
                                Select Specilization
                              </option>
                              {userSpeciality.map((d) => {
                                return (
                                  <option key={d.id} value={d.id}>
                                    {d.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>

                        <h4 className='box-title text-info mb-0 mt-20'>
                          <i className='ti-save me-15'></i> Upload document
                        </h4>
                        <hr className='my-15' />
                        <div className='col-6'>
                        <div className='mb-3'>
                          <label htmlFor='formFile' className='form-label'>
                            Profile Photo
                          </label>
                          <input
                            className='form-control'
                            type='file'
                            id='formFile'
                            name='profile_photo'
                            onChange={profilePhoto}
                            required
                          />
                        </div>
</div>
<div className='col-6'>
                        <div className='mb-3'>
                          <label htmlFor='formFile' className='form-label'>
                            Digital Signature
                          </label>
                          <input
                            className='form-control'
                            type='file'
                            id='formFile'
                            name='digital_signature'
                            onChange={digitalSignature}
                            required
                          />
                        </div>
                        </div>
                        <div className='col-6'>
                        <div className='mb-3'>
                          <label htmlFor='formFile' className='form-label'>
                            Address Proof
                          </label>
                          <input
                            className='form-control'
                            type='file'
                            id='formFile'
                            name='address_proof_of_clinic_registration'
                            onChange={addressProof}
                            required
                          />
                        </div>
                        </div>
                        <div className='col-6'>
                        <div className='mb-3'>
                          <label htmlFor='formFile' className='form-label'>
                            Degree Certificate
                          </label>
                          <input
                            className='form-control'
                            type='file'
                            id='formFile'
                            name='degree_certificate'
                            onChange={degreeCertificate}
                            required
                          />
                        </div>
                        </div>
                        <div className='col-6'>
                        <div className='mb-3'>
                          <label htmlFor='formFile' className='form-label'>
                            Doctor Regestration
                          </label>
                          <input
                            className='form-control'
                            type='file'
                            id='formFile'
                            name='doctor_regestration_no_proof'
                            onChange={doctorRegestration}
                            required
                          />
                        </div>
                        </div>
                        <div className='col-6'>
                        <div className='mb-3'>
                          <label htmlFor='formFile' className='form-label'>
                            Clinic Regestration Certificate
                          </label>
                          <input
                            className='form-control'
                            type='file'
                            id='formFile'
                            name='clinic_regestration_certificate'
                            onChange={clinicRegestrationCertificate}
                            required
                          />
                        </div>
                        </div>
                        <div className='col-12'>
                        <div className='mb-3'>
                          <label htmlFor='formFile' className='form-label'>
                            More Attatchments
                          </label>
                          <input
                            className='form-control'
                            type='file'
                            id='formFile'
                            name='more_attatchments'
                            onChange={moreAttatchments}
                            required
                          />
                        </div>
</div>
<div className='col-12'>
                          <label className='form-label'>Bio</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <textarea
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your bio'
                                label='Bio'
                                type='text'
                                name='bio'
                                {...register('bio')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className='box-footer d-flex justify-content-center'>
                          <button
                            type='submit'
                            className='btn btn-primary text-white Verify_Otp_btn '
                          >
                            <i className='ti-save-alt'></i>
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className='text-center'>
                  <p className='mt-20 text-white'>- Register With -</p>
                  <p className='gap-items-2 mb-20'>
                    <a
                      className='btn btn-social-icon btn-round btn-facebook'
                      href='#'
                    >
                      <i className='fa fa-facebook'></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-round btn-twitter'
                      href='#'
                    >
                      <i className='fa fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-round btn-instagram'
                      href='#'
                    >
                      <i className='fa fa-instagram'></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
