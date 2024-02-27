import React from 'react'
import SideNav from '../../../components/lecturer/global/SideNav'
import ClassContainer from '../../../components/lecturer/classes/ClassContainer'

export default function AllClasses() {
  return (
    <>
        <div className="flex justify-between items-center main-body">
            <div className="">
                <SideNav />
            </div>

            <div className="bg-zinc-100 section-container order-1">
                <ClassContainer />
            </div>
        </div>
    </>
  )
}
