import React from 'react'
import GreenCard from './GreenCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell} from '@fortawesome/free-solid-svg-icons'
import Cards from './Cards'

export default function LecturerContainer() {
  return (
    <>
        <div className="">
            <div className="flex justify-end items-end">
                <div className="flex justify-between items-center mr-8">
                        <div className="border-2 mt-10 mr-8 py-0.5 px-8 rounded-full">
                            <input type="text" placeholder='Search' className='bg-zinc-100 text-xs'/>
                            <FontAwesomeIcon icon={faSearch} className='ml-16 text-xs'/>
                        </div>
                        <div className="mt-10 bg-zinc-200 rounded-full py-1.5 px-3">
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                    </div>
            </div>

            
            <div className="flex">
                <GreenCard />

                <Cards />
            </div>
        </div>
    </>
  )
}
