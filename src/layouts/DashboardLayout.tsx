import { Outlet } from "react-router";
import { NavDashboard } from "../components/Navdashboard";
import { SideBar } from "../components/Sidebar";

export const DashboardLayout = () => {
  return (
    <>
      <div className="flex items-start">
        <div >
          <SideBar />
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
