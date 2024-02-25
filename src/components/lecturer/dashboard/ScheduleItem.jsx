import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ScheduleItem(props) {
  return (
    <>
        <div className="flex my-3">
            <FontAwesomeIcon icon={faCircleInfo} className='mt-3 border rounded-full text-green-500 p-1.5 text-base'/>

            <div className="ml-3">
                <p className='text-xs font-semibold '>{props.title}</p>
                <p className='text-xxs text-zinc-400'>{props.time}</p>
                <p className='text-xxs primary-text-blue font-medium mt-1'>{props.class}</p>
            </div>
        </div>
    </>
  )
}
