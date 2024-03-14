import React, {useState, useEffect, useContext, useRef} from 'react'
import GreenBtn from '../global/GreenBtn';

import axios from "../../../api/url"
const CREATE_CLASS = `Lecturer/CreateCourse`

import { SessionContext } from '../../../context/SessionProvider';
import { failure, success } from '../../../classes/Notifications';
import userEvent from '@testing-library/user-event';

export default function NewClass() {

    const {token} = useContext(SessionContext)


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

    const [name, setName] = useState("")
    const [classID, setClassID] = useState(0)
    const [courseCode, setCourseCode] = useState("")
    const [level, setLevel] = useState("")
    
    const nameRef = useRef()
    const levelRef = useRef()
    const codeRef = useRef()
    const classRef = useRef()

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const formData = {
            sessionKey: token,
            title: name,
            classID: classID,
            courseCode: courseCode,
            departmentID: 1,
            lecturerID: 2,
            level: level,

        }

        let message = ``

        try{
            const response = await axios.post(CREATE_CLASS, formData,{
                
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    credentials: true,
                
            })
            message = "Class Created"
            console.log(response)
            success(message)
        }
        catch(err){
            console.log(err)
            message = "Failed to Create Class"
            failure(message)
        }

    }

  return (
    <>
        <div className="pl-1.5 text-black">
            <p className='text-2xl font-semibold'>Add a new class</p>
            
            <div className="ml-5 flex justify-start items-start forms">
                <div className="text-xs text-zinc-600">
                    <div className="flex mt-3">
                    <div className="">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Course Code
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 text-zinc-600 text-xs font-light' placeholder='e.g SENG 412'
                        ref={codeRef} onChange={((e) => setCourseCode(e.target.value))}/>
                    </div>

                    <div className="ml-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Department
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 font-light' placeholder='e.g Software Engineering'  />
                    </div>
                    </div>

                    <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Course Title
                        </p>
                        
                        <input 
                            type="text" 
                            className='lect-input rounded-sm w-[100%] font-light' 
                            placeholder='e.g Software Quality and Testing'
                            ref={nameRef}
                            onChange={((e) => setName(e.target.value))}
                        />
                    </div>


                    <div className="flex mt-3">
                        <div className="">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Level Taken
                            </p>
                        
                            <input type="text" className='lect-input rounded-sm w-40 font-light'placeholder='e.g. 400L' ref={levelRef} onChange={((e) =>setLevel(e.target.value))}/>
                        </div>

                        <div className="ml-3">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Class ID
                            </p>
                        
                            <input type="text" className='lect-input rounded-sm w-40 font-light' placeholder='DD/MM/YY' ref={classRef} onChange={((e) => setClassID(e.target.value))}/>
                        </div>
                    </div>
                    
{/*                     
                    <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                           Schedule 1
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%]' placeholder='Add class schedule'/>
                    </div> */}

                    {/* {addSchedule} */}

                    {/* <div className="flex justify-end items-end my-5">
                        <p className='text-xxs mr-2'>Add Another Schedule </p>
                        <button className='bg-green-500 text-white rounded-full text-sm px-1.5' onClick={handleAddSchedule}>
                            +
                        </button>
                    </div> */}

                    

                    <div className="flex mt-[5%]" onClick={handleSubmit}>
                        <GreenBtn name='Create Class' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
