import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function GreenBtn(props) {
  return (
    <button className='bg-green-500 text-white text-xs px-5 py-2 rounded-sm'>
        {props.name}
        <FontAwesomeIcon icon={props.icon} className='ml-2'/>
    </button>
  )
}
