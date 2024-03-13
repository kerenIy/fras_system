import React, {useContext, useEffect, useState} from 'react'
import {classList} from './class'
import ClassItem from './ClassItem'
import NewClass from './NewClass'

import image1 from '../../../assets/poppy flower.svg'
import image2 from '../../../assets/rose flower.svg'
import image3 from '../../../assets/brose flower.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import { SessionContext } from '../../../context/SessionProvider'
import { failure } from '../../../classes/Notifications'

import axios from "../../../api/url"
const GET_CLASSES = `Lecturer/ViewAllClasses`

export default function ClassContainer() {
    const {token} = useContext(SessionContext)

    const [showPopup, setShowPopup] = useState(false)
    const [classes, setClasses] = useState([
        {
            id: 1,
            colorScheme: 'bg-[#BA68C8] color-scheme',
            courseTitle: 'Software Quality & Testing',
            level: '400L',
            department: 'Software Engineering',
            courseCode: 'SENG 412',
        },
    ])

    const handleOpenPopup = () =>{
        setShowPopup(true);
    }

    const handleClosePopup = () =>{
        setShowPopup(false);
    }

    useEffect(() =>{
        const getAllClasses = async () =>{
            let message = ``

            const formData ={
                SessionKey: token,
            }
    
            try{
                const response = await axios.post(GET_CLASSES, formData,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Accept": "multipart/form-data",
                      },
                      credentials: true,
                })
    
                // console.log(response.data.data)
                // setClasses(response.data)
            }
            catch(err){
                message = "Failed to Load Classes"
                failure(message)
                console.log(err)
            }
        }

        getAllClasses()
    }, classes)

  return (
    <>
        <div className="mx-5">
            <div className="flex">
                <div className="mt-9 ml-2 flex justify-end items-end">
                        <div className="act-btn text-center py-1.5 px-4 rounded-sm mb-4">
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
                        </div> 
                    </div>
            </div> 

            <div className="cont grid grid-cols-3 gap-1 mt-4">
                {classes.map((item) =>(
                    <>
                        <ClassItem 
                            colorScheme = {item.colorScheme}
                            courseTitle = {item.courseTitle}
                            level = {item.level}
                            department = {item.department}
                            courseCode = {item.courseCode}
                        />
                    </>
                ))}
            </div>
        </div>
        
    </>
  )
}
