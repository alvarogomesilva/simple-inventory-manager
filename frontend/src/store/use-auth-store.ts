import { create } from "zustand";
import { api } from "../services/api";
import toast from "react-hot-toast";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const savedToken = localStorage.getItem('@t');
  const savedUser = savedToken ? JSON.parse(localStorage.getItem('@u') || '{}') : null;

  if (savedToken) {
    api.get('/me', {
      headers: { Authorization: `Bearer ${JSON.parse(savedToken)}` }
    })
      .then(() => {
        set({ user: savedUser, token: savedToken });
      })
      .catch(() => {
        localStorage.removeItem('@t');
        localStorage.removeItem('@u');
        set({ user: null, token: null });
      });
  }
  
  return {
    user: savedUser,
    token: savedToken,

    login: async (email, password) => {
      try {
        const response = await api.post('/login', { email, password });
        if (response.data) {
          localStorage.setItem('@t', JSON.stringify(response.data.token));
          localStorage.setItem('@u', JSON.stringify(response.data.user));
          set({ user: response.data.user, token: response.data.token });
        }
      } catch (error) {
        toast.error('Email/password incorretos', { position: "top-right" })
      }
    },

    logout: () => {
      localStorage.removeItem("@t");
      localStorage.removeItem("@u");
      set({ user: null, token: null });
    },
  };
});
