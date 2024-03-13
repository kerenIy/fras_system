import React, {useState, useEffect, useContext, useRef} from 'react'
import ActionBtn from '../global/ActionBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import axios from '../../../api/url'
import { SessionContext } from '../../../context/SessionProvider';
import { failure, success } from '../../../classes/Notifications';

const REGISTER_LECTURER_URL = `/Admin/RegisterLecturer`


export default function RegisterLecturer() {
    let message = ""
    const { token } = useContext(SessionContext)


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")

    const firstRef = useRef()
    const lastRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const userRef = useRef()



    const handleRegister = async (e) =>{
        e.preventDefault();

        // const sessionToken = JSON.stringify(token)
        // console.log(sessionToken)

        const formData = {
            sessionKey: token,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
        }

        console.log(formData)

        try{
            const response = await axios.post(
                REGISTER_LECTURER_URL,
                formData,
               // JSON.stringify({
                //     formData
                
                {
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    credentials: true,
                }
            )

            console.log(`this is the response: ${response}`)
            message = "Account Created Successfully"
            success(message)
        }
        catch(err){
            console.log()
            message = "Password must contain 1 digit , 1 uppercase and 1 Ascii character"
            failure(message)
        }
    }

    const [addSchedule, setAddSchedule] = useState(1);
    const [scheduleNo, setScheduleNo] = useState();

    const handleAddSchedule = () =>{
        let number = scheduleNo + 1;
        setScheduleNo(number);

        setAddSchedule(
            [
                ...addSchedule,
                <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                           Schedule {scheduleNo}
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%]' placeholder='Add class schedule'/>
                </div>,
            ]
        )
    }

    const [base64Image, setBase64Image] = useState('');

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setBase64Image(base64String);
        };
        reader.readAsDataURL(file);
      }
    };




  return (
    <>
        <div className="pl-1.5 text-black">
            <p className='text-2xl font-semibold mb-4'>Register Lecturer</p>
            
            <div className="ml-4 flex justify-start items-start forms">
                <div className="text-xs text-zinc-600">
                {/* <div>
                    <label htmlFor="file-upload" className='flex justify-center items-center custom-file-upload'>
                        <div className="">
                            <div className="image-placeholder">
                                {base64Image ? (
                                    <img src={base64Image} alt="Profile" className='selected-profile'/>
                                ) : (
                                    <>
                                        <div className="flex justify-center rounded-lg items-center text-white bg-gray-200 p-3 w-[100px] h-[100px] ml-4">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className='capitalize text-center  text-sm py-4'>Add student image</div>
                        </div>
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/*"
                        className=''
                     />
                </div> */}
                    <div className="flex ">
                    <div className="">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Lecturer First Name
                        </p>
                        
                        <input 
                            type="text" 
                            className='lect-input rounded-sm w-40 text-zinc-600 text-xs font-light' 
                            placeholder='e.g John'
                            ref={firstRef}
                            onChange={((e) => setFirstName(e.target.value))}
                        />
                    </div>

                    <div className="ml-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Lecturer Last Name
                        </p>
                        
                        <input 
                            type="text" 
                            className='lect-input rounded-sm w-40 font-light' 
                            placeholder='e.g Doe'
                            ref={lastRef}
                            onChange={((e) => setLastName(e.target.value))}
                        />
                    </div>
                    </div>

                    <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Email
                        </p>
                        
                        <input 
                            type="text" 
                            className='lect-input rounded-sm w-[100%] font-light' 
                            placeholder='e.g. johndoe@gmail.com'
                            ref={emailRef}
                            onChange={((e) => setEmail(e.target.value))}
                        />
                    </div>


                    <div className="flex mt-3">
                        <div className="">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                UserName 
                            </p>
                        
                            <input 
                                type="text" 
                                className='lect-input rounded-sm w-40 font-light'
                                placeholder='e.g. johnDoe24'
                                ref={userRef}
                                onChange={((e) => setUserName(e.target.value))}
                            />
                        </div>

                        <div className="ml-3">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Password
                            </p>
                        
                            <input 
                                type="text" 
                                className='lect-input rounded-sm w-40 font-light' 
                                placeholder='********'
                                ref={passwordRef}
                                onChange={((e) => setPassword(e.target.value))}
                            />
                                
                        </div>
                    </div>
                    
                    
                    {/* <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                           Schedule 1
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%]' placeholder='Add class schedule'/>
                    </div> */}

                    {/* {addSchedule} */}
{/* 
                    <div className="flex justify-end items-end my-5">
                        <p className='text-xxs mr-2'>Add Another Schedule </p>
                        <button className='bg-green-500 text-white rounded-full text-sm px-1.5' onClick={handleAddSchedule}>
                            +
                        </button>
                    </div> */}

                    

                    <div className="flex justify-center items-center" onClick={handleRegister}>
                        <ActionBtn name='Register Lecturer' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}