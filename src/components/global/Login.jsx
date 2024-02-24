import admin from '../../assets/admin.svg'
import Button from './Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faAreaChart } from '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

export default function Login(props) {
  return (
    <>
        <div className="login flex justify-center items-center">
            <div className="hero-text">
                <p className='form-header text-5xl primary text-center mb-4'>{props.role}</p>
                
                <div className="admin-bar text-sm font-normal flex justify-evenly items-center text-zinc-600">
                    <div className="my-4">
                        <div className="admin-circle">
                            <p className='text-center'>
                                <FontAwesomeIcon icon={faUser} />
                            </p>
                        </div>                        
                        <p className='text-center'>{props.bar1}</p>
                    </div>

                    <hr className='primary-text-blue w-44 font-black text-4xl'/>
                    <div className="">
                        <div className="admin-circle">
                            <p className='text-center'>
                                <FontAwesomeIcon icon={faAreaChart} />
                            </p>
                        </div> 
                        <p>{props.bar2}</p>
                    </div>
                    <hr className='primary-text-blue w-44 font-black '/>


                    <div className="">
                    <div className="admin-circle">
                            <p className='text-center'>
                                <FontAwesomeIcon icon={faReceipt} />
                            </p>
                        </div> 
                        <p>{props.bar3}</p>
                    </div>
                </div>

                <form action="" className='my-4 login-form'>
                    <div className="flex justify-between items-center">
                        <label htmlFor="" className='text-base font-normal'>Username:</label>
                        <input type="text" placeholder='Enter username' className='ml-2 text-sm font-light'/>
                    </div>
                    <br />

                    <div className="flex justify-between items-center">
                        <label htmlFor="" className='text-base  font-normal'>Password:</label>
                        <input type="text" placeholder='Enter password' className='ml-2 text-sm font-light'/>
                    </div>
                </form>

                <button className="form-btn py-2 font-medium rounded-sm text-base capitalize mt-4">
                    <Link to={props.link}>Log In<span className='ml-3'>&rarr;</span></Link>
                </button> 

                <div className="mt-7 flex justify-end items-end">
                    <button className="py-3 pl-3 font-light rounded-lg text-base capitalize mt-4">
                       <span className='mr-3'>&larr;</span> <Link to='/roles'>Back</Link> 
                    </button>
                </div>          
            </div>

            <div className="hero-img">
                <img src={admin} alt="" />
            </div>
        </div>

    </>
  )
}
