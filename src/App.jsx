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
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";


function App() {
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

