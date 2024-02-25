import React from 'react'
import { attendance } from './attendance'

export default function Recent() {

    const data = attendance;

  return (
    <>
        {/* <p className='ml-6 mt-4 font-normal text-xl text-zinc-600'>Recent Activities</p> */}
        <table className='bg-white rounded-lg ml-6 mt-2' >
            <tr className='bg-green-200 rounded-lg text-sm' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                <th className='pl-1 pr-3'>ID</th>
                <th className='px-3'>Matric</th>
                <th className='px-3'>Name</th>
                <th className='px-3'>Course</th>
                <th className='px-3'>Date</th>
                <th className='px-3'>Status</th>
             </tr>

            {data.map((item) =>(
                <>
                    <tr className='text-zinc-600 text-xs py-1.5' style={{ borderTop: '1px dotted #000', width: '100%', height: '1px' }}>
                    <td className='pl-1 font-medium text-yellow-400'>0{item.id}</td>
                    <td className='px-3'>{item.matric}</td>
                    <td className='font-medium px-4'>{item.name}</td>
                    <td className='px-5'>{item.course}</td>
                     <td className='text-center'>{item.time_taken}</td>
                     <td className=''>
                            <p className=' m-2 p-1 text-green-600 rounded-md'>{item.status}</p>
                     </td>
                    </tr>
                </>
            ))}
        </table>
    </>
  )
}
