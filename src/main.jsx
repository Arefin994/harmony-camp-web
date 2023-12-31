import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import StudentLogin from './components/StudentLogin/StudentLogin';
import InstructorLogin from './components/InstructorLogin/InstructorLogin'
import AdminLogin from './components/AdminLogin/AdminLogin';
import NavSeeAllStu from './components/NavSeeAllStu/NavSeeAllStu';
import NavSeeAllInsctruc from './components/NavSeeAllInstruc/NavSeeAllInsctruc';
import NavSeeAllCourses from './components/NavSeeAlllCourses/NavSeeAlllCourses';
import Error404 from './components/Error404/Error404';
// import Error404 from './components/Error404/Error404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login-student',
        element: <StudentLogin></StudentLogin>
      },
      {
        path: '/login-instructor',
        element: <InstructorLogin></InstructorLogin>
      },
      {
        path: '/login-admin',
        element: <AdminLogin></AdminLogin>
      },
      {
        path: '/see-all-students',
        element: <NavSeeAllStu></NavSeeAllStu>
      },
      {
        path: '/see-all-instructors',
        element: <NavSeeAllInsctruc></NavSeeAllInsctruc>
      },
      {
        path: '/see-all-courses',
        element: <NavSeeAllCourses></NavSeeAllCourses>
      }
    ]
  }
  ,
  {
    path: '*',
    element: <Error404></Error404>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
