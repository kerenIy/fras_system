import React from 'react'

export default function AttendanceItem(props) {
  return (
    <div className='flex justify-between items-center border-[#BA68C8] text-white w-[70%] rounded-lg mx-[3%] my-[1%] p-[1%] bg-[#ba68c8bd] '>
        <div className="">
            <p className='text-sm font-medium'>Attendance Date</p>
            <p className='text-xs '>Time</p>
        </div>
        
        <div className="">
            <p className='font-bold text-base'>{props.date}</p>
            <p className='text-xs ml-5 '>{props.time}</p>
        </div>
       
        
    </div>
  )
}
