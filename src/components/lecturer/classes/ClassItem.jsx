import React from 'react'
import image1 from '../../../assets/poppy flower.svg'
import image2 from '../../../assets/rose flower.svg'
import image3 from '../../../assets/brose flower.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom'

export default function ClassItem(props) {

    const navigate = useNavigate();

    const goToClass = () =>{
        navigate('/class1')
    }
  return (
    <>
        <div className="class-item mx-1.5 text-white rounded-lg bg-white">
            <div className="relative rounded-lg">
                <div className={props.colorScheme}>
                    <p className='text-sm font-medium '>{props.courseTitle}</p>
                    <p className='text-xxs '>{props.level}, {props.department}</p>
                    <p className='flex justify-end items-end text-xs font-semibold'>{props.courseCode}</p>
                </div>

                <img src={image1} alt="" className='absolute bottom-1 right-0 w-[50px] h-[50px]'/>
                {/* <img src={image2} alt="" className='absolute top-0 right-0 w-[50px] h-[50px]'/> */}

                <div className="py-10">
                    <p className='cursor-pointer text-zinc-600 text-xxs uppercase absolute bottom-1 left-0 px-3' onClick={goToClass}>
                        view details 
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-1'/>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
