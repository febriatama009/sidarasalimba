import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_KEY,
  headers: {
    "Content-type": "application/json",
  },
});

export default API;
