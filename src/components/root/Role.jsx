import React, { useState } from 'react'
import students from '../../assets/students.svg'
import RoleItem from './RoleItem'
import Button from '../global/Button'
import { Link, useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserSecret } from '@fortawesome/free-solid-svg-icons'


export default function Role() {
    const navigate = useNavigate()

    const [admin, setAdmin] = useState('role-box');
    const [lecturer, setLecturer] = useState('role-box');
    const [role, setRole] = useState('')

    const handleAdminSelect = () =>{
        setRole('admin')
        console.log(role)

        if(lecturer == 'selected-role-box'){
            setLecturer('role-box')
            setAdmin('selected-role-box')
        }
        else if(admin == 'role-box'){
            setAdmin('selected-role-box')

        }
    }

    const handleLecturerSelect = () =>{
        setRole('lecturer')
        console.log(role)

        if(admin == 'selected-role-box'){
            setAdmin('role-box')
            setLecturer('selected-role-box')



        }
        else if (lecturer == 'role-box'){
            setLecturer('selected-role-box')
        }
    }

    const handleNavigate = () =>{
        if(role == 'admin')
        {
            navigate('/admin')
        }
        else if(role == 'lecturer')
        {
            navigate('/lecturer')
        }
    }
  return (
    <>
        <div className="roles flex justify-center items-center">
            <div className="hero-text">
                <p className='text-3xl font-medium capitalize mb-1.5'>get started</p>
                <p className='text-zinc-600 text-sm font-light mb-10'>Select the option that best applies to your role</p>

                <div className="mt-5 container">
                    <div className={admin} onClick={handleAdminSelect}>
                        <RoleItem img={faUserSecret} role='Administrator' description='For system administrators'/>
                    </div>

                    <div className={lecturer} onClick={handleLecturerSelect}>
                        <RoleItem img={faUsers} role='Lecturer' description='For course instructors and lecturers'/>
                    </div>               
                </div>


                <div className="mt-7 flex justify-end items-end">
                    <button className="py-3 font-light rounded-lg text-xs capitalize mt-4" onClick={handleNavigate}>
                        Next <span className='ml-3'>&rarr;</span>
                    </button>
                </div>

            </div>
            <div className="hero-img">
                <img src={students} alt="" />
            </div>
        </div>
    </>
  )
}
