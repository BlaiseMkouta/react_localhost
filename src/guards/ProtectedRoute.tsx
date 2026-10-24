import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../features/auth/stores/auth.store";

export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthencated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
