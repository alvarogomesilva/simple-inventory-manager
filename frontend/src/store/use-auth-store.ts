import { create } from "zustand";
import { api } from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
};

interface AuthState  {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: async (email, password) => {

    const response = await api.post('/login', {email, password})
    if (response.data) {
      //set({ user: response.user, token: response.token });
      console.log(response.data)
    }
  },

  logout: () => {
    //set({ user: null, token: null });
    //localStorage.removeItem("token");
    console.log('deslogou')
  },
}));