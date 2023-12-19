import axios from "axios";
const baseURL = "http://103.125.217.96:83/";
const api = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || null}`,
    "Content-Type": "application/json",
  },
});

export default api;
