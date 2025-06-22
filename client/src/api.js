import axios from "axios";

const API = axios.create({
  baseURL: "", // Empty because Vite proxy handles /api
});

export default API;
