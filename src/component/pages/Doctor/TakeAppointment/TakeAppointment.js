import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
     TextField
} from '../../../../CommonFieldComponent/FormFields';



import { API_URL, TAKEAPPOINTMENT } from '../../../../Apiconst/Apiconst'
// components
import { Link as RouterLink , useLocation} from 'react-router-dom';
import Page from '../../../../component/Page';
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
// import Loader from '../../../CommonFieldComponent/Loader'




function TakeAppointment() {

    const success = () => { }
    const classes = useStyles();
    const [userRequest, setUserRequest] = useState([]);

    const onSubmit = (values, e) => {
        const url1 = `${API_URL}/${TAKEAPPOINTMENT}`;
        var bodyFormData = new FormData();
        bodyFormData.append('start_date', values.start_date);
        bodyFormData.append('doctor_id', values.doctor_id);
        bodyFormData.append('end_date', values.end_date);
        bodyFormData.append('start_time', values.start_time);
        bodyFormData.append('end_time', values.end_time);
        axios
            .post(url1, bodyFormData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
            .then((response) => {

                if (response.status === 200) {
                    success(toast.success(response.data.message))
                   
                }
            })

    };
  return (
    <>
                                              <div className='content-wrapper'>
        <div className='container-full'>
        
          <div className='content-header'>
           
                <h4 className='page-title'>Patients</h4>
               
         

                                <Formik
                                    key='one'
                                    enableReinitialize
                                    initialValues={{
                                        start_date: '',
                                        doctor_id: '',
                                        end_date: '',
                                        start_time : '',
                                        end_time  :'',
                                    }}
                                    // validationSchema={Yup.object().shape({

                                    //     shortdescription: Yup.string()
                                    //         .required('User Name is required'),
                                    //     title: Yup.string()
                                    //         .required('User Name is required')
                                    // })}

                                    onSubmit={values => {
                                        onSubmit(values)
                                        console.log(values)
                                    }}

                                >
                                    {({ setFieldValue,
                                        touched,
                                        values, }) => (
                                        <>
                                           <Form>
                                                        <TextField
                                                            label='Start date'
                                                            type='text'
                                                            name='start_date'
                                                        />
                                                 
                                                  
                                                        <TextField
                                                            label='Doctor id'
                                                            type='text'
                                                            name='doctor_id'
                                                        />
                                                    
                                                        <TextField
                                                            label='End date'
                                                            type='text'
                                                            name='end_date'
                                                        />
                                                  
                                                        <TextField
                                                            label='Start time'
                                                            type='text'
                                                            name='start_time'
                                                        />
                                                  
                                                        <TextField
                                                            label='End_time'
                                                            type='text'
                                                            name='end_time'
                                                        />
                                               
                                                        <TextField
                                                            label='Short Description'
                                                            type='text'
                                                            name='shortdescription'
                                                        />
                                                   
                                                <button
                                                    type='submit'
                                                    fullWidth
                                                    variant='contained'
                                                    color='primary'
                                                    
                                                >
                                                    ADD
                                                </button>

                                            </Form>
                                        </>
                                    )}
                                </Formik>
                           
            </div>
                                    </div>
                                    </div>
           
    </>
  )
}

export default TakeAppointment