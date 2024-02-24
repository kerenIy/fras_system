import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CardItem(props) {
  return (
    <>
        <div className='card-item p-3'>
            <div className={props.darker}>
                <div className="flex justify-between items-center">
                    {/* <FontAwesomeIcon icon={props.icon} /> */}
                    <p className='capitalize font-light text-xs'>{props.title}</p>
                    <FontAwesomeIcon icon={props.icon} className={props.cardIcon}/>
                </div>
                <div className='mt-8'>
                <p className='text-xl font-semibold'>{props.figures}</p>
            </div>
            </div>

            
        </div>
    </>
  )
}
