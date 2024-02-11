import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <>
        <button className="button py-3 px-16 font-medium rounded-sm text-sm capitalize mt-4">
            <Link to={props.link}>{props.name} <span>&rarr;</span></Link>
        </button>
    </>
  )
}
