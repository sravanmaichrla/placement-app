import '../App.css'

import Mentor from '../images/mentor.jpg'
import Profile from '../images/profile.jpg'
import React from 'react'
import carrer from '../images/carrer.png'
import escape from '../images/escape.jpg'
import schedule from '../images/schedule-1.jpg'

function Dashboard() {
  return (
    <section>
    <div className='container'>
      <div className='para'>
        <p>
        The Placement and Guidance Hub is a comprehensive platform designed to streamline the journey of students preparing for placements and seeking career guidance. In today’s competitive academic and professional landscape, students often face challenges in accessing timely information, tracking placement opportunities, and receiving tailored career advice. This project aims to bridge these gaps by creating a centralized, user-friendly system that empowers students to achieve their career goals.

The platform offers a variety of features, including managing placement drives, tracking student eligibility, facilitating company-student interaction, and providing curated resources for career development. It serves as a collaborative space for students, placement coordinators, and recruiters to enhance the placement process efficiently.

With a focus on responsiveness and ease of use, the Placement and Guidance Hub ensures accessibility across devices and provides an intuitive interface to help students navigate their career paths confidently.
        </p>
      </div>
    </div>
    <div className='container dashboard'>
      <div className='card'>
        <img src={Profile} width={120} height={120} ></img>
      </div>
      <div className='card'>
        <img src={Mentor} width={140} height={120} ></img>
      </div>
      <div className='card'>
        <img src={schedule} width={140} height={120} ></img>
      </div>
      <div className='card'>
        <img src={carrer} width={140} height={120} ></img>
      </div>
      <div className='card'>
        <img src={escape} width={140} height={120} ></img>
      </div>
    </div>
    </section>
  )
}

export default Dashboard