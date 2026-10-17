import { Outlet } from "react-router";
import { NavDashboard } from "../components/Navdashboard";

export const DashboardLayout = () => {
  return (
    <>
      <div className="flex items-start">
        <div className="w-1/5">
          <p>side bar</p>
        </div>
        <div className="w-full px-8 min-h-screen">
          <NavDashboard />
          <main className="py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
