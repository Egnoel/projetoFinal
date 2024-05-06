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

export const signUp = ({ fisrtName, lastName, userType, email, password }) => {
  return axios.post('users', {
    fisrtName,
    lastName,
    userType,
    email,
    password,
  });
};

export const getProducts = () => {
  return axios.get('/products/');
};

export const getProduct = (id) => {
  return axios.get(`/products/${id}`);
};

export const createProduct = (
  name,
  description,
  price,
  images,
  establishmentId
) => {
  return axios.post('/products', {
    name,
    description,
    price,
    images,
    establishmentId,
  });
};

export const updateProduct = (id, product) => {
  return axios.put(`/products/${id}`, product);
};

export const deleteProduct = (id) => {
  return axios.delete(`/products/${id}`);
};

export const getEstablishments = () => {
  return axios.get('/establishments/');
};

export const getEstablishment = (id) => {
  return axios.get(`/establishments/${id}`);
};

export const createEstablishment = (establishment) => {
  return axios.post('/establishments', establishment);
};

export const updateEstablishment = (id, establishment) => {
  return axios.put(`/establishments/${id}`, establishment);
};

export const deleteEstablishment = (id) => {
  return axios.delete(`/establishments/${id}`);
};

export const getAddresses = () => {
  return axios.get('/addresses/');
};
