import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'


import logo from '../../assets/facier.png'
import Buttons from './Buttons'

export default function NavBar() {
  return (
    <>
        
        <div className="flex nav-bar justify-between items-center">
            <div className="logo flex ">
                <img src={logo} alt="" className='bg-white rounded-full w-10 h-10'/>
                <p className='font-medium ml-3 mt-2'>fa<span className='primary-text-blue'>cier</span></p>
            </div>

            <div className="flex links text-sm ">
              <NavLink to='/products' className='mx-5'>
                <span className='mr-1.5'>Products</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </NavLink>
              <NavLink to='/products' className='mx-5'>
                <span className='mr-1.5'>Enterprise</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </NavLink>
              <NavLink to='/products' className='mx-5'>
                <span className='mr-1.5'>Resources</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </NavLink>
              <NavLink to='/products' className='mx-5'>
                <span className='mr-1.5'>Pricing</span>
              </NavLink>
            </div>

            <Buttons name='Try It Now' link='/roles'/>
        </div>
    
    </>
  )
}
