import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";
import "./components/admin/admin.css";
import "./components/lecturer/lecturer.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Roles from "./pages/Roles.jsx";
import LoginPage from "./pages/admin/Login.jsx";
import SignIn from "./pages/lecturer/SignIn.jsx";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import Home from "./pages/lecturer/Home.jsx";
import AllClasses from "./pages/lecturer/classes/AllClasses.jsx";
import ClassView from "./pages/lecturer/classes/ClassView.jsx";
import WebcamCapture from "./components/admin/forms/captureImage.jsx";
import AttendanceList from "./components/lecturer/classes/AttendanceList.jsx";
import Attendance from "./components/lecturer/classes/Attendance.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { SessionProvider } from "./context/SessionProvider.jsx";
import { StudentProvider } from "./context/StudentProvider.jsx";
import Students from "./pages/admin/dashboard/Students.jsx";
import ViewLecturers from "./pages/admin/dashboard/ViewLecturers.jsx";
import { ClassProvider } from "./context/ClassProvider.jsx";
import Loading from "./components/global/Loading.jsx";

import load from "../src/assets/admin-loading.gif";
import DialogBox from "./components/admin/global/Dialog.jsx";
import { DataTableDemo } from "./components/TestShad.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/admin",
    element: <LoginPage />,
  },
  {
    path: "/lecturer",
    element: <SignIn />,
  },

  //pages for the main admin dashboard
  {
    path: "/admin/home",
    element: <Dashboard />,
  },
  {
    path: "/admin/students",
    element: <Students />,
  },
  {
    path: "/admin/lecturers",
    element: <ViewLecturers />,
  },

  //pages for the lecturer admin dashboard
  {
    path: "/lecturer/home",
    element: <Home />,
  },
  {
    path: "/classes",
    element: <AllClasses />,
  },
  {
    path: "/class1",
    element: <ClassView />,
  },
  {
    path: "/attendance1",
    element: <Attendance />,
  },
  {
    path: "/loading",
    element: <Loading img={load} />,
  },
  {
    path: "/dialog",
    element: <DialogBox />,
  },
  // {
  //   path: "/test",
  //   element: <DataTableDemo />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <SessionProvider>
      <AuthProvider>
        <StudentProvider>
          <ClassProvider>
            <RouterProvider router={router} />
          </ClassProvider>
        </StudentProvider>
      </AuthProvider>
    </SessionProvider>
  </React.StrictMode>
);
