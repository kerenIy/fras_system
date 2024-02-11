import React from 'react'
import Cards from './Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import user from '../../../assets/user.jpg'
import chart from '../../../assets/admin_chart.svg'
import growth from '../../../assets/growth.svg'

export default function Container() {
  return (
    <>
        <div className="mt-5">
            <div className="flex justify-between items-center">
                <p className='ml-6 mt-10 font-semibold text-3xl'>Good Morning, Tein</p>

                <div className="flex justify-between items-center mr-8">
                    <div className="border-2 mt-10 mr-8 py-0.5 px-8 rounded-full">
                        <input type="text" placeholder='Search' className='text-xs'/>
                        <FontAwesomeIcon icon={faSearch} className='text-xs'/>
                    </div>

                    <div className="mt-10 bg-zinc-200 rounded-full py-1.5 px-3">
                        <FontAwesomeIcon icon={faBell} />
                    </div>

                    <div className="rounded-full mt-10 ml-3">
                        <img src={user} alt="" className='admin-user'/>
                    </div>
                </div>
            </div>

            <div className="">
                <Cards />

                <div className="mx-6 flex justify- items-center">
                    <div className="">
                        <img src={growth} alt="" className='growth'/>
                    </div>


                    <div className="mb-28">
                    <div className="mb-6 performance mr-6">
                        {/* <div className="">
                            <p className='ml-6 mt-5 font-normal text-xl'>Performance</p>
                            <img src={chart} alt="" className='admin-chart'/>
                        </div> */}
                    
                    {/* <div className="">
                        <p className='text-2xl font-medium my-3'>Quick Actions</p>

                        <div className="my-1 flex justify-between items-center text-sm font-normal">
                            <p>Register New Student</p>
                            <FontAwesomeIcon icon={faChevronRight} className='primary-text-blue'/>
                        </div>

                        <div className="my-1 flex justify-between items-center text-sm font-normal">
                            <p>View Students</p>
                            <FontAwesomeIcon icon={faChevronRight} className='primary-text-blue'/>
                        </div>

                        <div className="my-1 flex justify-between items-center text-sm font-normal">
                            <p>Profile Settings</p>
                            <FontAwesomeIcon icon={faChevronRight} className='primary-text-blue'/>
                        </div>

                        <div className="my-1 flex justify-between items-center text-sm font-normal">
                            <p>View Analytics</p>
                            <FontAwesomeIcon icon={faChevronRight} className='primary-text-blue'/>
                        </div>
                    </div> */}

                    </div>

                    <div className="performance mr-">
                        {/* <div className="">
                            <p className='ml-6 mt-5 font-normal text-xl'>Performance</p>
                            <img src={chart} alt="" className='admin-chart'/>
                        </div> */}
                    
                    <div className="">
                        <p className='text-2xl font-medium my-3'>Upcoming Events</p>

                        <div className="upcoming py-0.5 px-1.5 rounded-md">
                            <div className=" bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p className='mr-9'>Events for Graphic Design</p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>

                            <div className="bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p>Schedule Weekly Maintenance</p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>

                            <div className="bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p className='mr-16'>Clear Old Students from Database </p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>

                            <div className="bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p>View & Store Analytics</p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>
                            <div className=" bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p className='mr-9'>Events for Graphic Design</p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>

                            <div className="bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p>Schedule Weekly Maintenance</p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>

                            <div className="bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p className='mr-16'>Clear Old Students from Database </p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>

                            <div className="bg-white p-1.5 rounded-sm my-1 flex justify-between items-center text-xs font-normal">
                                <p>View & Store Analytics</p>
                                <FontAwesomeIcon icon={faChevronRight} className='text-black bg-zinc-200 rounded-full py-1.5 px-2 text-xs'/>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
