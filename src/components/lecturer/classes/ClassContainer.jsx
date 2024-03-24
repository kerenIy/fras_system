import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {classList} from './class'
import ClassItem from './ClassItem'
import NewClass from './NewClass'

import image1 from '../../../assets/poppy flower.svg'
import image2 from '../../../assets/rose flower.svg'
import image3 from '../../../assets/brose flower.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX , faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import { SessionContext } from '../../../context/SessionProvider'
import { failure } from '../../../classes/Notifications'

import axios from "../../../api/url"
const GET_CLASSES = `Lecturer/ViewAllClasses`

import { useClass } from '../../../context/ClassProvider'

import Loading from '../../global/Loading'
import load from "../../../assets/dotss.gif"

export default function ClassContainer() {
    const {token} = useContext(SessionContext)
    const {setClassID} = useClass() 

    const [loading, setLoading] = useState(false)

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
    
                console.log(response.data.data)
                setLoading(false)
                const classArray = response.data.data
                setClasses(classArray)
                
            }
            catch(err){
                message = "Failed to Load Classes"
                failure(message)
                console.log(err)
            }
        }

        getAllClasses()
    }, [classes])

    
    const navigate = useNavigate();


    const goToClass = (id) =>{
        setClassID(id)
        console.log(id)
        navigate('/class1')
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
                        {/* <ClassItem 
                            colorScheme = "bg-[#BA68C8] color-scheme"
                            courseTitle = {item.title}
                            level = {item.level}
                            department = "Software Engineering"
                            courseCode = {item.courseCode}
                        /> */}
                         <div className="class-item mx-1.5 text-white rounded-lg bg-white border">
                            <div className="relative rounded-lg">
                                {/* <p className='text-[#BA68C8]'>{getClassID(item.id)}</p> */}
                                <div className={`course-${item.id} color-scheme`}>
                                    <p className='text-sm font-medium '>{item.title}</p>
                                    <p className='text-xxs '>{item.level}, Software Engineering</p>
                                    <p className='flex justify-end items-end text-xs font-semibold'>{item.courseCode}</p>
                                </div>

                                <img src={image1} alt="" className='absolute bottom-1 right-0 w-[50px] h-[50px]'/>
                                {/* <img src={image2} alt="" className='absolute top-0 right-0 w-[50px] h-[50px]'/> */}

                                <div className="py-10">
                                    <p className='cursor-pointer text-zinc-600 text-xxs uppercase absolute bottom-1 left-0 px-3' onClick={() => goToClass(item.id)}>
                                        view details 
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-1'/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>

                ))}
            </div>
        </div>

        {loading && (
                 <div className="load-popup">
                 <div className="load-content">
                 <div className="flex justify-end items-end">
                     {/* <FontAwesomeIcon icon={faX} className='text-black w-3 h-3' onClick={handleClosePopup}/> */}
                 </div>
     
                 <div className="flex justify-center items-center">
                     <Loading img={load}/>
                 </div>
                 </div>
             </div>
            )}
        
    </>
  )
}
