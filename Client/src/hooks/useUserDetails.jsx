import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLoggedInAdminAPI, getLoggedInStudentAPI } from '../apiConfig/apiCall';

export const useUserDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const user = location.search.slice(1);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        if (user === "Admin") {
          const apiResponse = await getLoggedInAdminAPI();
          setData(apiResponse.data.user);
        } else if (user === "Student") {
          const apiResponse = await getLoggedInStudentAPI();
          setData(apiResponse.data.user);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  return { data, loading, error };
};