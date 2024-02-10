import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <>
        <button className="button py-3 px-10 font-medium rounded-lg text-sm capitalize mt-4">
            <Link to={props.link}>{props.name} <span className='hover:ml-3'>&rarr;</span></Link>
        </button>
    </>
  )
}
