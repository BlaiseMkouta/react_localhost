import { useState } from "react";
import { useAuthStore } from "../features/auth/stores/auth.store";
import { Input } from "./Input";
import { Link } from "react-router";
import { Button } from "./Button";

export const NavDashboard = () => {
  const getUser = useAuthStore((state) => state.user);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const togglestate = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header>
      <div className="flex items-center justify-between py-2">
        <p>Logo</p>

        <div className="flex items-center gap-4 relative">
          <Input placeholder="Search item" type="text" />
          <p>
            Welcome{" "}
            <span className="font-semibold">
              {getUser?.first_name} {getUser?.last_name}
            </span>
          </p>

          <button
            onClick={togglestate}
            className="bg-gray-200 w-8 h-8 rounded-full"
          >
            {getUser?.profile_picture ? (
              <img
                src={getUser.profile_picture}
                alt="profile picture"
                className="w-8"
              />
            ) : (
              <img src="/avatar.svg" alt="avatar" className="w-8" />
            )}
          </button>

          {isVisible && (
            <div className="p-2 shadow flex flex-col items-start gap-2 absolute top-14 right-0">
              <Link to="#"> Settings</Link>
              <Link to="#"> Profile</Link>
              <Button label="Logout" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
