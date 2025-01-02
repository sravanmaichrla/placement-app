// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { HiOutlineHome } from "react-icons/hi2";

import {Link} from 'react-router';

// import logo from '../images/mvgr-logo.png'

const Navbar = ({show})=>{
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            {/* <img src={logo} alt='college logo' className='logo'/> */}
            <nav>
                <ul>
                    
                    <li><Link to='/' className='alink'>Dashboard</Link></li>
                    <li>My Profile</li>
                    <li>Drive Calender</li>
                    <li>Career Choice</li>
                    <li>Mentor/Counsellor details</li>
                    <li>Logout</li>
                    <li>Feedback</li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;