import axios from "axios";

const API = axios.create({
 baseURL: "https://tea-mahall.onrender.com",
});

export default API;
