import axios from "axios";


const axiosClient = axios.create({
  baseURL: `http://buu.dooball-ufax365.com`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
