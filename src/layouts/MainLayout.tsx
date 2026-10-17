import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <>
      <div>
        <NavBar />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};
