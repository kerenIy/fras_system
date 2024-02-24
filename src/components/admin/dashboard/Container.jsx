import React from 'react'
import Cards from './Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import user from '../../../assets/user.jpg'
import chart from '../../../assets/admin_chart.svg'
import growth from '../../../assets/growth.svg'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import { activities } from './activities'


export default function Container() {

    const data = activities;

  return (
    <>
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <p className='text-zinc-600 ml-6 mt-10 font-semibold text-3xl'>Good Morning, Tein</p>

                <div className="flex justify-between items-center mr-8">
                    <div className="border-2 mt-10 mr-8 py-0.5 px-8 rounded-full">
                        <input type="text" placeholder='Search' className='text-xs'/>
                        <FontAwesomeIcon icon={faSearch} className='ml-8 text-xs'/>
                    </div>

                    <div className="mt-10 bg-zinc-200 rounded-full py-1.5 px-3">
                        <FontAwesomeIcon icon={faBell} />
                    </div>

                    {/* <div className="rounded-full mt-10 ml-3">
                        <img src={user} alt="" className='admin-user'/>
                    </div> */}
                </div>
            </div>

            <div className="flex">
                <div className="">
                    <Cards />

                    <p className='ml-6 mt-7 font-normal text-xl text-zinc-600'>Recent Activities</p>
                    <table className='border rounded-lg ml-6 mt-2' >
                        <tr className='header rounded-lg text-sm' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                            <th className='px-6'>No</th>
                            <th className='px-6'>ID</th>
                            <th className='px-6'>Details</th>
                            <th className='px-6'>Date</th>
                            <th className='px-6'>Status</th>
                        </tr>

                        {data.map((item) =>(
                            <>
                                <tr className='text-zinc-600 text-xs py-1.5' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                                    <td className='font-medium text-yellow-400 px-6'>0{item.number}</td>
                                    <td className='font-medium px-4'>{item.id}</td>
                                    <td className=' px-6'>{item.name}</td>
                                    <td className=' px-6'>{item.date}</td>
                                    <td className=' px-6'>
                                        <p className='bg-zinc-100 m-2 p-1 text-green-600 rounded-md'>{item.status}</p>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </table>
                </div>

                <div className="mt-14 pt-1 ml-5" style={{ width: '300px', fontSize: '0.5rem' ,}}>
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        height={200}
                        // className={'admin-calendar'}
                        // contentHeight={"10px"} // Adjusts height to the number of weeks
                        // aspectRatio={0.7} // Adjust width-to-height ratio
                    />

                    <img src={growth} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
