import React from 'react';
import { useLocation } from 'react-router-dom';
import PrivateRoute from '../InnerComponent/Route/PrivateRoute';
import { TOKEN } from './Route/index';
import Dashboard from '../CommonComponent/Dashboard/Dashboard';
import Patient from '../component/pages/User/Patient/Patient';
import ViewAllDoctor from '../component/pages/Doctor/ViewAllDoctor/ViewAllDoctor';
import CreateDoctorLocation from '../component/pages/Admin/DoctorLocation/CreateDoctorLocation/CreateDoctorLocation';
import EditDoctor from '../component/pages/Doctor/EditDoctor/EditDoctor';
import TakeAppointment from '../component/pages/Doctor/TakeAppointment/TakeAppointment';
import BookAppoinments from '../component/pages/User/BookAppoinments/BookAppoinments';
import TakeAppoinments from '../component/pages/User/TakeAppoinments/TakeAppoinments';
import DoctorTiming from '../component/pages/User/DoctorTiming/DoctorTiming';
import DoctorRatingReview from '../component/pages/User/DoctorRatingReview/DoctorRatingReview';
import EditUser from '../component/pages/User/EditUser/EditUser';
import GetOtpOnPhone from '../component/pages/User/Verification/GetOtpOnPhone';
import VerifyOtpOnPhone from '../component/pages/User/Verification/VerifyOtpOnPhone';
import GetOtpOnMail from '../component/pages/User/Verification/GetOtpOnMail';
import VerifyOtpOnMail from '../component/pages/User/Verification/VerifyOtpOnMail';
import EditDoctorLocation from '../component/pages/Admin/DoctorLocation/EditDoctorLocation/EditDoctorLocation';
import AddState from '../component/pages/Admin/State/AddState/AddState';
import ListState from '../component/pages/Admin/State/ListState/ListState'
import AddCity from '../component/pages/Admin/City/AddCity/AddCity'
import ListCity from '../component/pages/Admin/City/ListCity/ListCity'
import ListArea from '../component/pages/Admin/Area/LIstArea/ListArea'
import AddArea from '../component/pages/Admin/Area/AddArea/AddArea'
import ListSpeciality from '../component/pages/Admin/Speciality/ListSpeciality/ListSpeciality'
import AddSpeciality from '../component/pages/Admin/Speciality/AddSpeciality/AddSpeciality'
import ListQualification from '../component/pages/Admin/Qualification/ListQualification/ListQualification'
import AddQualification from '../component/pages/Admin/Qualification/AddQualification/AddQualification'

const Mainsection = () => {
  const location = useLocation();
  let locationpath = location.pathname;
  if(locationpath === '/dashboard-user'){
    console.log()
  }
  let userrole = localStorage.getItem(TOKEN);
  const Pathswich = () => {
    switch (locationpath) {
      // Admin route
      case '/dashboard-admin':
        return { ComponentName: <Dashboard />, Pathvalue: 'dashboard-admin' };
      case '/create-doctor-location':
        return { ComponentName: <CreateDoctorLocation />, Pathvalue: 'create-doctor-location' };
        case '/edit-doctor-location':
          return { ComponentName: <EditDoctorLocation />, Pathvalue: 'edit-doctor-location' };
          case '/add-state':
            return { ComponentName: <AddState />, Pathvalue: 'add-state' };
          case '/list-state':
            return { ComponentName: <ListState />, Pathvalue: 'list-state' };
          case '/add-city':
            return { ComponentName: <AddCity />, Pathvalue: 'add-city' };
          case '/list-city':
            return { ComponentName: <ListCity />, Pathvalue: 'list-city' };
          case '/list-area':
            return { ComponentName: <ListArea />, Pathvalue: 'list-area' };
          case '/add-area':
            return { ComponentName: <AddArea />, Pathvalue: 'add-area' };
          case '/list-speciality':
            return { ComponentName: <ListSpeciality />, Pathvalue: 'list-speciality' };
          case '/add-speciality':
            return { ComponentName: <AddSpeciality />, Pathvalue: 'add-speciality' };
          case '/list-qualification':
            return { ComponentName: <ListQualification />, Pathvalue: 'list-qualification' };
          case '/add-qualification':
            return { ComponentName: <AddQualification />, Pathvalue: 'add-qualification' };
    
      // user route

      case '/dashboard-user':
        return {  ComponentName: <Dashboard />, Pathvalue: 'dashboard-user' };
      case '/view-all-doctor':
        return { ComponentName: <ViewAllDoctor />, Pathvalue: 'view-all-doctor' };
      case '/book-appoinment':
        return { ComponentName: <BookAppoinments />, Pathvalue: 'book-appoinment' };
      case '/take-appoinment':
        return { ComponentName: <TakeAppoinments />, Pathvalue: 'take-appoinment' };
      case '/doctor-timing':
        return { ComponentName: <DoctorTiming />, Pathvalue: 'doctor-timing' };
      case '/doctor-rating':
        return { ComponentName: <DoctorRatingReview />, Pathvalue: 'doctor-rating' };
        case '/edit-user':
          return { ComponentName: <EditUser />, Pathvalue: 'edit-user' };
          case '/user-details':
            return { ComponentName: <Patient />, Pathvalue: 'user-details' };
            case '/edit-user-get-otp':
              return { ComponentName: <GetOtpOnPhone />, Pathvalue: 'edit-user-get-otp' };
              case '/edit-user-verify-otp':
              return { ComponentName: <VerifyOtpOnPhone />, Pathvalue: 'edit-user-verify-otp' };
              case '/edit-user-get-otp-on-mail':
                return { ComponentName: <GetOtpOnMail />, Pathvalue: 'edit-user-get-otp-on-mail' };
                case '/edit-user-verify-otp-on-mail':
                  return { ComponentName: <VerifyOtpOnMail />, Pathvalue: 'edit-user-verify-otp-on-mail' };

      //Doctor copmpontens
      case '/dashboard-doctor':
        return { ComponentName: <Dashboard />, Pathvalue: 'dashboard-doctor' };
      case '/patient-doctor':
        return { ComponentName: <Patient />, Pathvalue: 'patient-doctor' };
      case '/doctor-edit':
        return { ComponentName: <EditDoctor />, Pathvalue: 'doctor-edit/:id' };
      case '/take-appointment':
        return { ComponentName: <TakeAppointment />, Pathvalue: 'take-appointment' };
    }
  };
  return (
    <>
      {/* {userrole === 'user'
                ?
                <> */}
       <div className='wrapper'>
       <div className='content-wrapper'>

          {/* User page route */}
          <PrivateRoute exact path='/dashboard-user' component={Dashboard} />
          <PrivateRoute exact path='/user-details' component={Patient} />
          <PrivateRoute exact path='/book-appoinment' component={BookAppoinments} />
          <PrivateRoute exact path='/take-appoinment' component={TakeAppoinments} />
          <PrivateRoute exact path='/doctor-timing' component={DoctorTiming} />
          <PrivateRoute exact path='/doctor-rating' component={DoctorRatingReview} />
          <PrivateRoute exact path='/edit-user' component={EditUser} />
          <PrivateRoute exact path='/edit-user-get-otp' component={GetOtpOnPhone} />
          <PrivateRoute exact path='/edit-user-verify-otp' component={VerifyOtpOnPhone} />
          <PrivateRoute exact path='/edit-user-get-otp-on-mail' component={GetOtpOnMail} />
          <PrivateRoute exact path='/edit-user-verify-otp-on-mail' component={VerifyOtpOnMail} />






          {/* Admin page route */}
          <PrivateRoute exact path='/dashboard-admin' component={Dashboard} />
          <PrivateRoute exact path='/create-doctor-location' component={CreateDoctorLocation} />
          <PrivateRoute exact path='/edit-doctor-location' component={EditDoctorLocation} />
          <PrivateRoute exact path='/add-state' component={AddState} />
          <PrivateRoute exact path='/list-state' component={ListState} />
          <PrivateRoute exact path='/add-city/:id' component={AddCity} />
          <PrivateRoute exact path='/list-city' component={ListCity} />
          <PrivateRoute exact path='/list-area' component={ListArea} />
          <PrivateRoute exact path='/add-area/:id' component={AddArea} />
          <PrivateRoute exact path='/list-speciality' component={ListSpeciality} />
          <PrivateRoute exact path='/add-speciality' component={AddSpeciality} />
          <PrivateRoute exact path='/list-qualification' component={ListQualification} />
          <PrivateRoute exact path='/add-qualification' component={AddQualification} />


          {/* Doctor page route */}
          <PrivateRoute exact path='/dashboard-doctor' component={Dashboard } />
          <PrivateRoute exact path='/view-all-doctor' component={ViewAllDoctor} />
          <PrivateRoute exact path='/doctor-edit/:id' component={EditDoctor} />
          <PrivateRoute exact path='/take-appointment' component={TakeAppointment} />
 

        </div>
      </div>
    </>
  );
};
export default Mainsection;
