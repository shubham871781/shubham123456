import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useFormik, Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import {
  API_URL,
  GETSINGLEDOCTOR,
  EDITDOCTOR,
  DOCTORSPECIALITY,
  DOCTORQUALIFICATION,
} from '../../../../Apiconst/Apiconst';
import { yupResolver } from '@hookform/resolvers/yup';
import 'antd/dist/antd.min.css';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Upload } from 'antd';

// const useStyles = makeStyles(theme => ({
//     tableOverflow: {
//         overflow: 'auto'
//     },
//     submit: {
//         top: '17px'
//     },
//     avatarpreview: {
//         width: '136px',
//         height: '131px'
//     },
//     svg: {
//         display: 'noneimportant'
//     }
// }))

function EditDoctor() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const success = () => {};
  const { state } = useLocation();
  const [userRequest, setUserRequest] = useState({
    user: null,
  });
  const [userReq, setUserReq] = useState([]);
  const [userSpeciality, setUserSpeciality] = useState([]);

  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${GETSINGLEDOCTOR}/${id}/`;

    axios
      .get(url, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log(data.response[0]);
        setUserRequest(data.response[0]);
      });
  }, [state]);

  // const { user } = userRequest;
  // if (user) {
  //     setValue('registration_number', user.registration_number);
  //     setValue('qualification_id', user.qualification_id);
  //     setValue('clinic_name', user.clinic_name);
  //     setValue('clinic_registration_number', user.clinic_registration_number);
  //     setValue('bio', user.bio);
  //     setValue('specilization_id', user.specilization_id);
  //     setValue('experience_years', user.experience_years);
  //     setValue('user_id', user.user_id);
  // }
  const [profile_photo, setProfile_photo] = useState('notset');

  const [digital_signature, setDigital_signature] = useState('notset');
  const [
    address_proof_of_clinic_regetration,
    setAddress_proof_of_clinic_regetration,
  ] = useState('notset');
  const [degree_certificate, setDegree_certificate] = useState('notset');
  const [doctor_regestration_no_proof, setDoctor_regestration_no_proof] =
    useState('notset');
  const [clinic_regestration_certificate, setClinic_regestration_certificate] =
    useState('notset');

  const onChange = ({ fileList }) => {
    setProfile_photo({ fileList });
  };

  const onChange1 = ({ fileList }) => {
    setDigital_signature({ fileList });
  };
  const onChange2 = ({ fileList }) => {
    setAddress_proof_of_clinic_regetration({ fileList });
  };
  const onChange3 = ({ fileList }) => {
    setDegree_certificate({ fileList });
  };
  const onChange4 = ({ fileList }) => {
    setDoctor_regestration_no_proof({ fileList });
  };
  const onChange5 = ({ fileList }) => {
    setClinic_regestration_certificate({ fileList });
  };

  const onPreview = async (file) => {
    let src = file.url;
    console.log(src);
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview1 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview2 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview3 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview4 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview5 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFiles1, setSelectedFiles1] = useState([]);
  const [selectedFiles2, setSelectedFiles2] = useState([]);
  const [selectedFiles3, setSelectedFiles3] = useState([]);
  const [selectedFiles4, setSelectedFiles4] = useState([]);
  const [selectedFiles5, setSelectedFiles5] = useState([]);

  const [image, SetImage] = useState('notset');
  const [image1, SetImage1] = useState('notset');
  const [image2, SetImage2] = useState('notset');
  const [image3, SetImage3] = useState('notset');
  const [image4, SetImage4] = useState('notset');
  const [image5, SetImage5] = useState('notset');

//   var resultdiv = {
//     display: 'flex',
//   };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      SetImage(photo);
      return <></>;
    });
  };
  const renderPhotos1 = (source) => {
    return source.map((photo) => {
      SetImage1(photo);
      return <></>;
    });
  };
  const renderPhotos2 = (source) => {
    return source.map((photo) => {
      SetImage2(photo);
      return <></>;
    });
  };
  const renderPhotos3 = (source) => {
    return source.map((photo) => {
      SetImage3(photo);
      return <></>;
    });
  };
  const renderPhotos4 = (source) => {
    return source.map((photo) => {
      SetImage4(photo);
      return <></>;
    });
  };
  const renderPhotos5 = (source) => {
    return source.map((photo) => {
      SetImage5(photo);
      return <></>;
    });
  };

  const schema = yup.object().shape({
    //   fname: yup.string().required('First name  is required'),
    //   lname: yup.string().required('Last name is required'),
    //   phone: yup.string().required('Phone is required'),
    //   email: yup.string().required('Email is required'),
  });

  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${DOCTORQUALIFICATION}`;

    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserReq(data.response);
      });
  }, [state]);

  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${DOCTORSPECIALITY}`;

    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserSpeciality(data.responce);
      });
  }, [state]);
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

  setValue('registration_number', userRequest.registration_number);
  setValue('qualification_id', userRequest.qualification_id);
  setValue('clinic_name', userRequest.clinic_name);
  setValue(
    'clinic_registration_number',
    userRequest.clinic_registration_number
  );
  setValue('bio', userRequest.bio);
  setValue('specilization_id', userRequest.specilization_id);
  setValue('experience_years', userRequest.experience_years);
  setValue('user_id', userRequest.user_id);

  const onSubmit = (values) => {
    console.log(values);
    const url1 = `${API_URL}/${EDITDOCTOR}`;
    var bodyFormData = new FormData();
    bodyFormData.append('doctor_id', id);
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
    if (profile_photo.fileList) {
      for (var i = 0; i < profile_photo.fileList.length; i++) {
        bodyFormData.append(
          'profile_photo',
          profile_photo.fileList[i].originFileObj
        );
      }
    }
    if (digital_signature.fileList) {
      for (var i = 0; i < digital_signature.fileList.length; i++) {
        bodyFormData.append(
          'digital_signature',
          digital_signature.fileList[i].originFileObj
        );
      }
    }
    if (address_proof_of_clinic_regetration.fileList) {
      for (
        var i = 0;
        i < address_proof_of_clinic_regetration.fileList.length;
        i++
      ) {
        bodyFormData.append(
          'address_proof_of_clinic_regetration',
          address_proof_of_clinic_regetration.fileList[i].originFileObj
        );
      }
    }
    if (degree_certificate.fileList) {
      for (var i = 0; i < degree_certificate.fileList.length; i++) {
        bodyFormData.append(
          'degree_certificate',
          degree_certificate.fileList[i].originFileObj
        );
      }
    }
    if (doctor_regestration_no_proof.fileList) {
      for (var i = 0; i < doctor_regestration_no_proof.fileList.length; i++) {
        bodyFormData.append(
          'doctor_regestration_no_proof',
          doctor_regestration_no_proof.fileList[i].originFileObj
        );
      }
    }
    if (clinic_regestration_certificate.fileList) {
      for (
        var i = 0;
        i < clinic_regestration_certificate.fileList.length;
        i++
      ) {
        bodyFormData.append(
          'clinic_regestration_certificate',
          clinic_regestration_certificate.fileList[i].originFileObj
        );
      }
    }
    axios
      .put(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          // history.push('/view-all-doctor')
        }
      });
  };
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
                                // {...formik.getFieldProps('registration_number')}
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
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-6'>
                          <label className='form-label'>Bio</label>
                          <div className='form-group'>
                            <div className='input-group mb-3 VERIFYOTP_inp'>
                              <input
                                className='form-control ps-15 bg-transparent'
                                placeholder='Enter your bio'
                                label='Bio'
                                type='text'
                                name='bio'
                                {...register('bio')}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='col-12'>
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
                              />
                            </div>
                          </div>
                        </div>
                        <h4 className='box-title text-info mb-0 mt-20'>
                          <i className='ti-save me-15'></i> Requirements
                        </h4>
                        <hr className='my-15' />

                        <div className='col-6'>
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
                        <div className='row'>
                          <div className='col-6'>
                            <div className='mb-3'>
                              <label htmlFor='formFile' className='form-label'>
                                Profile Photo
                              </label>
                             {/* <div >
                                 {profile_photo == 'notset' &&
                                userRequest &&
                                userRequest.profile_photo ? (
                                  <img
                                    src={userRequest.profile_photo}
                                    listType='picture'
                                    alt='user image'
                                    width='100'
                                  />
                                ) : (
                                  <div
                                    id='imagePreview'
                                    style={{
                                      backgroundImage:
                                        'url(' + profile_photo + ')',
                                    }}
                                  ></div>
                                )}
                              </div> */}
                              <div>{renderPhotos(selectedFiles)}</div>
                              <Upload
                                action={'blob:http://localhost:3000/'}
                                name='profile_photo'
                                listType='picture'
                                onChange={onChange}
                                onPreview={onPreview}
                                multiple={false}
                              >
                                <Button
                                  icon={
                                    <UploadOutlined />
                                  }
                                >
                                  {userRequest && userRequest.profile_photo ?
                                 userRequest.profile_photo: 'Choose Image'}
                                </Button>
                              </Upload>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='mb-3'>
                              <label htmlFor='formFile' className='form-label'>
                                Digital Signature
                              </label>
                              <div>{renderPhotos1(selectedFiles1)}</div>
                              <Upload
                                action={'blob:http://localhost:3000/'}
                                name='digital_signature'
                                listType='picture'
                                onChange={onChange1}
                                onPreview={onPreview1}
                                showUploadList={true}
                              >
                                <Button
                                  icon={
                                  
                                    <UploadOutlined />
                                  }
                                >
                                  {userRequest && userRequest.digital_signature ?
                                 userRequest.digital_signature: 'Choose Image'}
                                </Button>
                              </Upload>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='mb-3'>
                              <label htmlFor='formFile' className='form-label'>
                                Address Proof
                              </label>
                              <div>{renderPhotos2(selectedFiles2)}</div>

                              <Upload
                                action={'blob:http://localhost:3000/'}
                                name='address_proof_of_clinic_regetration'
                                listType='picture'
                                onChange={onChange2}
                                onPreview={onPreview2}
                                showUploadList={true}
                              >
                                <Button
                                  icon={
                                   
                                    <UploadOutlined />
                                  }
                                >
                                  {userRequest && userRequest.address_proof_of_clinic_regetration ?
                                 userRequest.address_proof_of_clinic_regetration: 'Choose Image'}
                                </Button>
                              </Upload>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='mb-3'>
                              <label htmlFor='formFile' className='form-label'>
                                Degree Certificate
                              </label>
                              <div>{renderPhotos3(selectedFiles3)}</div>

                              <Upload
                                action={'blob:http://localhost:3000/'}
                                name='degree_certificate'
                                listType='picture'
                                onChange={onChange3}
                                onPreview={onPreview3}
                                showUploadList={true}
                              >
                                <Button
                                  icon={
                                  
                                    <UploadOutlined />
                                  }
                                >
                                      {userRequest && userRequest.degree_certificate ?
                                 userRequest.degree_certificate: 'Choose Image'}
                                </Button>
                              </Upload>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='mb-3'>
                              <label htmlFor='formFile' className='form-label'>
                                Doctor Regestration
                              </label>
                              <div>{renderPhotos4(selectedFiles4)}</div>

                              <Upload
                                action={'blob:http://localhost:3000/'}
                                name='doctor_regestration_no_proof'
                                listType='picture'
                                onChange={onChange4}
                                onPreview={onPreview4}
                                showUploadList={true}
                              >
                                <Button
                                  icon={
                                   
                                    <UploadOutlined />
                                  }
                                >
                                  {userRequest && userRequest.doctor_regestration_no_proof ?
                                 userRequest.doctor_regestration_no_proof: 'Choose Image'}
                                </Button>
                              </Upload>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='mb-3 '>
                              <label htmlFor='formFile' className='form-label'>
                                Clinic Regestration Certificate
                              </label>
                              {/* <div>{renderPhotos5(selectedFiles5)}</div>
                              {clinic_regestration_certificate == 'notset' &&
                              clinic_regestration_certificate &&
                              userRequest.clinic_regestration_certificate ? (
                                // <img
                                //   src={userRequest.clinic_regestration_certificate}
                                //   className=''
                                //   alt='user image'
                                //   width='100'
                                //   listType='picture'
                                // />
                                <p>{userRequest.clinic_regestration_certificate}</p>
                              ) : (
                                <div
                                  id='imagePreview'
                                  style={{
                                    backgroundImage:
                                      clinic_regestration_certificate,
                                    height: 'inherit',
                                    width: 'inherit',
                                  }}
                                ></div>
                                )} */}
                                <div className='design'>
                              <div>{renderPhotos5(selectedFiles5)}</div>
                              <Upload
                                action={'blob:http://localhost:3000/'}
                                name='clinic_regestration_certificate'
                                listType='picture'
                                onChange={onChange5}
                                onPreview={onPreview5}
                                showUploadList={true}
                                
                              >
                                <Button  icon={<UploadOutlined />}>
                                 {userRequest && userRequest.clinic_regestration_certificate ?
                                 userRequest.clinic_regestration_certificate: 'Choose Image'}
                                </Button>
                              </Upload>
                            </div>
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

export default EditDoctor;
