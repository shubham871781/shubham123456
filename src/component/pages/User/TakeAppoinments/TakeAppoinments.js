// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { makeStyles } from '@material-ui/styles';
// import {
//   API_URL,
//   TAKEAPPOINTMENT,
//   VIEWALLDOCTOR,
// } from '../../../../Apiconst/Apiconst';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import { Formik, Form, Field } from 'formik';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import moment from 'moment';
// import * as Yup from 'yup';

// const useStyles = makeStyles({
//   input: {
//     width: '100%',
//     padding: '5px',
//     borderRadius: '5px',
//     height: '35px',
//     borderRadius: '5px',
//   },
// });

// function TakeAppoinments() {
//   const success = () => {};
//   const classes = useStyles();

//   const { state } = useLocation();
//   const [loading, setLoading] = useState(false);
//   const [selected, setSelected] = useState([]);
//   const [userRequest, setUserRequest] = useState([]);
//   const [valid_from_date, handleDateChange] = useState(new Date());
//   const [valid_till_date, handleDateChange1] = useState(new Date());
//   const newFromDate = moment(valid_from_date).format('YYYY/MM/DD');
//   const newTillDate = moment(valid_till_date).format('YYYY/MM/DD');
//   const [from_time, handleDateChange3] = useState();
//   const [to_time, handleDateChange4] = useState();

//   const onSubmit = (values, e) => {
//     const url1 = `${API_URL}/${TAKEAPPOINTMENT}`;
//     var bodyFormData = new FormData();
//     bodyFormData.append('start_date', newFromDate);
//     bodyFormData.append('doctor_id', selected);
//     bodyFormData.append('end_date', newTillDate);
//     bodyFormData.append('start_time', from_time);
//     bodyFormData.append('end_time', to_time);
//     bodyFormData.append('user_id', 2);
//     bodyFormData.append('shortdescription', values.shortdescription);

//     axios
//       .post(url1, bodyFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((response) => {
//         if (response.status === 200) {
//           success(toast.success(response.data.message));
//         }
//       });
//   };

//   useEffect(() => {
//     setLoading(true);
//     const url = `${API_URL}/${VIEWALLDOCTOR}`;

//     axios
//       .get(url, {})
//       .then((response) => response.data)
//       .then((data) => {
//         setLoading(false);
//         setUserRequest(data.response);
//       });
//   }, [state]);

//   return (
//     <>
//       <div className='content-wrapper'>
//         <div className='container-full'>
//           <div className='content-header'>
//             <div className='d-flex align-items-center'>
//               <div className='me-auto'>
//                 <h4 className='page-title'>General Form Elements</h4>
//                 <div className='d-inline-block align-items-center'>
//                   <nav>
//                     <ol className='breadcrumb'>
//                       <li className='breadcrumb-item'>
//                         <a href='#'>
//                           <i className='mdi mdi-home-outline'></i>
//                         </a>
//                       </li>
//                       <li className='breadcrumb-item' aria-current='page'>
//                         Forms
//                       </li>
//                       <li
//                         className='breadcrumb-item active'
//                         aria-current='page'
//                       >
//                         General Form Elements
//                       </li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Formik
//             key='one'
//             enableReinitialize
//             initialValues={{
//               start_date: '',
//               doctor_id: '',
//               end_date: '',
//               start_time: '',
//               end_time: '',
//               shortdescription: '',
//             }}
//             // validationSchema={Yup.object().shape({
//             //   start_date: Yup.string().required('Start Date is required'),
//             //   doctor_id: Yup.string().required('Doctor id is required'),
//             //   end_date: Yup.string().required('End Date is required'),
//             //   start_time: Yup.string().required('Start time is required'),
//             //   end_time: Yup.string().required('End time is required'),
//             //   shortdescription: Yup.string().required(
//             //     'Description is required'
//             //   ),
//             // })}
            
//             onSubmit={(values) => {
//               onSubmit(values);
//               console.log(values);
//             }}
//           >
//             {({ setFieldValue, touched, handleChange, values, errors }) => (
//               <>
//                 <section className='content'>
//                   <div className='box'>
//                     <div className='box-header with-border'>
//                       <h4 className='box-title'>APPOINTMENT FORM</h4>
//                     </div>
//                     <Form key='oneForm'>
//                       <div className='box-body'>
//                         <h4 className='box-title text-info mb-0'>
//                           <i className='ti-user me-15'></i>TAKE APPOINTMENT
//                         </h4>
//                         <hr className='my-15' />
//                         <div className='row'>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label className='form-label'>Clinic Name</label>

//                               <select
//                                 className='form-input' //select2
//                                 style={{
//                                   width: '100%',
//                                   backgroundColor: 'transparent',
//                                   borderColor: 'black',
//                                 }}
//                                 selected={selected.doctor_id}
//                                 onChange={(e) => setSelected(e.target.value)}
//                                 name='doctor_id'
//                                 value={selected.doctor_id}
//                                 placeholder='Select mode'
//                               >
//                                 <option></option>
//                                 {userRequest.map((d) => {
//                                   return (
//                                     <option key={d.id} value={d.id}>
//                                       {d.clinic_name}
//                                     </option>
//                                   );
//                                 })}
//                               </select>
//                               {errors.doctor_id && touched.doctor_id ? (
//                                 <div className='text-danger'>
//                                   {errors.doctor_id}
//                                 </div>
//                               ) : null}
//                             </div>
//                           </div>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label className='form-label'>Clinic Name</label>
//                               <div className='input-group'>
//                                 <Field
//                                   label='Short Description'
//                                   type='text'
//                                   name='shortdescription'
//                                  
//                                   placeholder='Enter short description'
//                                 />
//                               </div>
//                               {errors.shortdescription &&
//                               touched.shortdescription ? (
//                                 <div className='text-danger'>
//                                   {errors.shortdescription}
//                                 </div>
//                               ) : null}
//                             </div>
//                           </div>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label className='form-label'>Start Date</label>
//                               <div className='input-group'>
//                                 <input
//                                   type='date'
//                                   id='myDatetime'
//                                   value={valid_from_date}
//                                   onChange={(e) =>
//                                     handleDateChange(e.target.value)
//                                   }
//                                   name='start_date'
//                                  
//                                 ></input>
//                               </div>

//                             </div>
//                           </div>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label className='form-label'>End Date</label>

//                               <div className='input-group'>
//                                 <input
//                                   type='date'
//                                   id='myDatetime'
//                                   value={valid_till_date}
//                                   onChange={(e) =>
//                                     handleDateChange1(e.target.value)
//                                   }
//                                   name='end_date'
//                                  
//                                 ></input>
//                               </div>
//                               {errors.end_date && touched.end_date ? (
//                                 <div className='text-danger'>
//                                   {errors.end_date}
//                                 </div>
//                               ) : null}
//                             </div>
//                           </div>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label className='form-label'>Start Time</label>

//                               <div className='input-group'>
//                                 <input
//                                   id='appt-time'
//                                   type='time'
//                                   value={from_time}
//                                   name='start_time'
//                                   onChange={(e) =>
//                                     handleDateChange3(e.target.value)
//                                   }
//                                  
//                                   step='2'
//                                 />
//                               </div>
//                               {errors.start_time && touched.start_time ? (
//                                 <div className='text-danger'>
//                                   {errors.start_time}
//                                 </div>
//                               ) : null}
//                             </div>
//                           </div>
//                           <div className='col-6'>
//                             <div className='form-group'>
//                               <label className='form-label'>End Time</label>

//                               <div className='input-group'>
//                                 <input
//                                   id='appt-time'
//                                   type='time'
//                                   value={to_time}
//                                   name='end_time'
//                                   onChange={(e) =>
//                                     handleDateChange4(e.target.value)
//                                   }
//                                  
//                                   step='2'
//                                 />
//                               </div>
//                               {errors.end_time && touched.end_time ? (
//                                 <div className='text-danger'>
//                                   {errors.end_time}
//                                 </div>
//                               ) : null}
//                             </div>
//                           </div>
//                         </div>
//                         <div className='box-footer'>
//                           <button type='submit' className='btn btn-primary'>
//                             <i className='ti-save-alt'></i>
//                             ADD
//                           </button>
//                         </div>
//                       </div>
//                     </Form>
//                   </div>
//                 </section>
//               </>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// }
// export default TakeAppoinments;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  API_URL,
  TAKEAPPOINTMENT,
  VIEWALLDOCTOR,
} from '../../../../Apiconst/Apiconst';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import * as Yup from 'yup';


function TakeAppoinments() {
  const success = () => {};

  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [userRequest, setUserRequest] = useState([]);

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

  const formik = useFormik({
    initialValues: {
      start_date: '',
      doctor_id: '',
      end_date: '',
      start_time: '',
      end_time: '',
      shortdescription: '',
    },
    validationSchema: Yup.object().shape({
      start_date: Yup.string().required('Start Date is required'),
      doctor_id: Yup.string().required('Doctor id is required'),
      end_date: Yup.string().required('End Date is required'),
      start_time: Yup.string().required('Start time is required'),
      end_time: Yup.string().required('End time is required'),
      shortdescription: Yup.string().required('Description is required'),
    }),
    onSubmit: (values) => {
      const newFromDate = moment(values.start_date).format('YYYY/MM/DD');
      const newTillDate = moment(values.end_date).format('YYYY/MM/DD');
      const url1 = `${API_URL}/${TAKEAPPOINTMENT}`;
      var bodyFormData = new FormData();
      bodyFormData.append('start_date', newFromDate);
      bodyFormData.append('doctor_id', values.doctor_id);
      bodyFormData.append('end_date', newTillDate);
      bodyFormData.append('start_time', values.start_time);
      bodyFormData.append('end_time', values.end_time);
      bodyFormData.append('user_id', 3);
      bodyFormData.append('shortdescription', values.shortdescription);

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
              <form onSubmit={formik.handleSubmit}>
                <div className='box-body'>
                  <h4 className='box-title text-info mb-0'>
                    <i className='ti-user me-15'></i>TAKE APPOINTMENT
                  </h4>
                  <hr className='my-15' />
                  <div className='row'>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='form-label'>Clinic Name</label>

                        <select
                          className='form-input' //select2
                          style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            borderColor: 'black',
                          }}
                          name='doctor_id'
                          placeholder='Select mode'
                          {...formik.getFieldProps('doctor_id')}
                        >
                          <option></option>
                          {userRequest.map((d) => {
                            return (
                              <option key={d.id} value={d.id}>
                                {d.clinic_name}
                              </option>
                            );
                          })}
                        </select>
                        {formik.touched.doctor_id && formik.errors.doctor_id ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.doctor_id}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='form-label'>Clinic Name</label>
                        <div className='input-group'>
                          <input
                            label='Short Description'
                            type='text'
                            name='shortdescription'
                           
                            placeholder='Enter short description'
                            {...formik.getFieldProps('shortdescription')}
                          />
                        </div>
                        {formik.touched.shortdescription &&
                        formik.errors.shortdescription ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.shortdescription}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='form-label'>Start Date</label>
                        <div className='input-group'>
                          <input
                            type='date'
                            id='myDatetime'
                            name='start_date'
                           
                            {...formik.getFieldProps('start_date')}
                          ></input>
                        </div>
                        {formik.touched.start_date &&
                        formik.errors.start_date ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.start_date}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label className='form-label'>End Date</label>

                        <div className='input-group'>
                          <input
                            type='date'
                            id='myDatetime'
                            name='end_date'
                           
                            {...formik.getFieldProps('end_date')}
                          ></input>
                        </div>
                        {formik.touched.end_date && formik.errors.end_date ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.end_date}
                          </span>
                        ) : null}
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
                           
                            step='2'
                            {...formik.getFieldProps('start_time')}
                          />
                        </div>
                        {formik.touched.start_time &&
                        formik.errors.start_time ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.start_time}
                          </span>
                        ) : null}
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
                           
                            step='2'
                            {...formik.getFieldProps('end_time')}
                          />
                        </div>
                        {formik.touched.end_time && formik.errors.end_time ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.end_time}
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
    </>
  );
}
export default TakeAppoinments;

