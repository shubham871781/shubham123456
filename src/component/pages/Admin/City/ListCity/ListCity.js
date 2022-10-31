import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  API_URL,
  GETALLCITY,
} from '../../../../../Apiconst/Apiconst';

function ListCity() {
  const [userRequest, setUserRequest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${GETALLCITY}`;

    axios
      .get(url, {
    
      })
    //   .then((response) => response.data)
    //   .then((data) => {
    //     setLoading(false);
    //     setUserRequest(response.data);
    //     console.log(response.data);
    //   });
    .then((response) => {
        console.log(response.data)
        setUserRequest(response.data.data);
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
                <h4 className='page-title'>STATE LIST</h4>
                <div className='d-inline-block align-items-center'>
                  <nav>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <Link to='#'>
                          <i className='mdi mdi-home-outline'></i>
                        </Link>
                      </li>
                      <li className='breadcrumb-item'>
                        <button><Link to='/list-state'>Add City
                        </Link></button>
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
                            <th>City Name</th>
                            <th>State Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                      
                          {userRequest && userRequest.map((item, index) => {
                            return (
                                <tr key={item.id} className='hover-primary'>
                                <td>{item.id ? item.id : ''}</td>
                                <td>{item.name ? item.name : ''}</td>
                                <td>{item.state_name ? item.state_name : ''}</td>
                                <td>{ <div className='btn-group'>
                                <button><Link to={`/add-area/${item.id}`}>Add Area
                                </Link></button>
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

export default ListCity;
