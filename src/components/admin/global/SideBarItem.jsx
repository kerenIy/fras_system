import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBarItem(props) {
  return (
    <>
        <div className="my-5">
            <Link to={props.link} className='capitalize font-light text-sm hover:font-normal'>
               <div className="flex">
                    <FontAwesomeIcon icon={props.icon} className='mt-1 primary-text-blue'/>
                    <p className='ml-3'>{props.name}</p>
                </div> 
            </Link>
        </div>
    </>
  )
}
