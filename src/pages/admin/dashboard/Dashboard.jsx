import React from 'react'
import SideBar from '../../../components/admin/global/SideBar'
import Container from '../../../components/admin/dashboard/Container'

export default function Dashboard() {
  return (
    <>
        <div className="flex justify-between items-center main-body">
            <div className="">
                <SideBar />
            </div>

            <div className="section-container order-1">
                <Container />
            </div>
        </div>
    </>
  )
}
