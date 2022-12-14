import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    TextField
} from '../../../../CommonFieldComponent/FormFields';

// import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import { API_URL, TAKEAPPOINTMENT } from '../../../../Apiconst/Apiconst'
// components
import { Link as RouterLink, useLocation } from 'react-router-dom';
import page from '../../../../component/page';
import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
// import Loader from '../../../CommonFieldComponent/Loader'



function TakeAppointment() {

    const success = () => { }
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
                    // navigate('/dashboard/press-releases', { replace: true });
                }
            })

    };
    return (
        <>
            <div className='content-wrapper'>
                <div className='container-full'>
                    {/* <!-- Content Header (page header) --> */}
                    <div className='content-header'>
                        {/* <div className='d-flex align-items-center'> */}
                        {/* <div className='me-auto'> */}
                        <h4 className='page-title'>Patients</h4>
                        {/* <div className='d-inline-block align-items-center'> */}
                        <ToastContainer />
                        <page title='Add Take-Appointment'>
                            <box sx={{ pb: 5 }}>
                                <h3 variant='h4'>Add Take-Appointment</h3>
                            </box>

                            {/* <Card variant='outlined'>

                                <CardContent> */}
                                    {/* <grid container spacing={4}> */}
                                        

                                            <Formik
                                                key='one'
                                                enableReinitialize
                                                initialValues={{
                                                    start_date: '',
                                                    doctor_id: '',
                                                    end_date: '',
                                                    start_time: '',
                                                    end_time: '',
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
                                                        <Form key='oneForm'>
                                                            {/* <grid container spacing={2}> */}
                                                                <grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        label='Start date'
                                                                        type='text'
                                                                        name='start_date'
                                                                    />
                                                                </grid>
                                                                <grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        label='Doctor id'
                                                                        type='text'
                                                                        name='doctor_id'
                                                                    />
                                                                </grid><grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        label='End date'
                                                                        type='text'
                                                                        name='end_date'
                                                                    />
                                                                </grid><grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        label='Start time'
                                                                        type='text'
                                                                        name='start_time'
                                                                    />
                                                                </grid><grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        label='End_time'
                                                                        type='text'
                                                                        name='end_time'
                                                                    />
                                                                </grid>
                                                                <grid item xs={12} sm={6}>
                                                                    <TextField
                                                                        label='Short Description'
                                                                        type='text'
                                                                        name='shortdescription'
                                                                    />
                                                                </grid>
                                                        {/* </grid> */}
                                                            <button
                                                                type='submit'
                                                                fullWidth
                                                                variant='contained'
                                                                color='primary'
                                                                className={classes.submit}
                                                            >
                                                                ADD
                                                            </button>

                                                        </Form>
                                                    </>
                                                )}
                                            </Formik>
                                    
                                {/* </CardContent>
                            </Card> */}
                        </page>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TakeAppointment