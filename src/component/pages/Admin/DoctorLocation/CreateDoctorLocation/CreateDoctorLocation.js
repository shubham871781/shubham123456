import {
  API_URL,
  CREATEDOCTORLOCATION,
} from '../../../../../Apiconst/Apiconst';
import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

function CreateDoctorLocation() {
  const success = () => {};

  const [userRequest, setUserRequest] = useState({
    user: null,
  });

  const mystyle = {
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    height: '35px',
    borderRadius: '5px',
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      section: 'state',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name  is required'),
      section: Yup.string().required('Section is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      const url = `${API_URL}/${CREATEDOCTORLOCATION}`;
      var bodyFormData = new FormData();
      bodyFormData.append('name', values.name);
      bodyFormData.append('section', values.section);
      axios
        .post(url, bodyFormData, {
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

  return (
    <>
      <div className='content-wrapper'>
        <div className='container-full'>
          <div className='content-header'>
            <div className='d-flex align-items-center'>
              <div className='me-auto'>
                <h4 className='page-title'>General Form Elements</h4>
                <div className='d-inline-block align-items-center'>
                  <nav>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a href='#'>
                          <i className='mdi mdi-home-outline'></i>
                        </a>
                      </li>
                      <li className='breadcrumb-item' aria-current='page'>
                        Forms
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        General Form Elements
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <section className='content'>
            <div className='box'>
              <div className='box-header with-border'>
                <h4 className='box-title'>CREATE LOCATION</h4>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='form-label'>State</label>

                      <div className='input-group'>
                        <input style={mystyle}
                          label='Name'
                          type='text'
                          name='name'
                          className='registration_number1'
                          placeholder='Enter state'
                          {...formik.getFieldProps('name')}
                        />
                      </div>
                      {formik.touched.name && formik.errors.name ? (
                        <span style={{ color: 'red' }}>
                          {formik.errors.name}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className='col-6'>
                    <div className='form-group'>
                      <label className='form-label'>Section</label>

                      <div className='input-group'>
                        <input style={mystyle}
                          label='Section'
                          type='text'
                          name='section'
                          placeholder='Enter your State '
                          {...formik.getFieldProps('section')}
                        />
                      </div>
                      {formik.touched.section && formik.errors.section ? (
                        <span style={{ color: 'red' }}>
                          {formik.errors.section}
                        </span>
                      ) : null}
                    </div>
                  </div> */}
                </div>
                <div className='box-footer d-flex justify-content-center '>
                  <button type='submit' className='btn btn-primary'>
                    <i className='ti-save-alt'></i>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CreateDoctorLocation;
