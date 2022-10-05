





import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  API_URL,
  BOOKAPPOINTMENT,
  VIEWALLDOCTOR,
  DOCTORSCHEUL
} from '../../../../Apiconst/Apiconst';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
 import * as Yup from 'yup';



function DoctotTiming() {
  const success = () => {};


  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const formik=useFormik({

    initialValues:{

      start_date: '',
      doctor_id: '',
      end_date: '',
      start_time: '',
      end_time: '',
      mode: '',

    },
    validationSchema:Yup.object().shape({
      start_date: Yup.string().required('Start Date is required'),
      // mode: Yup.string().required('Mode is required'),
      doctor_id: Yup.string().required('Doctor id is required'),
      end_date: Yup.string().required('End Date is required'),
      start_time: Yup.string().required('Start time is required'),
      end_time: Yup.string().required('End time is required'),
    }),
     onSubmit:values => {

      const newFromDate = moment(values.start_date).format('YYYY/MM/DD');
      const newTillDate = moment(values.end_date).format('YYYY/MM/DD');
    const url1 = `${API_URL}/${DOCTORSCHEUL}`;
    var bodyFormData = new FormData();
    // bodyFormData.append('mode', values.mode);
    bodyFormData.append('doctor_id', values.doctor_id);
    bodyFormData.append('start_date', newFromDate);
    bodyFormData.append('end_date', newTillDate);
    bodyFormData.append('start_time', values.start_time );
    bodyFormData.append('end_time', values.end_time );
    // bodyFormData.append('patient_id', 2);

    axios
      .post(url1, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          success(toast.success(response.data.message));
        }
      });
  }
  })

  const [label, setlables] = useState([]);
  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${VIEWALLDOCTOR}`;
    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setlables(data.response);
      });
  }, [state]);


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
                      <h4 className='box-title'>APPOINTMENT FORM</h4>
                    </div>
                    <form className='form' onSubmit={formik.handleSubmit}>
                      <div className='box-body'>
                        <h4 className='box-title text-info mb-0'>
                          <i className='ti-user me-15'></i>BOOK APPOINTMENT
                        </h4>
                        <hr className='my-15' />
                        {/*  <label  className='form-label' style={{ displaytextAlign : 'center'}} >Date masks:</label> */}
                        <div className='row'>
                          {/* <div className='col-6'>
                            <div className='form-group'>
                              <label className='form-label'>Mode</label>
                              <select
                                className='form-input ' //select2
                                style={{
                                  width: '100%',
                                  backgroundColor: 'transparent',
                                  borderColor: 'black',
                                }}
                               
                                name='mode'
                                {...formik.getFieldProps('mode')}
                                placeholder='Select mode'
                              >
                                <option></option>
                                <option value='online'>Online</option>
                                <option value='offline'>Offline</option>
                              </select>
                              {formik.touched.mode && formik.errors.mode ? <span style={{color:'red'}}>{formik.errors.mode}</span> : null}
                            </div>
                          </div>{' '} */}
                          <div className='col-6'>
                            <div className='form-group'>
                              <label className='form-label'>Doctor Id</label>
                              <select
                                className='form-input ' //select2
                                style={{
                                  width: '100%',
                                  backgroundColor: 'transparent',
                                  borderColor: 'black',
                                }}
                               
                                name='doctor_id'
                                {...formik.getFieldProps('doctor_id')}
                              
                                placeholder='Select doctor id'
                              >
                                <option></option>
                                {label.map((d) => {
                                  return (
                                    //  console.log(d.id, d.clinic_name)
                                    <option key={d.id} value={d.id}>
                                      {d.clinic_name}
                                    </option>
                                  );
                                })}
                              </select>
                              {formik.touched.doctor_id && formik.errors.doctor_id ? <span style={{color:'red'}}>{formik.errors.doctor_id}</span> : null}

                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='form-group'>
                              <label className='form-label'>Start Date</label>

                              <div className='input-group'>
                                <input
                                  type='date'
                                  id='myDatetime'
                                  {...formik.getFieldProps('start_date')}
                                
                                  name='start_date'
                                 
                                ></input>
                              </div>
                              {formik.touched.start_date && formik.errors.start_date ? <span style={{color:'red'}}>{formik.errors.start_date}</span> : null}
                            
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='form-group'>
                              <label className='form-label'>End Date</label>

                              <div className='input-group'>
                                <input
                                  type='date'
                                  id='myDatetime'
                                  {...formik.getFieldProps('end_date')}

                                  name='end_date'
                                 
                                ></input>
                              </div>
                              {formik.touched.end_date && formik.errors.end_date ? <span style={{color:'red'}}>{formik.errors.end_date}</span> : null}

                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='form-group'>
                              <label className='form-label'>Start Time</label>

                              <div className='input-group'>
                                <input
                                  id='appt-time'
                                  type='time'
                                
                                  name='start_time'
                                  {...formik.getFieldProps('start_time')}
                                 
                                 
                                  step='2'
                                />
                              </div>
                              {formik.touched.start_time && formik.errors.start_time ? <span style={{color:'red'}}>{formik.errors.start_time}</span> : null}

                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='form-group'>
                              <label className='form-label'>End Time</label>

                              <div className='input-group'>
                                <input
                                  id='appt-time'
                                  type='time'
                                 
                                  name='end_time'
                                  {...formik.getFieldProps('end_time')}
                                
                                 
                                  step='2'
                                />
                              </div>
                              {formik.touched.end_time && formik.errors.end_time ? <span style={{color:'red'}}>{formik.errors.end_time}</span> : null}

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
    </>
  );
}
export default DoctotTiming;

