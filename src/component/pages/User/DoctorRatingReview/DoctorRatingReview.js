import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { API_URL, RATING, VIEWALLDOCTOR } from '../../../../Apiconst/Apiconst';
// components
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Page from '../../../../component/Page';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import * as Yup from 'yup';

const mystyle = {
  width: '100%',
  padding: '5px',
  borderRadius: '5px',
  height: '35px',
  borderRadius: '5px',
};

function DoctorRatingReview() {
  const success = () => {};
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [userRequest, setUserRequest] = useState([]);
  const keyUser = localStorage.getItem('key_user');

  const formik = useFormik({
    initialValues: {
      doctor_id: '',
      rating: '',
      review: '',
    },
    validationSchema: Yup.object().shape({
      rating: Yup.string().required('Rating is required'),
      review: Yup.string().required('Review is required'),
      doctor_id: Yup.string().required('Doctor Id is required'),
    }),
    onSubmit: (values) => {
      const url1 = `${API_URL}/${RATING}`;
      var bodyFormData = new FormData();
      bodyFormData.append('user', 3);
      bodyFormData.append('doctor', values.doctor_id);
      bodyFormData.append('rating', values.rating);
      bodyFormData.append('review', values.review);

      axios
        .post(url1, bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          if (response.status === 200) {
            success(toast.success(response.data.message));
          }
        });
    },
  });

  // const [label, setlables] = useState();
  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${VIEWALLDOCTOR}`;

    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserRequest(data.response);
      });
  }, [state]);
  return (
    <>
        <div className='container-full'>
          <div className='content-header'>
            <div className='d-flex align-items-center'>
              <div className='me-auto'>
                <h4 className='page-title'>DOCTOR RATING</h4>
                <div className='d-inline-block align-items-center'>
                  <section className='content'>
                    <div className='box'>
                      <div className='box-header with-border'>
                        <h4 className='box-title'>DOCTOR RATING</h4>
                      </div>
                      <form onSubmit={formik.handleSubmit}>
                        <div className='box-body'>
                          <h4 className='box-title text-info mb-0'>
                            <i className='ti-user me-15'></i>DOCTOR RATING
                          </h4>
                          <hr className='my-15' />
                          <div className='row'>
                            <div className='col-6'>
                              <div className='form-group'>
                                <label className='form-label'>
                                  Clinic Name
                                </label>

                                <select
                                  className='form-input' //select2
                                  style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    borderColor: 'black',
                                  }}
                                  {...formik.getFieldProps('doctor_id')}
                                  name='doctor_id'
                                  placeholder='Select doctor'
                                >
                                  <option value='' selected>
                                    Select doctor clinic
                                  </option>
                                  {userRequest &&
                                    userRequest.map((d) => {
                                      return (
                                        <option key={d.id} value={d.id}>
                                          {d.clinic_name}
                                        </option>
                                      );
                                    })}
                                </select>
                                {formik.touched.doctor_id &&
                                formik.errors.doctor_id ? (
                                  <span style={{ color: 'red' }}>
                                    {formik.errors.doctor_id}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                            <div className='col-6'>
                              <div className='form-group'>
                                <label className='form-label'>Rating</label>
                                <div className='input-group'>
                                  <input
                                    style={mystyle}
                                    type='number'
                                    name='rating'
                                    max='5'
                                    min='0'
                                    step='.1'
                                    placeholder='Select Rating'
                                    {...formik.getFieldProps('rating')}
                                  />
                                </div>
                                {formik.touched.rating &&
                                formik.errors.rating ? (
                                  <span style={{ color: 'red' }}>
                                    {formik.errors.rating}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                            <div className='col-12'>
                              <div className='form-group'>
                                <label className='form-label'>Review</label>
                                <div className='input-group'>
                                  <input
                                    style={mystyle}
                                    type='text'
                                    name='review'
                                    placeholder='Enter review'
                                    {...formik.getFieldProps('review')}
                                  />
                                </div>
                                {formik.touched.review &&
                                formik.errors.review ? (
                                  <span style={{ color: 'red' }}>
                                    {formik.errors.review}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className='box-footer'>
                            <button type='submit' className='btn btn-primary'>
                              <i className='ti-save-alt'></i>
                              ADD
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}
export default DoctorRatingReview;
