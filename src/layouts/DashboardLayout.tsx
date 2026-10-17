import { Outlet } from "react-router";

export const DashboardLayout = () => {
  return (
    <>
      <div>
        <p>header en attente</p>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
