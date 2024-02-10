import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
        <div className="">
            <div className="logo">
                <p><span className='primary-text-blue font-black mr-2'>|</span>FRAS</p>
            </div>

            <div className="redirect-links">
                <Link to='/admin'>admin</Link>
                <Link to='/lecturer'>lecturer</Link>
            </div>
        </div>
    </>
  )
}
