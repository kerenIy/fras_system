import React from 'react'
import Cards from './Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import growth from '../../../assets/growth.svg'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../../@/components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../../../@/components/ui/pagination"
  
  
import { useContext, useEffect, useState } from "react"
import axios from "../../../api/url"
const VIEW_LOGS = `Admin/ViewLogs`

import { SessionContext } from "../../../context/SessionProvider"

export default function Container() {

    const [data, setData] = useState([
        {
            "type": 0,
        "description": "Loading Logs",
        "id": 3,
        "timeCreated": "2024-03-11T13:54:47.44393+00:00",
        "timeUpdated": "2024-03-11T13:54:47.44393+00:00"
        }
    ])
    const {token} = useContext(SessionContext)

    

    useEffect(() => {
      const  formData = {
        sessionKey: token
      }
      const getAllLogs = async () =>{
        try{
            const response = await axios.post(VIEW_LOGS, formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                      },
                      credentials: true,
            })
            const dataArray = response.data.data
            const dataArraySix = dataArray.slice(0, 9)
            setData(dataArraySix)
            
        }
        catch(err){
            console.log(err)
        }
      }

      getAllLogs()

    }, [data])
    
    const formatDate = (dateItem) => {
        const truncateString = dateItem.substring(0, dateItem.length - 13);
        return truncateString;
    };
    


  return (
    <>
        <div className="z-[0px] mt-5">
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

                    <p className='ml-6 mt-4 font-normal text-lg text-zinc-600'>Recent Activities</p>
                    <table className='border rounded-lg ml-6 mt-2' >
                        <tr className='header rounded-lg text-sm' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                            {/* <th className='px-6'>No</th> */}
                            <th className='px-6'>ID</th>
                            <th className='px-6'>Details</th>
                            <th className='px-6'>Time Created</th>
                            <th className='px-6'>Time Updated</th>
                        </tr>

                        {data.map((item) =>(
                            
                                <tr className='text-zinc-600 text-xs ' style={{ borderTop: '1px dotted #000', width: '100%', height: '5px', paddingTop: '10px' }}>
                                    <td className='text-center font-medium px-4'>{item.id}</td>
                                    <td className='capitalize px-6 text-center'>{item.description}</td>
                                    <td className='text-center px-6'>{formatDate(item.timeCreated)}</td>
                                    <td className='text-center px-6'>{formatDate(item.timeUpdated)}</td>
                                
                                </tr>
                            
                        ))}
                    </table>
                    
                    {/* <Table className="z-[0] mt-[2%] mx-[2%]">
                        <TableHeader className="bg-[#525ceb85]">
                            <TableRow>
                            <TableHead className="">ID</TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead>Time Created</TableHead>
                            <TableHead className="">Time Updated</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {data.map((item) =>(
                                <TableRow className="text-xs text-center border">
                                    <TableCell className="">{item.id}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>{formatDate(item.timeCreated)}</TableCell>
                                    <TableCell className="">{formatDate(item.timeUpdated)}</TableCell>
                                </TableRow>
                            ))}
                            
                        </TableBody>
                    </Table> */}

                   <div className="flex justify-end items-end">
                   <Pagination>
                        <PaginationContent className="mt-[16%] text-xs flex justify-end items-end ">
                            {/* <PaginationItem>
                            <PaginationPrevious href="#" className="px-2.5 py-1.5 text-[6px] text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100" />
                            </PaginationItem> */}

                            <PaginationItem>
                            <PaginationLink href="#" className="px-3 py-1.5 text-xs  text-white bg-blue-600 border border-blue-600  rounded-md hover:bg-gray-100">1</PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                            <PaginationLink href="#" className="px-2.5 py-1.5 text-xs   text-gray-700 bg-white border border-gray-300 rounded-md">2</PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                            <PaginationLink href="#" className="px-2.5 py-1.5 text-xs  text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100">3</PaginationLink>
                            </PaginationItem>
                            {/* <PaginationItem>
                            <PaginationNext href="#" className="px-2.5 py-1.5 text-xs  text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100" />
                            </PaginationItem> */}
                        </PaginationContent>
                    </Pagination>
                   </div>



                    
                </div>

                <div className="mt-7 pt-1 ml-5" style={{ width: '300px', fontSize: '0.5rem' ,}}>
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        height={200}
                        className="z-[0]"
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
