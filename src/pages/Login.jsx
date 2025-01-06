import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';

import React from 'react'
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';

function Login() {
    const [showLogin, setShowLogin] = useState(false);
    // const responseSucess = (credentialResponse) => {
    //     setShowLogin(true);
    //     const decoded = jwtDecode(credentialResponse.credential);
    //     console.log(decoded);
    //     // setShowLogout(true);
    //   };
    
    //   const responseFailure = () => {
    //     console.log("login is not sucesss");
    //   };
    
    //   const Logout = () => {
    //     setShowLogin(true);
    //   };

    const login = useGoogleLogin({
        onSuccess: codeResponse => {const decoded = jwtDecode(codeResponse.credential);
            console.log(decoded)},
        flow: 'auth-code',setShowLogin : true,
      });
  return (
    <div>
        <button onClick={()=>{login()}}>Sign in with Google 🚀</button>
    </div>
      
  )
}

export default Login