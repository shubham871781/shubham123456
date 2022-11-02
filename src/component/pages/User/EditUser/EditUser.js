
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, GETUSER, EDITUSER } from '../../../../Apiconst/Apiconst';
// components
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
// import Page from '../../../component/Page';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { SectionWrapperStyled } from '../../../Auth/LoginVerificationStyle';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
// import Loader from '../../../CommonFieldComponent/Loader';



export default function EditUser({}) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const success = () => {};
  const { state } = useLocation();
//   const { setValue } = useForm();
  const [region, SetselectRegion] = useState('');
  // const [city, SetselectCity] = useState('');
  const classes = useStyles();
  const [userRequest, setUserRequest] = useState({user: null});
  const userKey= localStorage.getItem('user_Key')
  const userAuth= localStorage.getItem('token_key')
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [phone, setPhone] = useState([]);
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [email, setEmail] = useState([]);


  useEffect(() => {
    setLoading(true)
    const url = `${API_URL}/${GETUSER}`;
    axios.get(url, 
        {
            headers: {
                'Authorization': ['token',userAuth].join(' '),
            }
        })
        .then(response => response.data)
        .then((data) => {
            setLoading(false)
            // setPhone(data.response.phone );
            // setFname(data.response.fname );
            // setLname(data.response.lname );
            // setEmail(data.response.email );
        
            setUserRequest(data.response)
        })
}, []);
// const {user} = userRequest;
console.log(userRequest.email)
// console.log(user.email)
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
            bodyFormData.append('fname', values.fname);
            bodyFormData.append('lname', values.lname);
            bodyFormData.append('phone', values.phone);
            bodyFormData.append('email', values.email);
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

setValue('email',userRequest.email)
setValue('phone',userRequest.phone)

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
                              placeholder='Enter first name'
                              label='First Name'
                              type='text'
                              name='fname'
                              id='fname'
                            //   defaultValue={fname}
                              {...register('fname')}

                            />
                         
                          </div>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <input
                              placeholder='Enter Last name'
                              label='Last Name'
                              type='text'
                              name='lname'
                              defaultValue={lname}
                             

                            />
                        
                          </div>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <input
                              placeholder='Enter phone number'
                              label='Phone'
                              type='text'
                              name='phone'
                              {...register('phone')} 
                           

                            />
                         
                          </div>
                          <div className='input_field'>
                            {' '}
                            <span>
                              <i
                                aria-hidden='true'
                                className='fa fa-envelope'
                              ></i>
                            </span>
                            <input
                                    placeholder='Enter email'
                                    label='Email'
                                    type='text'
                                    name='email'
                                    {...register('email')}

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