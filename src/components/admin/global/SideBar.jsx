import React from 'react'
import SideBarItem from './SideBarItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal, faGraduationCap, faChalkboardTeacher, faGear, faSchool, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import ActionBtn from './ActionBtn';



export default function SideBar() {
  return (
    <>
        <div className="bg-white side-container">

            <div className="logo">
                <p className='text-lg hero-rounded rounded-full font-light uppercase'><span className='font-black primary-text-blue mr-1.5'>|</span>fras</p>

                <ActionBtn name='register student'/>

                <div className="side-links">
                    <SideBarItem icon={faSquarePollHorizontal} name='dashboard' link='/admin/home'/>
                    <SideBarItem icon={faSchool} name='faculties' link='/admin/faculties'/>
                    <SideBarItem icon={faGraduationCap} name='students' link='/admin/students'/>
                    <SideBarItem icon={faChalkboardTeacher} name='lecturers' link='/admin/lecturers'/>
                    <SideBarItem icon={faGear} name='settings' link='/admin/settings'/>
                    <SideBarItem icon={faRightFromBracket} name='sign out' link='/admin/home'/>
                </div>
            </div>
        </div>
    </>
  )
}
