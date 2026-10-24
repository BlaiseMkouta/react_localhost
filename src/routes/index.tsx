import { Route, Routes } from "react-router";
import LoginPage from "../pages/auth/Login";
import HomePage from "../pages/Home";
import RegisterPage from "../pages/auth/Register";
import { MainLayout } from "../layouts/MainLayout";
import { VerifyEmail } from "../pages/auth/Verify-email";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Product } from "../pages/products/Products";
import { ProtectedRoute } from "../guards/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/** Routes du dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/home" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
