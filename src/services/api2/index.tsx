import axios from "axios";

const api2 = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 15000,
});

export default api2;
