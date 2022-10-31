import React, { useState, useEffect } from 'react';
import { Link, useHistory,useLocation } from 'react-router-dom';
import axios from 'axios';
import {
    API_URL,
    DELETEDOCTORQUALIFICATION,
    DOCTORQUALIFICATION
} from '../../../../../Apiconst/Apiconst';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import toast from 'react-hot-toast';
function ListQualification() {
    const history = useHistory();
    const {state} = useLocation();
    const success = () => {};
    const [userRequest, setUserRequest] = useState([]);
    const [loading, setLoading] = useState(false);

    const deleteDonaton = (id) => {
        const durl = `${API_URL}/${DELETEDOCTORQUALIFICATION}`;
        axios.delete(durl, { data: { 'qualification_id': id } }, {
        })
            .then(response => {
                if (response.data.status === 204) {
                    success(toast.success(response.data.message))
                     history.push('/list-qualification',{state:{status:'done'}})
                }
            })
            .catch(error => {
                console.log(error)
                //handle failure
            });
    }
    const submit = (id) => {
        console.log('id', id)

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteDonaton(id)
                },
                {
                    label: 'No',

                }
            ]
        });
    }
    useEffect(() => {
        setLoading(true);
        const url1 = `${API_URL}/${DOCTORQUALIFICATION}`;
        axios
            .get(url1, {})
            .then((response) => response.data)
            .then((data) => {
                setLoading(false);
                setUserRequest(data.response);
            });
    }, [state]);

    return (
        <>

                <div className='container-full'>
                    {/* <!-- Content Header (Page header) --> */}
                    <div className='content-header'>
                        <div className='d-flex align-items-center'>
                            <div className='me-auto'>
                                <h4 className='page-title'>Qualification LIST</h4>
                                <div className='d-inline-block align-items-center'>
                                    <nav>
                                        <ol className='breadcrumb'>
                                            <li className='breadcrumb-item'>
                                                <Link to='#'>
                                                    <i className='mdi mdi-home-outline'></i>
                                                </Link>
                                            </li>
                                            <li className='breadcrumb-item'>
                                                <button><Link to='/add-qualification'>Qualification Add
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
                                                        <th>Qualification Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {userRequest && userRequest.map((item, index) => {
                                                        return (
                                                            <tr key={item.id} className='hover-primary'>
                                                                <td>{item.id ? item.id : ''}</td>
                                                                <td>{item.name ? item.name : ''}</td>
                                                                <td><button onClick={() => submit(item.id)}>delete</button></td>
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

export default ListQualification;
