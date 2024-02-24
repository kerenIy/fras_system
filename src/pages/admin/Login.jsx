import React from 'react'
import Login from '../../components/global/Login'

export default function LoginPage() {
  return (
    <>
        <Login role='Admin' bar1='Manage Profiles' bar2='Make Changes' bar3='Monitor Activities' link='/admin/home'/>
    </>
  )
}
