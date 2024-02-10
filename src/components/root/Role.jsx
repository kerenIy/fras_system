import React, { useState } from 'react'
import students from '../../assets/students.svg'
import RoleItem from './RoleItem'
import Button from '../global/Button'
import { Link, useNavigate } from 'react-router-dom'

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
                <p className='mb-5 text-4xl primary-text-dark font-medium capitalize'>select a role:</p>


                <div className="container">
                    <div className={admin} onClick={handleAdminSelect}>
                        <RoleItem role='Administrator'/>
                    </div>

                    <div className={lecturer} onClick={handleLecturerSelect}>
                        <RoleItem role='Lecturer' />
                    </div>               
                </div>


                <div className="mt-7 flex">
                    <button className="py-3 pl-3 font-medium rounded-lg text-md capitalize mt-4" onClick={handleNavigate}>
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
