import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const errorStatus = [401];

api.interceptors.request.use(
  (config) => {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    const { jwt } = window.localStorage;
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (errorStatus.includes(response.status)) {
      localStorage.removeItem("jwt");
      window.location.href = "/entrar";
    }
    return response;
  },
  function (error) {
    if (errorStatus.includes(error.response.status)) {
      localStorage.removeItem("jwt");
      window.location.href = "/entrar";
    }
    return Promise.reject(error);
  }
);
