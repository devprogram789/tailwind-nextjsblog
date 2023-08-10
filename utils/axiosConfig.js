import axios from "axios";


const axiosClient = axios.create({
  baseURL: `http://13.200.28.82/api/backend`,
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default axiosClient;
