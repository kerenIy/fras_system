import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CardItem(props) {
  return (
    <>
        <div className='card-item p-3'>
            <div className={props.darker}>
                <div className="flex">
                    <FontAwesomeIcon icon={props.icon} />
                    <p className='ml-3 capitalize font-light text-sm'>{props.title}</p>
                </div>
            </div>

            <div className={props.lighter}>
                <p className='text-2xl font-medium'>{props.figures}</p>
            </div>
        </div>
    </>
  )
}
