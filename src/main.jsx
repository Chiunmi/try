import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./LoginPage/Login.jsx";

import StudentProfile from "./StudentPages/StudentProfile.jsx";
import StudentIndex from "./StudentPages/StudentIndex.jsx";

import ServicesPage from "./Pages/ServicesPage.jsx";
import AdminProfile from "./AdminPages/AdminProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "student_profile",
    element: <StudentProfile />,
  },

  {
    path: "student_index",
    element: <StudentIndex />,
  },

  {
    path: "services",
    element: <ServicesPage />,
  },

  {
    path: "admin_profile",
    element: <AdminProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
