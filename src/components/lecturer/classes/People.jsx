import React from 'react'
import user from "../../../assets/user.jpg"

export default function People() {

  const people =[
    {
        name: 'Iyalla Ibitein Keren',
        matric_no: '20/0302',
    },
    {
        name: 'Okorie Vania',
        matric_no: '20/0302',
    },
    {
        name: 'Euba, Akinlolu',
        matric_no: '20/0302',
    },
    {
        name: 'Iyalla Ibitein Keren',
        matric_no: '20/0302',
    },
    {
        name: 'Okorie Vania',
        matric_no: '20/0302',
    },
    {
        name: 'Euba, Akinlolu',
        matric_no: '20/0302',
    },
  ]

  return (
    <>
        <div className="">
            <div className="flex justify-end items-end">
                <p className='text-[16px] gren-color font-medium'>216 Students</p>
            </div>
            {people.map((person) =>(
                <div className="my-[2%]">
                    <div className="flex justify-between items-center w-[400px]">
                    <img src={user} alt="" className='w-[20px] h-[20px] rounded-full mr-[2%]'/>
                    <p className=''>{person.name}</p>
                    <p className='ml-[2%]'>{person.matric_no}</p>
                </div>
                <hr className='mt-[1%]'/>
                </div>
            ))}
        </div>
    </>
  )
}
