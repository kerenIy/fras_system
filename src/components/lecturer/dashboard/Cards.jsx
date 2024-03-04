import { faGoogleScholar, faPadlet } from '@fortawesome/free-brands-svg-icons'
import { faChalkboard, faIdBadge, faSpellCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Cards() {
  return (
    <>
        <div className="lect-cards">
            <div className="bg-white border flex w-44 px-4 py-9 rounded-lg mb-6">
                <FontAwesomeIcon icon={faGoogleScholar} className='mt-2 border rounded-full primary-text-blue p-1.5'/>
                <div className="ml-4">
                  <p className='text-base font-medium '>231</p>
                  <p className='text-zinc-600 capitalize font-light text-xs'>total students</p>
                </div>
            </div>

            <div className="bg-white border flex px-4 py-9 rounded-lg mb-4">
                <FontAwesomeIcon icon={faChalkboard} className='mt-2 border rounded-full primary-text-blue p-1.5'/>
                <div className="ml-4">
                  <p className='text-base font-medium '>12</p>
                  <p className='text-zinc-600 capitalize font-light text-xs'>total classes</p>
                </div>
            </div>

            {/* <div className="act-btn text-center p-1.5 rounded-lg mb-4">
              <p className='text-2xl'>+</p>
              <p className='text-sm font-normal'>Add Course</p>
            </div> */}

            {/* <div className="bg-green-500 text-white  text-center p-4 rounded-lg">
              <p className='text-2xl'>+</p>
              <p className='text-sm font-normal'>Add Class</p>
            </div> */}

            {/* <div className="bg-white p-6 rounded-lg mb-4">
                <FontAwesomeIcon icon={faIdBadge} className='text-center text-white bg-green-500 rounded-full py-2.5 px-3 ml-11' />
                <p className='text-center text-sm text-zinc-400 font-medium my-2'>Most Active Student</p>
                <hr className='text-center w-12 ml-10'/>
                <p className='mt-6 text-black text-center font-semibold text-2xl'>Lolu</p>
                <p className='text-black text-center font-semibold text-2xl'>Okorie</p>
            </div> */}
        </div>
    </>
  )
}
