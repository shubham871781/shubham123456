
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API_URL, VIEWDOCTORLOCATION, EDITDOCTORLOCATION  } from '../../../../../Apiconst/Apiconst';
// components
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
// import Page from '../../../component/Page';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { SectionWrapperStyled } from '../../../../Auth/LoginVerificationStyle';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';



export default function EditDoctorLocation() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const success = () => {};
  const { state } = useLocation();
//   const { setValue } = useForm();
  const [region, SetselectRegion] = useState('');
  // const [city, SetselectCity] = useState('');

  const [userRequest, setUserRequest] = useState({user: null});
  const userKey= localStorage.getItem('user_Key')
  const userAuth= localStorage.getItem('token_key')
  console.log(userAuth)
// console.log('token'+''+userAuth )
console.log()
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);



  useEffect(() => {
    setLoading(true)
    const url = `${API_URL}/${VIEWDOCTORLOCATION}`;
    axios.get(url, 
        {
            location_id:  '1'
        })
        .then(response => response.data)
        .then((data) => {
            setLoading(false)
            setUserRequest(data.response)
            console.log(data)
        })
}, []);

console.log(userRequest)

  const schema = yup.object().shape({
        //   fname: yup.string().required('First name  is required'),
        //   lname: yup.string().required('Last name is required'),
        //   phone: yup.string().required('Phone is required'),
        //   email: yup.string().required('Email is required'),
    })

           const  onSubmit = (values) => {
            console.log(values)
            const url1 = `${API_URL}/${EDITUSER}`;
            var bodyFormData = new FormData();
            bodyFormData.append('user_id', 10);
            bodyFormData.append('name', values.name);
            bodyFormData.append('section', 'state');
            axios
              .put(url1, bodyFormData)
              .then((response) => {
                if (response.data.status === 200) {
                  success(toast.success(response.data.message));
                  history.push('/user-details');
                } else {
                  history.push('/edit-user-get-otp-on-mail');
                  success(toast.success(response.data.message));
                 
                  
                }
              });
          
        
    }

const { register, handleSubmit, reset, setValue, getValues, errors, formState } = useForm({
    resolver: yupResolver(schema)
});

// setValue('name',userRequest.name)


  return (
    <>
            <SectionWrapperStyled>
              <div className='form_wrapper'>
                <div className='form_container'>
                  <div className='title_container'>
                    <h2> USER REGISTRATION</h2>
                  </div>
                  <div className='row clearfix' >
                    <div className=''>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='errPhone'>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <input
                              placeholder='Enter state'
                              type='text'
                              name='name'
                              id='name'
                              {...register('name')}

                            />
                         
                          </div>
                          <div className='box-footer d-flex justify-content-center '>
                            <button type='submit' className='btn btn-primary' >
                              <i className='ti-save-alt'></i>
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapperStyled>
    </>
  );
}

