import React, {useState} from 'react'
import {classList} from './class'
import ClassItem from './ClassItem'
import NewClass from './NewClass'

import image1 from '../../../assets/poppy flower.svg'
import image2 from '../../../assets/rose flower.svg'
import image3 from '../../../assets/brose flower.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'



export default function ClassContainer() {
    const classes = classList

    const [showPopup, setShowPopup] = useState(false)

    const handleOpenPopup = () =>{
        setShowPopup(true);
    }

    const handleClosePopup = () =>{
        setShowPopup(false);
    }

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
