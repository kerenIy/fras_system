import React from 'react'
import attendance from '../../assets/attendance.svg'

import { Link } from 'react-router-dom'
import Button from '../global/Button'

export default function Hero() {
  return (
    <>
        <div className="flex justify-center items-center">

          <div className="hero-text">
            {/* <div className="redirects mb-8 flex font-semibold primary-text-blue text-sm redirect-links text-zinc-600">
              <Link to='/students'>Students</Link>
              <Link to='/lecturers'>Lecturers</Link>
              <Link to='/admin'>Admin</Link>
            </div> */}


            <p className='text-xs hero-rounded rounded-full font-light uppercase'><span className='font-black primary-text-blue mr-1.5'>|</span>facial recognition attendance system</p>
            <p className='main-text sm:my-6 font-semibold primary-text-dark'>Say Hello to <span className='primary-text-blue'>Effortless Attendance </span>  with <span className=''>Facial Recognition</span>!</p>
            <p className='mb-5 text-sm font-light text-zinc-600'>Streamline Attendance with AI: Say Goodbye to Manual Records!
              Introducing our Facial Recognition Attendance System: Revolutionize your classroom management effortlessly. Boost productivity and engagement while ensuring accurate attendance tracking. Join us in embracing 
              innovation for a seamless teaching experience. Try it now!
            </p>

            <Button name='get started' link='/roles'/>


            <p className='text-xs font-light tac primary-text-blue'>Terms & Conditions Apply!</p>
          </div>

          <div className="flex justify-center items-center hero-img">
            <img src={attendance} alt="" />
          </div>
        </div>


    </>
  )
}
