import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import { CgProfile } from "react-icons/cg";
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import React from 'react';
import { RiMenuFill } from "react-icons/ri";
import logo from './images/mvgr-logo.png'
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
<BrowserRouter>
    <div className='pp'>
      <header>
        <div className='headerPart'>
        {/* <div><img src={logo} alt='college logo' className='logo'/></div> */}
        <div><RiMenuFill onClick={()=> {setShowMenu(!showMenu)}} onMouseOver={()=> {setShowMenu(!showMenu)}} className='menuIcon '/></div>  
        {/* onClick={()=> {setShowMenu(!showMenu)}} */}
        {/* <div className='cilckprofile'><CgProfile /></div>  */}
        </div>
      </header>
       <Navbar show = {showMenu}/>
       <div className='main'>
          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          </Routes>
       </div>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
