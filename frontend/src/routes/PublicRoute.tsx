import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/use-auth-store";

export const PublicRoute = () => {
  const { user } = useAuthStore();
  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};
