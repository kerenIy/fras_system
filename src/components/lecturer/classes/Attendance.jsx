import React from 'react'
import { attendance } from '../dashboard/attendance'
import GreenBtn from '../global/GreenBtn';
import { faArrowLeft, faChevronLeft, faChevronRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ClassToggle from './ClassToggle';
import SideNav from '../global/SideNav';
import { CSVLink } from 'react-csv';

export default function Attendance() {

    const data = attendance;
    const date = `04/03/24`
    const courseCode = `SENG404`

  return (
    <>
        <div className="flex justify-between items-center main-body">
                <div className="">
                <SideNav />
            </div>
        
            <div className="bg-zinc-100 section-container order-1">
                <div className="mx-[5%] mt-[30px] flex justify-between items-center mb-5 ">

                    <div className="bg-[#525cebae] py-1  px-2 rounded-full">
                        <FontAwesomeIcon icon={faArrowLeft} className='text-white'/>
                    </div>

                    <div className=''>
                        <div className="w-[600px] border-2  mr-8 py-1.5 px-8 rounded-md flex justify-between items-center">
                                <input type="text" placeholder='Search' className='bg-transparent text-xs'/>
                                <FontAwesomeIcon icon={faSearch} className='ml-16 text-xs'/>
                        </div>
                    </div>

                    <CSVLink data={data} filename= {`${courseCode}_${date}.csv`}>
                        <div className="flex justify-end items-end">
                            <GreenBtn name='Export Data' icon={faFileArrowDown}/>
                        </div>
                    </CSVLink>
                </div>

                {/* <p className='ml-6 mt-4 font-normal text-xl text-zinc-600'>Recent Activities</p> */}
                <table className='bg-white rounded-lg mt-8 mx-[5%] w-[90%] p-[3%]' >
                <tr className='bg-green-100 rounded-lg text-sm mt-2' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                    <th className='pl-2 pr-3'>ID</th>
                    <th className='px-6'>No</th>
                    <th className='px-6'>Matric</th>
                    <th className='px-6'>Name</th>
                    {/* <th className='px-6'>Course</th> */}
                    <th className='px-6'>Date</th>
                    <th className='px-6'>Status</th>
                </tr>

                {data.map((item) =>(
                    <>
                        <tr className='text-center text-zinc-600 text-xs py-1.5' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                        <td className='pl-2 font-medium text-yellow-400'>0{item.id}</td>
                        <td className='px-5 '>{`SEB${item.id}`}</td>
                        <td className='px-3'>{item.matric}</td>
                        <td className='font-medium px-4'>{item.name}</td>
                        {/* <td className='px-5'>{item.course}</td> */}
                        <td className='text-center'>{item.time_taken}</td>
                        <td className=''>
                                <p className=' m-2 p-1 text-green-600 rounded-md'>{item.status}</p>
                        </td>
                        </tr>
                    </>
                ))}

                {data.map((item) =>(
                    <>
                        <tr className='text-center text-zinc-600 text-xs py-1.5' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                        <td className='pl-2 font-medium text-yellow-400'>0{item.id}</td>
                        <td className='px-5 '>{`SEB${item.id}`}</td>
                        <td className='px-3'>{item.matric}</td>
                        <td className='font-medium px-4'>{item.name}</td>
                        {/* <td className='px-5'>{item.course}</td> */}
                        <td className='text-center'>{item.time_taken}</td>
                        <td className=''>
                                <p className=' m-2 p-1 text-green-600 rounded-md'>{item.status}</p>
                        </td>
                        </tr>
                    </>
                ))}
                </table>

                <div className="mt-4 mr-[5%] flex justify-end items-end">
                    <div className="flex justify-between items-center">
                        <GreenBtn icon={faChevronLeft} />
                    <div className="mx-1"></div>
                        <GreenBtn icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}