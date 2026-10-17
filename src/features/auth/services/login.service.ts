import type { LoginFormData } from "../schemas/login.schema";

type LoginResponse = {
  id: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
};

export const loginService = async (
  data: LoginFormData,
): Promise<LoginResponse | undefined> => {
  try {
    const response = await fetch("http://127.0.0.1:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();

    return responseJson.data.user;
  } catch (error) {
    console.log("error dans le service", error);
  }
};
