import React from 'react'
import SideBarItem from './SideNavItem'
import logo from '../../../assets/trans-facier.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faGraduationCap, faChalkboardTeacher, faGear, faSchool, faRightFromBracket, faDashboard, faX  } from '@fortawesome/free-solid-svg-icons';
// import ActionBtn from './ActionBtn';
import NewClass from '../classes/NewClass'

import { Link } from 'react-router-dom';

import user from '../../../assets/user.jpg'
import { useState } from 'react'

export default function SideNav() {
  const [showPopup, setShowPopup] = useState(false)

  const handleOpenPopup = () =>{
      setShowPopup(true);
  }

  const handleClosePopup = () =>{
      setShowPopup(false);
  }

  return (
    <>
        <div className="bg-white side-nav">

            <div className="logo">
              <div className="flex mr-5">
                <div className="logo flex my-4 ">
                    <img src={logo} alt="" className='bg-white rounded-full w-10 h-10'/>
                    <p className='font-medium ml-1.5 mt-2'>fa<span className='text-green-500'>cier</span></p>
                </div>
              </div>

              <div className="rounded-full flex ">
                <img src={user} className="mt-3 w-[30px] h-[30px] rounded-full" />
                <div className="ml-2">
                  <p className='mt-2  text-sm'>Ibitein Iyalla</p>
                  <p className='text-zinc-400 text-xs '>ibiteiniyalla@gmail.com</p>
                </div>
              </div>

                {/* <ActionBtn name='register student'/> */}

                <div className="side-links mt-6">
                    <div className="">
                      {/* <SideBarItem icon={faSquarePollHorizontal} name='dashboard' link='/admin/home'/> */}
                      {/* <SideBarItem icon={faSchool} name='faculties' link='/admin/faculties'/> */}
                      <SideBarItem icon={faDashboard} name='dashboard' link='/lecturer/home'/>
                      <SideBarItem icon={faChalkboardTeacher} name='classes' link='/classes'/>
                      <SideBarItem icon={faGraduationCap} name='students' link='/admin/lecturers'/>
                      <SideBarItem icon={faGear} name='settings' link='/admin/settings'/>
                      <SideBarItem icon={faRightFromBracket} name='sign out' link='/admin/home'/>
                    </div>
                </div>

                {/* <div className="mt-20 act-btn text-center py-1.5 px-4 rounded-sm mb-4">
                    <button className='text-sm font-normal' onClick={handleOpenPopup}>
                        Add New Course +
                    </button>

                    {showPopup && (
                            <div className="custom-popup">
                                <div className="popup-content">
                                    <div className="flex justify-end items-end">
                                        <FontAwesomeIcon icon={faX} className='text-black w-3 h-3' onClick={handleClosePopup}/>
                                    </div>

                                    <NewClass />
                                </div>
                            </div>
                    )}
                </div>  */}
            </div>
        </div>
    </>
  )
}
