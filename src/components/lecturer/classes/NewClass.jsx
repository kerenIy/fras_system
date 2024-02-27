import React, {useState, useEffect, useContext, useRef} from 'react'
import GreenBtn from '../global/GreenBtn';

export default function NewClass() {


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

  return (
    <>
        <div className="pl-1.5 text-black">
            <p className='text-2xl font-semibold'>Add a new class</p>
            
            <div className="flex justify-start items-start forms">
                <div className="text-xs text-zinc-600">
                    <div className="flex mt-3">
                    <div className="">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Course Code
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 text-zinc-600 text-xs font-light' placeholder='e.g SENG 412'/>
                    </div>

                    <div className="ml-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Department
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-40 font-light' placeholder='e.g Software Engineering'/>
                    </div>
                    </div>

                    <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Course Title
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%] font-light' placeholder='e.g Software Quality and Testing'/>
                    </div>


                    <div className="flex mt-3">
                        <div className="">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                                Level Taken
                            </p>
                        
                            <input type="text" className='lect-input rounded-sm w-40 font-light'placeholder='e.g. 400L'/>
                        </div>

                        <div className="ml-3">
                            <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                            Start Date
                            </p>
                        
                            <input type="text" className='lect-input rounded-sm w-40 font-light' placeholder='DD/MM/YY'/>
                        </div>
                    </div>
                    
                    
                    <div className="mt-3">
                        <p className="flex justify-start items-start my-1.5 text-zinc-600 text-xs font-medium">
                           Schedule 1
                        </p>
                        
                        <input type="text" className='lect-input rounded-sm w-[100%]' placeholder='Add class schedule'/>
                    </div>

                    {/* {addSchedule} */}

                    <div className="flex justify-end items-end my-5">
                        <p className='text-xxs mr-2'>Add Another Schedule </p>
                        <button className='bg-green-500 text-white rounded-full text-sm px-1.5' onClick={handleAddSchedule}>
                            +
                        </button>
                    </div>

                    

                    <div className="flex">
                        <GreenBtn name='Create Class' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
