import type { RegisterFormData } from "../schemas/register.schema";

export const registerService = async (data: RegisterFormData) => {
  try {
    const response = await fetch("http://127.0.0.1:3000/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};
