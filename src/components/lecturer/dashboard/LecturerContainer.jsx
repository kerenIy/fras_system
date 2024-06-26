import React, { useState } from 'react'
import GreenCard from './GreenCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell} from '@fortawesome/free-solid-svg-icons'
import Cards from './Cards'

import chart from '../../../assets/lect-chart.png'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ScheduleItem from './ScheduleItem'
import Recent from './Recent'
import NewClass from '../classes/NewClass'

import { faX } from '@fortawesome/free-solid-svg-icons'

export default function LecturerContainer() {
    const [showPopup, setShowPopup] = useState(false)

    const handleOpenPopup = () =>{
        setShowPopup(true);
    }

    const handleClosePopup = () =>{
        setShowPopup(false);
    }

  return (
    <>
        <div className="lecturer-home">
            <div className="flex justify-between items-center">
            <div className="mt-9 ml-5 flex justify-start items-start">
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

            <div className="flex justify-end items-end">
                <div className="flex justify-between items-center mr-8">
                        <div className="border-2 mt-3 mr-8 py-0.5 px-8 rounded-full">
                            <input type="text" placeholder='Search' className='bg-zinc-100 text-xs'/>
                            <FontAwesomeIcon icon={faSearch} className='ml-16 text-xs'/>
                        </div>
                        <div className="mt-3 bg-zinc-200 rounded-full py-1.5 px-3">
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                    </div>
            </div>
            </div>

            
            <div className="flex">
                <div className="mr-3">
                    <div className="flex">
                        <GreenCard />
                        <Cards />
                    </div>

                    {/* <div className="feedback bg-white rounded-lg my-6 ml-4 mr-2.5">
                        <img src={chart} alt="" className='rounded-lg'/>
                    </div> */}
                    {/* <Recent /> */}
                    
                </div>

                

                <div className="bg-white rounded-lg mr-3 p-4 mt-5 border mb-3 pt-4" style={{ width: '330px', fontSize: '0.4rem' ,}}>
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        height={200}
                        // className={'admin-calendar'}
                        // contentHeight={"10px"} // Adjusts height to the number of weeks
                        // aspectRatio={0.7} // Adjust width-to-height ratio
                    />

                    <hr />

                </div>
            </div>

            {/* <div className="bg-white p-6 rounded-lg mr-[13px] ml-[18px] mb-[10px]">
                
                     <p className='text-base text-medium primary-text-blue'>Schedule</p>
                    
                    <div className="mt-4">
                        <ScheduleItem 
                            title='Introduction to HCI' 
                            time='8:00am - 9:00am' 
                            class='Human Computer Interaction' 
                        />
                        <ScheduleItem 
                            title='Formal Methods Quiz' 
                            time='11:00am - 1:00pm' 
                            class='Formal Methods' 
                        />
                        <ScheduleItem 
                            title='Metrics Assignment' 
                            time='3:00pm - 5:00pm' 
                            class='Measurements & Metrics' 
                        />
                    </div>
            </div> */}
            <br />
        </div>
    </>
  )
}
