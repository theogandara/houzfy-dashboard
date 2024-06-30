import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});
