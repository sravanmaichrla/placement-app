import './Loginsignup.css'

import { CgProfile } from "react-icons/cg";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import React from 'react'
import { useState } from 'react';

export const Loginsignup = () => {

const [action, setAction] = useState("Login");

  return (
    <div className='containers'>
        <div className='headers'>
            <div className='text'>{action}</div>
                <div className='underline'></div>  
        </div>
        <div className='inputs'>
            <div className='input'>
                <CgProfile/>
                <input type="text" placeholder="Username" />
            </div>
            <div className='input'>
                <MdEmail/>
                <input type="email" placeholder="Email" />
            </div>
            <div className='input'>
                <IoMdKey/>
                <input type="password" placeholder="Password" />
            </div>
            <div className="forgot-password">
                Lost Password? <span>Click Here</span>
            </div>
            <div className="submit-containers">
                <div className='submit'>
                    Login
                </div>
            </div>
        </div>
    </div>
  )
}
