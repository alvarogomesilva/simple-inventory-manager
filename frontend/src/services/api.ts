import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.1.192:3000'
})


// Interceptor para adicionar o token nas requisições
// ====================================================
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('@t');

      if (token) {
        config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
      }
      return config;
    },
    (error) => {
      
      return Promise.reject(error);
    }
  );