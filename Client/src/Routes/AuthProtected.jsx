import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { getLoggedInAdminAPI, getLoggedInStudentAPI } from "../apiConfig/apiCall";
import Loader from "../Components/Common/Loader";

export const AuthProtected = ({ children }) => {
  const location = useLocation();
  const user = location.search.slice(1);

  const [currentUser, setCurrentUser] = useState(user);

  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLoggedInUserDetails = async () => {
    try {

      if (currentUser === "Admin") {
        const apiResponse = await getLoggedInAdminAPI();
        console.log(apiResponse)
        if (apiResponse?.status === 200) {
          setIsAuthenticated(true);
        } else if (apiResponse?.status === 401) {
          setIsAuthenticated(false);
          toast.error("Unauthorized access. Please login.");
        } else {
          setIsAuthenticated(false);
          toast.error("Unexpected response. Please try again later.");
        }
      } else if (currentUser === "Student") {
        const apiResponse = await getLoggedInStudentAPI();
        console.log(apiResponse)
        if (apiResponse?.status === 200) {
          setIsAuthenticated(true);
        } else if (apiResponse?.status === 401) {
          setIsAuthenticated(false);
          toast.error("Unauthorized access. Please login.");
        } else {
          setIsAuthenticated(false);
          toast.error("Unexpected response. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Unable to verify user authentication.");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      getLoggedInUserDetails();
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};