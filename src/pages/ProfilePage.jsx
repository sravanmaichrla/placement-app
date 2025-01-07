import '../App.css'

import React, { useState } from 'react'

import Navbar from '../components/Navbar'

function ProfilePage({authorized}) {

const [user,setUser] = useState({});
const [profile,setProfile] = useState(false);

  return (
    <div>
      <Navbar/>
          <div className="container">
              
          </div>
    </div>
    
    
  )
}

export default ProfilePage