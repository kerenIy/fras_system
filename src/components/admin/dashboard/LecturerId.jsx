import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../../../context/SessionProvider'
import axios from '../.././../api/url'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBell } from '@fortawesome/free-solid-svg-icons'

const GET_LECTURERS = `Admin/ViewAllLecturers`

export default function LecturerId() {
    const {token} = useContext(SessionContext)

    const formData ={
      sessionKey: token,
    }
  
    const [lecturers, setLecturers] = useState([
        {
            "name": "Loading Lecturers",
            "departmentId": 0,
            "courses": null,
            "userId": 0,
            "id": 1,
            "timeCreated": "2024-03-06T00:10:51.946037+00:00",
            "timeUpdated": "0001-01-01T00:00:00+00:00",
        }
    ])
  
    useEffect(() =>{

        const getAllLecturers = async () =>{
          try{
            const response = await axios.post(GET_LECTURERS, formData, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
                withCredentials: true,
            })
    
            const lecturerArray = response.data.data
            setLecturers(lecturerArray)
          }
          catch(err){
            console.log(err)
          }
        }
    
        getAllLecturers()
      }, [lecturers])

    
    const formatDate = (dateItem) => {
        const truncateString = dateItem.substring(0, dateItem.length - 22);
        return truncateString;
    };
  return (
    <div className="mt-5">
            <div className="flex justify-between items-center">
                    <p className='text-zinc-600 ml-6 mt-10 font-semibold text-3xl'>All Lecturers</p>

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
            
            <table className='border rounded-lg ml-6 mt-8' >
                        <tr className='header rounded-lg text-sm' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                            {/* <th className='px-6'>No</th> */}
                            <th className='px-6'>ID</th>
                            <th className='px-6'>Name</th>
                            <th className='px-6'>Department ID</th>
                            <th className='px-6'>Courses</th>
                            <th className='px-6'>Time Created</th>
                            <th className='px-6'>Time Updated</th>
                        </tr>

                        {lecturers.map((item) =>(
                            <>
                                <tr className='text-zinc-600 text-xs py-3.5' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px', padding: '12px',}}>
                                    <td className='text-center font-medium px-4'>{item.id}</td>
                                    <td className='capitalize px-6 text-center'>{item.name}</td>
                                    <td className='capitalize px-6 text-center'>{item.departmentId}</td>
                                    <td className='flex justify-center items-center capitalize px-6 text-center'>
                                        {item.courses}
                                    </td>
                                    <td className='text-center px-6'>{formatDate(item.timeCreated)}</td>
                                    <td className='text-center px-6'>{formatDate(item.timeUpdated)}</td>
                                </tr>
                                <hr className='font-bold tet-black h-[10px]'/>
                            </>
                        ))}
                    </table>


        </div>
  )
}
