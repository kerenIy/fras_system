import React from 'react'


export default function Loading(props) {
  return (
    <>
        <div className="w-[100px] h-[100px]">
        <img src={props.img} alt="" className='w-[50px] h-[50px]'/>

        </div>
    </>
  )
}
