const API_URL = process.env.NODE_ENV === 'production' 
  ? "https://amazona-backend-two.vercel.app/" 
  : 'http://localhost:5000';

export default API_URL;