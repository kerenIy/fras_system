import React, {useState} from 'react'
import AttendanceItem from './AttendanceItem'

import { attendanceDates } from './attendanceLst'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faFileArrowDown, faChevronLeft, faChevronRight, faImage, faX } from '@fortawesome/free-solid-svg-icons'

import GreenBtn from '../global/GreenBtn'
import { useNavigate } from 'react-router-dom'
import CaptureAttendance from '../capture/CaptureAttendance'

export default function AttendanceList() {
    const [showPopup, setShowPopup] = useState(false)

    const handleOpenPopup = () =>{
        setShowPopup(true);
    }

    const handleClosePopup = () =>{
        setShowPopup(false);
    }

  const records = attendanceDates
  const navigate = useNavigate()

  const handleViewAttendance = () =>
  {
    navigate('/attendance1')
  }
  return (
    <>
        <div className="relative w-[100%]">
            {/* <AttendanceItem 
                name='Software Quality & Testing'
                date='12/02/03'
                time='10:00am'
                code='SENG 404'
            />
            <AttendanceItem 
                name='Software Quality & Testing'
                date='16/02/03'
                time='10:00am'
                code='SENG 404'
            />
            <AttendanceItem 
                name='Software Quality & Testing'
                date='20/02/03'
                time='10:00am'
                code='SENG 404'
            />
            <AttendanceItem 
                name='Software Quality & Testing'
                date='24/02/03'
                time='10:00am'
                code='SENG 404'
            />
            <AttendanceItem 
                name='Software Quality & Testing'
                date='26/02/03'
                time='10:00am'
                code='SENG 404'
            /> */}

            <div className="flex justify-end items-end">

            <div className="">
            <p className=' bg-green-500 rounded-sm my-4 mx-3 text-white text-center px-6 py-3 text-xs cursor-pointer' onClick={handleOpenPopup}>Capture Attendance <FontAwesomeIcon icon={faImage} /></p>

                    {showPopup && (
                            <div className="custom-popup">
                                <div className="popup-content">
                                    <div className="flex justify-end items-end">
                                        <FontAwesomeIcon icon={faX} className='text-black w-3 h-3' onClick={handleClosePopup}/>
                                    </div>

                                    <CaptureAttendance />
                                </div>
                            </div>
                    )}
                </div> 
            
            </div>

            <table className='rounded-lg border p-1'>
                <tr className='bg-gray-200 rounded-lg border p-2'>
                    <td className='px-8 text-center text-sm'>ID</td>
                    <td className='px-2 text-center text-sm'>Date Taken</td>
                    <td className='px-2 text-center text-sm'>Time Taken</td>
                    <td className='px-2 text-center text-sm'>Actions</td>
                </tr>
                
                {records.map((item) =>(
                    <>
                    <tr className='text-zinc-600 border'>
                        <td className='px-2 text-center text-xs py-3'>{item.id}</td>
                        <td className='px-2 text-center text-xs py-3'>{item.date}</td>
                        <td className='px-2 text-center text-xs py-3'>{item.time}</td>
                        <div className="flex justify-center items-center pt-1"> 
                            <p className=' bg-red-400 rounded-sm  mx-3 my-1 text-white text-center px-6 py-1 text-xs cursor-pointer' onClick={handleViewAttendance}>View <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></p>
                            <p className=' bg-green-500 rounded-sm  mx-3 my-1 text-white text-center px-6 py-1 text-xs cursor-pointer'>Export <FontAwesomeIcon icon={faFileArrowDown} /></p>
                        </div>
                    </tr>
                    </>
                ))}
            </table>

            <div className="absolute right-0 bottom-[-120px] flex justify-end items-end">
                <div className="flex justify-between items-center">
                <GreenBtn icon={faChevronLeft} />
                <div className="mx-1"></div>
                <GreenBtn icon={faChevronRight} />
                </div>
            </div>
        </div>
    </>
  )
}
