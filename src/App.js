import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginFromEmail from './component/Auth/LoginByEmail/LoginFormEmail';
import PublicRoute from './InnerComponent/Route/PublicRoute';
import Header from './CommonComponent/Header/Header';
import Footer from './CommonComponent/Footer/Footer';
import Main from './InnerComponent/Main';
import DoctorRegistration from './CommonComponent/Register/DoctorRegistration/DoctorRegistration';
import UserRegistration from './CommonComponent/Register/UserRegistration/UserRegistration';
import GetOtp from './component/AuthGetOtp/GetOtp';
import VerifyOtp from './component/AuthGetOtp/VerifyOtp';
import LoginVerification from './component/Auth/LoginVerification';
import TabGroup from './component/AuthGetOtp/Common/TabGroup/TabGroup'
import VerifyOtpByEmail from './component/AuthGetOtp/Common/VerifyOtpByEmail';
import GetOtpByEmail from './component/AuthGetOtp/Common/GetOtpByEmail';
import Error from './component/AuthGetOtp/Common/TabGroup/Error';
import LoginFrom from './component/Auth/LoginFrom';
import LoginVerificationEmail from './component/Auth/LoginByEmail/LoginVerificationEmail';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
<Toaster position="top-right"  />

        <PublicRoute
          exact 
          path={['/modal-register']}
          component={Header}
        />
      <Switch>
        <PublicRoute 
        exact 
        path='/' 
        restricted={false}
        component={LoginFrom} 
        />
          <PublicRoute 
        exact 
        path='/tab' 
        restricted={false}
        component={TabGroup} 
        />
             <PublicRoute 
        exact 
        path='/get-otp' 
        restricted={false}
        component={GetOtp} 
        />
              <PublicRoute 
        exact 
        path='/get-otp-by-mail' 
        restricted={false}
        component={GetOtpByEmail} 
        />
         <PublicRoute 
        exact 
        path='/login-verfication' 
        restricted={false}
        component={LoginVerification} 
        />
          <PublicRoute 
        exact 
        path='/login-verfication-email' 
        restricted={false}
        component={LoginVerificationEmail} 
        />
          <PublicRoute 
        exact 
        path='/login' 
        restricted={false}
        component={LoginFromEmail} 
        />
        <PublicRoute 
        exact 
        path='/doctor-registration' 
        restricted={false}
        component={DoctorRegistration} 
        />
         <PublicRoute 
        exact 
        path='/user-registration' 
        restricted={false}
        component={UserRegistration} 
        />
         <PublicRoute 
        exact 
        path='/verfiy-otp' 
        restricted={false}
        component={VerifyOtp} 
        />
         <PublicRoute 
        exact 
        path='/verfiy-otp-email' 
        restricted={false}
        component={VerifyOtpByEmail} 
        />
           <PublicRoute 
        exact 
        path='/modal-register' 
        restricted={false}
        component={Error} 
        />
        
        <Main />
      </Switch>
      <PublicRoute
          exact
          path={['/modal-register']}
          component={Footer}
        />
    
    </>
  );
}

export default App;
//  'test': 'react-scripts test',