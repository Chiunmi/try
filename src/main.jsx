import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./LoginPage/Login.jsx";

import Home from "./Pages/Home.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";

import StudentProfile from "./StudentPages/StudentProfile.jsx";
import StudentIndex from "./StudentPages/StudentIndex.jsx";

import AdminProfile from "./AdminPages/AdminProfile.jsx";
import Inventory from "./AdminPages/Inventory.jsx";
import Archive from "./AdminPages/Archive.jsx";

import ServicesPage from "./Pages/ServicesPage.jsx";
import Schedule from "./Pages/Schedule.jsx";
import TelemedPage from "./Pages/TelemedPage.jsx";
import EventPage from "./Pages/EventPage.jsx";

import RequestPage from "./Pages/RequestPage.jsx";

import HealthPage from "./Pages/HealthPage.jsx";

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
    path: "home",
    element: <Home />,
  },

  {
    path: "location",
    element: <LocationPage />,
  },

  {
    path: "aboutus",
    element: <AboutPage />,
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
    path: "schedule",
    element: <Schedule />,
  },

  {
    path: "telemed",
    element: <TelemedPage />,
  },

  {
    path: "requestForms",
    element: <RequestPage />,
  },

  {
    path: "events",
    element: <EventPage />,
  },

  {
    path: "healthTips",
    element: <HealthPage />,
  },

  {
    path: "admin_profile",
    element: <AdminProfile />,
  },

  {
    path: "admin_inventory",
    element: <Inventory />,
  },
  {
    path: "archive",
    element: <Archive />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
