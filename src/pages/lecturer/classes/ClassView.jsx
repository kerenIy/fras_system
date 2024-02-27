import React from 'react'
import SideNav from '../../../components/lecturer/global/SideNav'
import ClassContainer from '../../../components/lecturer/classes/ClassContainer'
import ClassViewItem from '../../../components/lecturer/classes/ClassViewItem'

export default function ClassView() {
  return (
    <>
        <div className="flex justify-between items-center main-body">
            <div className="">
                <SideNav />
            </div>

            <div className="bg-zinc-100 section-container order-1">
                <ClassViewItem />
            </div>
        </div>
    </>
  )
}