import React from 'react'
import { Link } from 'react-router-dom'

export default function ActionBtn(props) {
  return (
    <>
        <button className="admin-btn py-1.5 px-7 font-light rounded-sm text-sm capitalize mt-4">
            <Link to={props.link}>{props.name}</Link>
        </button>
    </>
  )
}
