import axios from "axios";
import { useAuthStore } from "../store/use-auth-store";
import { useNavigate } from 'react-router-dom';

export const api = axios.create({
    baseURL: 'http://192.168.0.84:3000'
})


// Interceptor para adicionar o token nas requisições
// ====================================================
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('@u');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

// Interceptor para verificar erro de token expirado
// ===================================================
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {

            const { logout } = useAuthStore.getState();
            const navigate = useNavigate()
            logout();
            navigate('/login')
        }
        return Promise.reject(error);
    }
);