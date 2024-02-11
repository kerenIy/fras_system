import React from 'react'
import CardItem from './CardItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export default function Cards() {
  return (
    <>
        <div className="mt-3">
            <p className='ml-6 mt-5 font-normal text-xl'>Overview</p>
            <div className="flex card-container">
                <CardItem darker='card-one-darker' lighter='card-one-lighter' title='total students' icon={faUser} figures='123,000'/>
                <CardItem darker='card-one-darker' lighter='card-two-lighter' title='total faculties' icon={faUser} figures='87'/>
                <CardItem darker='card-one-darker' lighter='card-three-lighter' title='total lectures' icon={faUser} figures='3,000'/>
                <CardItem darker='card-one-darker' lighter='card-one-lighter' title='total departments' icon={faUser} figures='500'/>
            </div>
        </div>
    </>
  )
}
