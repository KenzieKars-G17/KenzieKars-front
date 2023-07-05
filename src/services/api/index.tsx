import axios from "axios";

const api = axios.create({
  baseURL: "https://kenziekarsbackend2.onrender.com/",
  timeout: 60000,
});

export default api;
