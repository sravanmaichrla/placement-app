// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { HiOutlineHome } from "react-icons/hi2";

import { AiFillHome } from "react-icons/ai";
import { CgHome } from "react-icons/cg";
import { GiStack } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import {Link} from 'react-router';
import { RiShakeHandsFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import logo from '../images/mvgr-logo.png'

const Navbar = ({show})=>{
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            {/* <img src={logo} alt='college logo' className='logo'/> */}
            <nav>
                <ul>
                    
                    <li><AiFillHome /> <Link to='/' className='alink'>Dashboard </Link></li>
                    <li><IoManSharp /><Link to='/profile' className='alink'> My Profile</Link></li>
                    <li><SlCalender /> <Link to='/calendar' className='alink'>Drive Calender</Link></li>
                    <li><GiStack /><Link to='/placements' className='alink'>Placements</Link></li>
                    <li><RiShakeHandsFill /><Link to='/mentor' className='alink'>Mentor/Counsellor details</Link></li>
                    <li><IoLogOut /><Link to='/logout' className='alink'>Logout</Link></li>
                    <li>Feedback</li>
                </ul>
            </nav>
            {/* <div className='flex gap-2 items-center bottom-6 fixed p-6'>
            <image src={logo} width={35} height={35} alt='profile image'
            className='rounded-full'/>
            <div>
                <h2 className='text-sm font-bold capitalize'>SRAVAN KUMAR</h2>
                <h2 className='text-xs text-slate-400'>mail</h2>
            </div>
        </div> */}
        </div>
    )
}
export default Navbar;