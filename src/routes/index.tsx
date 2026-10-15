import { Route, Routes } from "react-router";
import LoginPage from "../pages/auth/Login";
import HomePage from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AppRoutes;
