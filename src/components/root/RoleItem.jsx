import React, { useState } from 'react'

export default function RoleItem(props) {

    const [toggle, setToggle] = useState('')

    const handleBorderChange = () =>{
        // if(toggle == 'role-box'){
        //     setToggle('selected-role-box')
        // }
        // else if(toggle == 'selected-role-box'){
        //     setToggle('role-box')
        // }
    }

  return (
    <>
        <div className={toggle} onClick={handleBorderChange}>
            <div className='text-md font-light flex rounded-md' >
                {/* <input type="radio" name="" id="" /> */}
                <p className='ml-3'>{props.role}</p>
            </div>
        </div>
    </>
  )
}
