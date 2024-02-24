import React from 'react'
import CardItem from './CardItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

export default function Cards() {
  return (
    <>
        <div className="mt-3">
            <p className='ml-6 mt-5 font-normal text-xl text-zinc-600'>Overview</p>
            <div className="flex card-container">
                <CardItem darker='card-two-darker' lighter='card-one-lighter' title='total students' cardIcon='card-icon rounded-full w-2 h-2' icon={faUser} figures='12,048'/>
                <CardItem darker='card-one-darker' lighter='card-three-lighter' title='total lectures'  cardIcon='card-icon2 rounded-full w-2 h-2' icon={faCoins} figures='3,112'/>
                <CardItem darker='card-one-darker' lighter='card-one-lighter' title='total departments'  cardIcon='card-icon2 rounded-full w-2 h-2' icon={faCalendarCheck} figures='40'/>
            </div>
        </div>
    </>
  )
}
