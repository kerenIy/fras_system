import React from 'react'
import char from '../../../assets/new_lect_char.svg'

import chart from '../../../assets/lect-chart.png'

export default function GreenCard() {
  return (
    <>
        <div className="flex justify-between items-center rounded-xl bg-green-500 green-card text-white">
            <div className="">
                    <div className="">   
                        <p className='ml-1.5'>Good morning, </p>
                        <p className='ml-1.5 font-semibold text-4xl my-2'>Iyalla Ibitein</p>
                        <button className='mt-4 text-green-500 text-sm bg-white rounded-3xl py-1.5 px-3'>
                            View your schedule
                        </button>
                    </div>
            </div>
            <div>
                <div className="">
                <img src={char} alt="" className='w-44 h-44'/>
            </div>
            </div>
           
        </div>

    </>
  )
}

  