import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  API_URL,
  EDITDOCTOR,
  VIEWALLDOCTOR,
} from '../../../../Apiconst/Apiconst';

function ViewAllDoctor() {
  const [userRequest, setUserRequest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${VIEWALLDOCTOR}`;

    axios
      .get(url, {
        // headers: {
        //   'Access-Control-Allow-Origin': '*'
        // }
      })
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserRequest(data.response);
        console.log(data.response);
      });
  }, []);
  console.log(userRequest);

  return (
    <>
     
        <div className='container-full'>
          {/* <!-- Content Header (Page header) --> */}
          <div className='content-header'>
            <div className='d-flex align-items-center'>
              <div className='me-auto'>
                <h4 className='page-title'>Patients</h4>
                <div className='d-inline-block align-items-center'>
                  <nav>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <Link to='#'>
                          <i className='mdi mdi-home-outline'></i>
                        </Link>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        Patients
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Main content --> */}
          <section className='content'>
            <div className='row'>
              <div className='col-12'>
                <div className='box'>
                  <div className='box-body'>
                    <div className='table-responsive rounded card-table'>
                      <table className='table border-no' id='example1'>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Profile photo</th>
                            <th>Registration number</th>
                            <th>Clinic name</th>
                            <th>Clinic registration number</th>
                            <th>Digital signature</th>
                            <th>Address proof_of_clinic regetration</th>
                            <th>Degree certificate</th>
                            <th>Doctor regestration no proof</th>
                            <th>Clinic regestration certificate</th>
                            <th>Bio</th>
                            <th>Experience years</th>
                            <th>Is del</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                            <th>Fee</th>
                            <th>Timeslot</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userRequest && userRequest.map((item, index) => {
                            return (
                                <tr key={item.id} className='hover-primary'>
                                <td>{item.id ? item.id : ''}</td>
                                <td>{
                                    <img alt='' src={item.profile_photo} /> 
                                    ? 
                                    <img alt='' src={item.profile_photo} /> 
                                    : 
                                    ''
                                }</td>
                                <td>{item.registration_number ? item.registration_number : ''}</td>
                                <td>{item.clinic_name ? item.clinic_name : ''}</td>
                                <td>{item.clinic_registration_number ? item.clinic_registration_number : ''}</td>
                                <td>{
                                  <img alt='' src={item.digital_signature} /> 
                                  ? 
                                  <img alt='' src={item.digital_signature} /> 
                                   :
                                    ''
                                    }</td>
                                <td>{
                                <img alt='' src={item.address_proof_of_clinic_regetration} />
                                 ?  
                                 <img alt='' src={item.address_proof_of_clinic_regetration} /> 
                                 : 
                                 ''}</td>
                                <td>{
                                <img alt='' src={item.degree_certificate} />
                                 ?
                                 <img alt='' src={item.degree_certificate} />
                                  : 
                                  ''}</td>
                                <td>{
                                <img alt='' src={item.doctor_regestration_no_proof} /> 
                                ? 
                                <img alt='' src={item.doctor_regestration_no_proof} /> 
                                : ''
                                }</td>
                                <td>{
                                <img alt='' src={item.clinic_regestration_certificate} /> 
                                ? 
                                <img alt='' src={item.clinic_regestration_certificate} /> 
                                : 
                                ''}</td>
                                <td>{item.bio ? item.bio : ''}</td>
                                <td>{item.experience_years ? item.experience_years : ''}</td>
                                <td>{item.is_del ? item.is_del : ''}</td>
                                <td>{item.created_at ? item.created_at : ''}</td>
                                <td>{item.updated_at ? item.updated_at : ''}</td>
                                <td>{item.fee ? item.fee : ''}</td>
                                <td>{item.timeslot ? item.timeslot : ''}</td>
                                <td>{ <div className='btn-group'>
                                    <Link
                                      to='#'
                                      className='hover-primary dropdown-toggle no-caret'
                                      data-bs-toggle='dropdown'
                                    >
                                      <i className='fa fa-ellipsis-h'></i>
                                    </Link>
                                    <div className='dropdown-menu'>
                                        <Link className='dropdown-item' to={`/doctor-edit/${item.id}`}>
                                       {/* <input
                                        type='button'
                                         value='Edit'
                                        // onClick={() => setData(item)}
                                         /> */}
                                         Edit
                                     </Link> 
                                     
                                    </div>
                                  </div>}</td>
                             
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- /.content --> */}
        </div>


    </>
  );
}

export default ViewAllDoctor;
