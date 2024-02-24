import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Cards() {
  return (
    <>
        <div className="lect-cards">
            <div className="bg-white p-6 rounded-lg ">
                <FontAwesomeIcon icon={faIdBadge} className='text-center text-white bg-green-600 rounded-full py-2.5 px-3 ml-12' />
                <p className='text-center text-sm text-zinc-400 font-medium my-2'>Most Active Student</p>
                <hr className='text-center w-12 ml-10'/>
                <p className='mt-6 text-black text-center font-semibold text-2xl'>Lolu</p>
                <p className='text-black text-center font-semibold text-2xl'>Okorie</p>
            </div>

            <div className="bg-white">
                
            </div>
        </div>
    </>
  )
}
