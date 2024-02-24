import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons(props) {
  return (
    <>
        <button className='text-sm bg-dark-white px-6 py-2 rounded-sm'>
            <Link to={props.link}>
                {props.name} &rarr;
            </Link>
        </button>
    </>
  )
}
