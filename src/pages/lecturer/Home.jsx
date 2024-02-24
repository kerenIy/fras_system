import React from 'react'
import SideNav from '../../components/lecturer/global/SideNav'
import LecturerContainer from '../../components/lecturer/dashboard/LecturerContainer'

export default function Home() {
  return (
    <>
        <div className="flex justify-between items-center main-body">
            <div className="">
                <SideNav />
            </div>

            <div className="bg-zinc-100 section-container order-1">
            <LecturerContainer />
            </div>
        </div>
    </>
  )
}
