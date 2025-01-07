import '../App.css'

import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';

import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [decoded, setDecoded] = useState(null);


  const responseSuccess = (credentialResponse) => {
    setShowLogin(true);
    const decoded = jwtDecode(credentialResponse.credential);
    setDecoded(decoded);
    console.log(decoded);
  };

  const responseFailure = () => {
    console.log("login is not successful");
  };

  const handleLogout = () => {
    setShowLogin(false);
    setDecoded(null);
    googleLogout();
  };

  return (
    <div>
      {showLogin ? (
        <div className='userWelcome'>
          <h1>Welcome, {decoded.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={responseSuccess}
          onError={responseFailure}
        />
      )}
    </div>
  )
}

export default Login