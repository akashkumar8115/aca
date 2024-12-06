import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('token', token);
    } else {
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('token');
    }
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};

export const logout = () => {
    setAuthToken(null);
    localStorage.removeItem('user');
    window.location.href = '/login';
};
