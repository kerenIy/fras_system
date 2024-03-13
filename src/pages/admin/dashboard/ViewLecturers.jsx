import React from 'react'
import LecturerId from '../../../components/admin/dashboard/LecturerId'
import SideBar from '../../../components/admin/global/SideBar'

export default function ViewLecturers() {
  return (
    <>
    <div className="flex justify-between items-center main-body">
        <div className="">
            <SideBar />
        </div>

        <div className="section-container order-1">
            <LecturerId />
        </div>
    </div>
    </>

  )
}
