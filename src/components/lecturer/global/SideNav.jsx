import React from 'react'
import SideBarItem from './SideNavItem'
import logo from '../../../assets/trans-facier.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faGraduationCap, faChalkboardTeacher, faGear, faSchool, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
// import ActionBtn from './ActionBtn';

import { Link } from 'react-router-dom';

import user from '../../../assets/user.jpg'

export default function SideNav() {
  return (
    <>
        <div className="bg-white side-nav">

            <div className="logo">
              <div className="flex justify-center items-center mr-5">
                <div className="logo flex my-4 ">
                    <img src={logo} alt="" className='bg-white rounded-full w-10 h-10'/>
                    <p className='font-medium ml-1.5 mt-2'>fa<span className='text-green-500'>cier</span></p>
                </div>
              </div>

              <div className="rounded-full">
                <img src={user} className="profile" />
                <p className='mt-2 text-center text-sm'>Ibitein Iyalla</p>
                <p className='text-zinc-600 text-xs text-center'>ibiteiniyalla@gmail.com</p>
              </div>

                {/* <ActionBtn name='register student'/> */}

                <div className="side-links">
                    <div className="">
                      {/* <SideBarItem icon={faSquarePollHorizontal} name='dashboard' link='/admin/home'/> */}
                      {/* <SideBarItem icon={faSchool} name='faculties' link='/admin/faculties'/> */}
                      <SideBarItem icon={faChalkboardTeacher} name='classes' link='/classes'/>
                      <SideBarItem icon={faGraduationCap} name='students' link='/admin/lecturers'/>
                      <SideBarItem icon={faGear} name='settings' link='/admin/settings'/>
                      <SideBarItem icon={faRightFromBracket} name='sign out' link='/admin/home'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
