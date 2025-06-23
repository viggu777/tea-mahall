import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://tea-mahall.onrender.com";

const API = axios.create({
  baseURL,
});

export default API;
