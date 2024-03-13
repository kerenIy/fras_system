import React from 'react'
import SideBar from '../../../components/admin/global/SideBar'
import Container from '../../../components/admin/dashboard/Container'
import Student from '../../../components/admin/dashboard/Student'

export default function Students() {
  return (
    <>
    <div className="flex justify-between items-center main-body">
        <div className="">
            <SideBar />
        </div>

        <div className="section-container order-1">
            <Student />
        </div>
    </div>
</>
  )
}
