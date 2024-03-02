import React from 'react'
import SideBarItem from './SideBarItem'
import logo from '../../../assets/trans-facier.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faGraduationCap, faChalkboardTeacher, faGear, faSchool, faRightFromBracket, faX  } from '@fortawesome/free-solid-svg-icons';
import ActionBtn from './ActionBtn';

import user from '../../../assets/user.jpg'
import TransBtn from './TransBtn';
import RegisterStudent from '../forms/RegisterStudent';

import { useState } from 'react';
import RegisterLecturer from '../forms/RegisterLecturer';

export default function SideBar() {
  const [showPopup, setShowPopup] = useState(false)
  const [lecturerPopup, setLecturerPopup] = useState(false)

  const handleRegisterOpenPopup = () =>{
      // setShowPopup(true);
      setLecturerPopup(true)
  }
  const handleRegisterClosePopup = () =>{
      // setShowPopup(true);
      setLecturerPopup(false)
  }

  const handleClosePopup = () =>{
      setShowPopup(false);
  }
  const handleOpenPopup = () =>{
      setShowPopup(true);
  }


  return (
    <>
        <div className="bg-white side-container">

            <div className="logo">
              <div className="flex justify-center items-center mr-5">
                <div className="logo flex my-4 ">
                    <img src={logo} alt="" className='bg-white rounded-full w-10 h-10'/>
                    <p className='font-medium ml-1.5 mt-2'>fa<span className='primary-text-blue'>cier</span></p>
                </div>
              </div>

              <div className="rounded-full">
                <img src={user} className="profile" />
                <p className='mt-2 text-center text-sm'>Ibitein Iyalla</p>
                <p className='text-zinc-600 text-xs text-center'>ibiteiniyalla@gmail.com</p>
              </div>

                <div className="" onClick={handleOpenPopup}>
                  <ActionBtn name='register student'/>
                </div>

                {showPopup && (
                    <div className="custom-popup">
                      <div className="popup-content">
                            <div className="flex justify-end items-end">
                                <FontAwesomeIcon icon={faX} className='text-black w-3 h-3' onClick={handleClosePopup}/>
                            </div>

                          <RegisterStudent />
                        </div>
                      </div>
                )}

                <div className="" onClick={handleRegisterOpenPopup}>
                  <TransBtn name='register lecturer' />
                </div>

                {lecturerPopup && (
                    <div className="custom-popup">
                      <div className="popup-content">
                            <div className="flex justify-end items-end">
                                <FontAwesomeIcon icon={faX} className='text-black w-3 h-3' onClick={handleRegisterClosePopup}/>
                            </div>

                          <RegisterLecturer  />
                        </div>
                      </div>
                )}


                <div className="side-links">
                    <div className="">
                      <SideBarItem icon={faSquarePollHorizontal} name='dashboard' link='/admin/home'/>
                      {/* <SideBarItem icon={faSchool} name='faculties' link='/admin/faculties'/> */}
                      <SideBarItem icon={faGraduationCap} name='students' link='/admin/students'/>
                      <SideBarItem icon={faChalkboardTeacher} name='lecturers' link='/admin/lecturers'/>
                      {/* <SideBarItem icon={faGear} name='settings' link='/admin/settings'/> */}
                      <SideBarItem icon={faRightFromBracket} name='sign out' link='/admin/home'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
