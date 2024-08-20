import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? "https://amazona-backend-two.vercel.app/"
    : 'http://localhost:5000'
});

export default api;