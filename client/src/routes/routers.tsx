import DashboardLayout from "layouts/DashboardLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = lazy(() => import("../layouts/AppLayout"));
const SignInPage = lazy(() => import("../pages/signIn/SignIn"));
const SignUpPage = lazy(() => import("../pages/signUp/SignUp"));
const DashboardPage = lazy(() => import("../pages/dashboard/Dashboard"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);

export default routers;
