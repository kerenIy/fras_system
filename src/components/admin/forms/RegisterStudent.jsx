import React, {useState, useEffect, useContext, useCallback, useRef} from 'react'
import ActionBtn from '../global/ActionBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from './captureImage';

import { StudentContext } from '../../../context/StudentProvider';

export default function RegisterStudent() {

    const navigate = useNavigate();
    const {setFormData} = useContext(StudentContext)
    

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

    const [firstStage, setFirstStage] = useState('')
    const [secondStage, setSecondStage] = useState('hidden')

    const [name, setName] = useState("")
    const [matric, setMatric] = useState("")
    const [classID, setClassID] = useState("")

    const nameRef = useRef()
    const matricRef = useRef()
    const ClassRef = useRef()

    let formData = {}

    const handleNext = async (e) =>{
        e.preventDefault();

        formData = {
            Name: name,
            MatricNumber: matric,
            ClassId: classID,
        }

        setFormData(formData)

        console.log(formData)

        setFirstStage('hidden')
        setSecondStage('show')
    }




  return (
    <>
        <div className={firstStage}>
            <div className="pl-1.5 text-black">
                <p className='ml-4 text-2xl font-semibold '>Register Student</p>
                <p className='ml-4 text-sm text-zinc-400 mb-4'>Fill in Student details</p>
                
                <div className="ml-4 flex justify-start items-start forms">
                    <div className="text-xs text-zinc-600">
                    <div>
                        <label htmlFor="file-upload" className='flex justify-center items-center custom-file-upload'>
                            <div className="">
                             
                            </div>
                        </label>
                        {/* <input
                            id="file-upload"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                            accept="image/*"
                            className=''
                        /> */}
                    </div>
                        <div className="flex mt-3">
                        <div className="">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Student Name
                            </p>
                            
                            <input 
                                type="text" 
                                className='lect-input rounded-sm w-40 text-zinc-600 text-xs font-light' 
                                placeholder='e.g John Doe'
                                ref={nameRef}
                                onChange={((e) => setName(e.target.value))}
                            />
                        </div>

                        <div className="ml-3">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Matric No.
                            </p>
                            
                            <input 
                                type="text" 
                                className='lect-input rounded-sm w-40 font-light' 
                                placeholder='e.g 20/0302'
                                ref={matricRef}
                                onChange={((e) => setMatric(e.target.value))}
                            />
                        </div>
                        </div>

                        {/* <div className="mt-3">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Faculty
                            </p>
                            
                            <input type="text" className='lect-input rounded-sm w-[100%] font-light' placeholder='e.g Computing and Engineering Sciences'/>
                        </div> */}


                        <div className="flex mt-3">
                            <div className="">
                                <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                    Level 
                                </p>
                            
                                <input 
                                    type="text" 
                                    className='lect-input rounded-sm w-40 font-light'
                                    placeholder='e.g. 400L'
                                />
                            </div>

                            <div className="ml-3">
                                <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                    Class ID
                                </p>
                            
                                {/* <input 
                                    type="text" 
                                    className='lect-input rounded-sm w-40 font-light' 
                                    placeholder='e.g. SEB'
                                    ref={ClassRef}
                                    onChange={((e) => setClassID(e.target.value))}
                                /> */}
                                <select name="Class ID" className='lect-input rounded-sm w-40 font-light p-[2%]' id="" ref={ClassRef} onChange={((e) => setClassID(e.target.value))}>
                                    <option value="">Select Class</option>
                                    <option value="1">Software Eng, Group A</option>
                                    <option value="2">Software Eng, Group B</option>
                                    <option value="3">Software Eng, Group C</option>
                                    <option value="4">Software Eng, Group D</option>
                                    <option value="1">Computer Sci, Group A</option>
                                    <option value="2">Computer Sci, Group B</option>
                                    <option value="3">Computer Sci, Group C</option>
                                    <option value="4">Computer Sci, Group D</option>
                                </select>
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

                        

                        <div className="" onClick={handleNext}>
                            <ActionBtn name='Next' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={secondStage}>
            <WebcamCapture student={formData}/>
        </div>
    </>
  )
}