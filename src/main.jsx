import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './global.css'
import './components/admin/admin.css'
import './components/lecturer/lecturer.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root.jsx'
import Roles from './pages/Roles.jsx'
import LoginPage from './pages/admin/Login.jsx'
import SignIn from './pages/lecturer/SignIn.jsx'
import Dashboard from './pages/admin/dashboard/Dashboard.jsx'
import Home from './pages/lecturer/Home.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/roles',
    element: <Roles />
  },
  {
    path: '/admin',
    element: <LoginPage />
  },
  {
    path: '/lecturer',
    element: <SignIn />
  },

  //pages for the main admin dashboard
  {
    path: '/admin/home',
    element: <Dashboard />
  },

  //pages for the lecturer admin dashboard
  {
    path: '/lecturer/home',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
