import { apiService } from "../../../services/api.service";

export type ShopTypes = {
  name: string;
  id: string;
  description: string;
  profile_picture: string;
  cover_picture: string;
  owner: string;
};

export const getMyShop = async (): Promise<ShopTypes | undefined> => {
  try {
    const response = await apiService("/shop", {
      method: "GET",
    });

    const responseJson = await response.json();

    return responseJson.data;
  } catch (error) {
    console.log("Errro", error);
  }
};
