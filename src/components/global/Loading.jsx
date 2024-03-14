import React from 'react'


export default function Loading(props) {
  return (
    <>
        <div className="w-[100px] h-[100px] flex justify-center items-center">
          <div className="">
            <img src={props.img} alt="" className='w-[100px] h-[100px]'/>
            {/* <p className='text-center'>Loading...</p> */}
          </div>
        </div>
    </>
  )
}
