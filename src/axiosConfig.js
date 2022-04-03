import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND;

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response.data);
  }
);
