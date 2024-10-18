import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import 
import LandingPage from "./pages/LandingPage";
import GeneralLayout from "./applayout/GeneralLayout";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import Settings from "./pages/Settings";
import Exams from "./pages/Exams";
import Features from "./pages/Features";
import Signup from "./component/SignUp";
import TeacherDetail from "./component/TeacherDetails";
import SignIn from "./component/SignIn";
import Billing from "./pages/Billing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {login} from "@store/accountSlice"

function App() {
  // useDispatch hook to get the dispatch function from the Store
  const dispatch = useDispatch()

  useEffect(()=>{
   // Retrieve the stored user data from local storage and parse it from JSON format.
    const storedUser = JSON.parse(localStorage.getItem('userData'))
     // Check if there is stored user data.
    if(storedUser){
      // If user data exists, dispatch the login action with the stored user data.
      dispatch(login(storedUser))
    }
  },[dispatch])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: <GeneralLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/teachers",
          element: <Teachers />,
        },
        {
          path: "/dashboard/teachers/:id",
          element: <TeacherDetail />,
        },
        {
          path: "/dashboard/students",
          element: <Students />,
        },
        {
          path: "/dashboard/billing",
          element: <Billing/> ,
        },
        {
          path: "/dashboard/settings",
          element: <Settings />,
        },
        {
          path: "/dashboard/exams",
          element: <Exams />,
        },
        {
          path: "/dashboard/features",
          element: <Features />,
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// import CreateAccountWrapper from "./component/auth/create-account/createAccountWrapper";
{
  /* <CreateAccountWrapper /> */
}
