import React from 'react'
import teachers from '../../assets/teachers.svg'
import students from '../../assets/students.svg'
import attendance from '../../assets/attendance.svg'

export default function MidSection() {
  return (
    <>
    <div className="mid-section rounded-3xl flex justify-center items-center">
        <div className="">
            <p className='mid-section-text text-center capitalize text-5xl font-medium'>built for effortless attendance</p>
            <p className='text-sm font-light mt-3 mb-6 text-center'>
                Revolutionize your classroom management effortlessly. 
                Boost productivity <br/>and engagement while ensuring accurate 
                attendance tracking.
            </p>

            <div className='mid-section-imgs flex justify-center items-center'>
                <div className="text-center mx-5">
                    <img src={students} alt="" className='inline'/>
                    <p className='text-xl font-medium '>Capture students records easier</p>
                    {/* <p className='text-sm font-light '>
                        Lorem ipsum dolor sit amet 
                        <br />consectetur adipisicing elit. Sed, fugit.
                    </p> */}
                </div>
                <div className="text-center mx-5">
                    <img src={teachers} alt="" className='inline'/>
                    <p  className='text-xl font-medium '>Improve classroom productivity</p>
                    {/* <p className='text-sm font-light '>
                        Lorem ipsum dolor sit amet, consectetur 
                        <br />adipisicing elit. Quo, aperiam.
                    </p> */}
                </div>
                <div className="text-center mx-5">
                    <img src={attendance} alt="" className='inline'/>
                    <p className='text-xl font-medium'>Keep track of all your records</p>
                    {/* <p className='text-sm font-light'>
                     Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Quo, aperiam.
                    </p> */}
                </div>
            </div>
        </div>
    </div>
        
    </>
  )
}
