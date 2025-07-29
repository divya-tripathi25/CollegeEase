import { commonRequest } from "./axiosConfig";

/**
 * @DESC Authentication Api Route & Other (User Details, Client Company Detail, Notification, Support Ticket);
 */
// Web URL
const API_URL = import.meta.env.VITE_API_URL;

export const registerStudentAPI = async (DATA) => {
    return commonRequest("POST", `${API_URL}/auth/student/register`, DATA);
};

export const loginAdminAPI = async (DATA) => {
    return commonRequest("POST", `${API_URL}/auth/admin/login`, DATA);
};
export const loginStudentAPI = async (DATA) => {
    return commonRequest("POST", `${API_URL}/auth/student/login`, DATA);
};

export const getLoggedInAdminAPI = async () => {
    return await commonRequest("GET", `${API_URL}/auth/admin/my-account`);
}
export const getLoggedInStudentAPI = async () => {
    return await commonRequest("GET", `${API_URL}/auth/student/my-account`);
}