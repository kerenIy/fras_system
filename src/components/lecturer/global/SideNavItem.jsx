import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNavItem(props) {
  return (
    <div className="my-3.5">
        <Link to={props.link} className='capitalize font-light text-sm hover:font-normal'>
        <div className="flex ">
                <FontAwesomeIcon icon={props.icon} className='mt-1 text-green-500'/>
                <p className='ml-5'>{props.name}</p>
            </div> 
        </Link>
    </div>
  )
}
