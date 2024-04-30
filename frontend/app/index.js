import axios from 'axios';

let token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:8000';

axios.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export const login = ({ email, password }) => {
  return axios.post('users/login', { email, password });
};
