import { useEffect, useState } from "react";
import { useAuthStore } from "../../features/auth/stores/auth.store";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
};

export const Dashboard = () => {

  const [user, setUser] = useState<User | null>();
    const getuser = useAuthStore((state) => state.user);

  useEffect(() => {
    console.log("execution du useEffect");
  
    if (getuser) {
      setUser(getuser);
    }
  }, []);

  return (
    <div>
      <p>donnee du user</p>
      <p>name: {user?.first_name}</p>
      <p>lastName: {user?.last_name}</p>
      <span className="loading loading-spinner loading-xs"></span>
    </div>
  );
};
