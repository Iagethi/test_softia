import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {},
});

export default api;
