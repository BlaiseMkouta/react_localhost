import { useEffect, useState } from "react";
import {
  getMyShop,
  type ShopTypes,
} from "../../features/shop/services/shop.service";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
};

export const Dashboard = () => {
  // const [user, setUser] = useState<User | null>();
  // const getuser = useAuthStore((state) => state.user);
  const [shopInfo, setShopInfo] = useState<ShopTypes>();

  const getShop = async () => {
    const shop = await getMyShop();

    if (shop) {
      setShopInfo(shop);
    }
  };
  useEffect(() => {
    getShop();

    // setShopInfo(getMyShop())
  }, []);

  return (
    <div>
      {shopInfo ? (
        <div className="flex flex-col justify-start gap-4">
          <div className="w-full h-72 overflow-hidden bg-red-500">
            <img
              src={`http://127.0.0.1:3000${shopInfo.cover_picture}`}
              alt="coverPicture"
              className="object-cover w-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 aura rounded-full bg-gray-200">
                {shopInfo.profile_picture ? (
                  <img
                    src={`http://127.0.0.1:3000${shopInfo.profile_picture}`}
                    alt="profile picture"
                  />
                ) : (
                  <img src="/avatar.svg" alt="profile picture" />
                )}
              </div>
              <h1 className="font-semibold text-2xl text-light-blue">{`${shopInfo.name}`}</h1>
            </div>
            <p className="text-[12px] opacity-80 leading-12">
              {shopInfo.description}
            </p>
          </div>
        </div>
      ) : (
        <p>pas de boutique</p>
      )}
    </div>
  );
};
