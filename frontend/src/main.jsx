import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/home/Home.jsx';
import Courses from './components/courses/Courses.jsx';
// import Resources from './components/resources/Resources.jsx';
import IELTS from './components/resources/ielts/IELTS.jsx';
import PTE from './components/resources/pte/PTE.jsx';
import SpokenEnglish from './components/resources/spokenenglish/SpokenEnglish.jsx';
import Duolingo from './components/resources/duolingo/Duolingo.jsx';
import MockTest from './components/mocktest/MockTest.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
// import CourseDetail from './components/course detail/CourseDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // This renders App.jsx for the root path
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "courses",
        element: <Courses />
      },
      // {
      //   path: "resources",
      //   element: <Resources />,
      //   children: [
      {
        path: "ielts" ,
        element: <IELTS />
      },
      {
        path: "pte" ,
            element: <PTE/>
      },
      {
        path: "spoken-english" ,
        element: <SpokenEnglish />
      },
      {
        path: "duolingo" ,
        element: <Duolingo />
      },
      //   ]
      // },
      {
        path: "mocktest",
        element: <MockTest />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      }
      // {
      //   path:"course-detail",
      //   element:<CourseDetail/>
      // }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
