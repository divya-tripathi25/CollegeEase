import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Authentication/Login";
import Alt404 from "../Pages/Authentication/Alt404";
import Vendors from "../Pages/Vendors";
import Students from "../Pages/Students";
import RequestQueries from "../Pages/RequestQueries";
import Feedbacks from "../Pages/Feedbacks";
import VendorDetails from "../Pages/Vendors/VendorDetails";
import Home from "../Pages/Home";
import Register from "../Pages/Authentication/Register";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/vendors", component: <Vendors /> },
  { path: "/vendor-details/:id", component: <VendorDetails /> },
  { path: "/students", component: <Students /> },
  { path: "/request-queries", component: <RequestQueries /> },
  { path: "/feedbacks", component: <Feedbacks /> },
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/not-found" /> },
];

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/not-found", component: <Alt404 /> },
];

export { authProtectedRoutes, publicRoutes };