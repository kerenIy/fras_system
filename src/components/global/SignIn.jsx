import admin from '../../assets/admin.svg'
import Button from './Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faAreaChart, faX } from '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'

import { Link, useNavigate } from 'react-router-dom'

import { useRef, useEffect, useState, useContext } from 'react'
import axios from "../../api/url"
import { AuthContext } from '../../context/AuthProvider'
import { SessionContext } from '../../context/SessionProvider'

import { success, failure } from '../../classes/Notifications'
import Loading from './Loading'

import load from "../../assets/admin-loading.gif"

const LOGIN_URL =`/Lecturer/Login`

export default function Login(props) {

  let message = ""
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { setAuth } = useContext(AuthContext)
  const { setToken } = useContext(SessionContext)

  const [loading, setLoading] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  useEffect(() =>{
    // emailRef.current.focus();
    // passwordRef.current.focus();
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    console.log(email)
    console.log(password)

    try{
        const response = await axios.post(
            LOGIN_URL,
            JSON.stringify({
                userName: email,
                password: password,
            }),
            {
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
                withCredentials: true,
            }
        );

        const sessionKey = response.data.data.session.sessionKey;
        
        console.log(response.data)
        setAuth({email, password});
        setToken(sessionKey)
        console.log(sessionKey)
        setLoading(false)
        message = "Login Successful"
        success(message)
        navigate('/lecturer/home')
    }
    catch(err){
        if(err.message == "Request failed with status code 400"){
            message ='Invalid Username or Password'
            failure(message)

        }
        else{
            console.log(err)
            message = err.message
            failure(message)

        }
    }
  }

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
                        <input 
                            type="text" 
                            placeholder='Enter username' 
                            className='ml-2 text-sm font-light' 
                            ref={emailRef}
                            onChange={((e) => setEmail(e.target.value))}
                            
                        />
                    </div>
                    <br />

                    <div className="flex justify-between items-center">
                        <label htmlFor="" className='text-base  font-normal'>Password:</label>
                        <input 
                            type="text" 
                            placeholder='Enter password' 
                            className='ml-2 text-sm font-light' 
                            ref={passwordRef}
                            onChange={((e) => setPassword(e.target.value))}
                            
                        />
                    </div>
                </form>

                <button className="form-btn py-2 font-medium rounded-sm text-base capitalize mt-4" onClick={handleSubmit}>
                    <Link >Log In<span className='ml-3'>&rarr;</span></Link>
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

            {loading && (
                 <div className="custom-popup">
                 <div className="popup-content">
                 <div className="flex justify-end items-end">
                     {/* <FontAwesomeIcon icon={faX} className='text-black w-3 h-3' onClick={handleClosePopup}/> */}
                 </div>
     
                 <div className="flex justify-center items-center">
                     <Loading img={load}/>
                 </div>
                 </div>
             </div>
            )}
        </div>

    </>
  )
}
