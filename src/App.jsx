import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import { CgProfile } from "react-icons/cg";
import Dashboard from './pages/Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import React from 'react';
import { RiMenuFill } from "react-icons/ri";
import logo from './images/mvgr-logo.png'
import { useState } from 'react';

function App() {
  // const [showMenu, setShowMenu] = useState(false);
  return (
<BrowserRouter>
<GoogleOAuthProvider clientId="146252088511-iel0g4aggqv0omaa3hprk13m2cr1qjba.apps.googleusercontent.com">
    <div className='pp'>
      {/* <header>
        <div className='headerPart'>
        <div><img src={logo} alt='college logo' className='logo'/></div>
        <div><RiMenuFill onClick={()=> {setShowMenu(!showMenu)}} onMouseOver={()=> {setShowMenu(!showMenu)}} className='menuIcon '/></div>  
        onClick={()=> {setShowMenu(!showMenu)}}
        <div className='cilckprofile'><CgProfile /></div> 
        </div>
      </header> */}
       {/* <Navbar show = {showMenu}/> */}
       <Login/>
       <div className='main'>
          <Routes>
           <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          </Routes>
       </div>
        
    </div>
    </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
