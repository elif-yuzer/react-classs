import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import News from "../pages/News";
import PrivateRouter from "./PrivateRouter";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "login", element: <Login /> },

      {
        element: <PrivateRouter />,
        children: [
          { index: true, element: <News /> }, 
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}