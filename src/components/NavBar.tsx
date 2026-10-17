import { Link, useNavigate } from "react-router";
import { Button } from "./Button";
import { useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const links = [
    { label: "home", href: "/" },
    { label: "products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const navigateToLogin = () => {
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="px-4 py-6">
      <div className="flex justify-between items-center ">
        <div>
          <Link to="#" className="text-light-blue font-semibold text-2xl">
            logo
          </Link>
        </div>

        {/** Button de navifation mobile */}
        <button onClick={toggleMenu} className="lg:hidden">
          <img
            src="public/burger-menu-svgrepo-com.svg"
            alt=""
            className="w-6"
          />
        </button>

        {/** Navigation desktop */}
        <div className=" items-center gap-2 hidden lg:flex">
          {links.map((link) => (
            <Link to={link.href}>{link.label}</Link>
          ))}

          <Button label="Connexion" action={navigateToLogin} />
        </div>
      </div>

      {/** Navigation mobile */}
      <div
        className={`flex flex-col justify-start gap-2  bg-white shadow-sm px-2 overflow-hidden transition-all duration-300 lg:hidden ${isVisible ? "h-48 py-6" : "h-0 py-0"}`}
      >
        {links.map((link) => (
          <Link to={link.href}>{link.label}</Link>
        ))}

        <Button label="Connexion" action={navigateToLogin} />
      </div>
    </header>
  );
};
