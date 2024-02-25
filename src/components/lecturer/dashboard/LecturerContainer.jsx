import React from 'react'
import GreenCard from './GreenCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell} from '@fortawesome/free-solid-svg-icons'
import Cards from './Cards'

import chart from '../../../assets/lect-chart.png'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import ScheduleItem from './ScheduleItem'
import Recent from './Recent'


export default function LecturerContainer() {
  return (
    <>
        <div className="">
            <div className="flex justify-between items-center">
            <div className="mt-9 ml-5 flex justify-start items-start">
                <div className="act-btn text-center py-1.5 px-4 rounded-sm mb-4">
                <p className='text-sm font-normal'>Add New Course +</p>
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
                    <Recent />
                </div>

                

                <div className="bg-white rounded-lg mr-3 p-4 mt-7 mb-3 pt-4" style={{ width: '290px', fontSize: '0.4rem' ,}}>
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        height={200}
                        // className={'admin-calendar'}
                        // contentHeight={"10px"} // Adjusts height to the number of weeks
                        // aspectRatio={0.7} // Adjust width-to-height ratio
                    />

                    <hr />

                    <p className='text-base text-medium mt-6 primary-text-blue'>Schedule</p>
                    
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


                </div>
            </div>
        </div>
    </>
  )
}
