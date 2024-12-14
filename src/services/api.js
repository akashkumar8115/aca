import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Auth API calls
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const forgotPassword = (email) => api.post('/auth/forgot-password', { email });
export const resetPassword = (token, password) => api.post('/auth/reset-password', { token, password });
export const updateProfile = (userData) => api.put('/auth/update-profile', userData);
export const getProfile = () => api.get('/auth/profile');

// Application API calls
export const submitInternshipApplication = (formData) => api.post('/applications/internship', formData);
export const submitJobApplication = (formData) => api.post('/applications/job', formData);
export const submitScholarshipApplication = (formData) => api.post('/applications/scholarship', formData);
export const getUserApplications = () => api.get('/applications/user-applications');

// Request interceptor
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
