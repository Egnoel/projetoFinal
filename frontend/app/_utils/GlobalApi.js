const { default: axios } = require('axios');

//created axio client to create endpoint
const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
});

const createUser = (data) => axiosClient.post('/users', data);
const getUserByEmail = (email) => axiosClient.get(`/users/${email}`);
const createPost = (data) => axiosClient.post('/posts', data);
const getAllPost = () => axiosClient.get('/posts');
const onPostLike = (data, postId) =>
  axiosClient.put(`/posts/like/${postId}`, data);

const addComment = (data) => axiosClient.post('/comments', data);
const deleteComment = (commentId) =>
  axiosClient.delete(`/comments/${commentId}`);

export default {
  createUser,
  getUserByEmail,
  createPost,
  getAllPost,
  onPostLike,
  addComment,
  deleteComment,
};
