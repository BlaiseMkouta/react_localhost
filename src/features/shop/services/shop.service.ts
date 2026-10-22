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
    const response = await fetch("http://127.0.0.1:3000/shop", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const responsejson = await response.json();
    console.log("reponse dasn le service", responsejson);

    return responsejson.data;
  } catch (error) {
    console.log("Errro", error);
  }
};


