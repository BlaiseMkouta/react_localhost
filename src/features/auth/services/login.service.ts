import type { LoginFormData } from "../schemas/login.schema";

export const loginService = async (data: LoginFormData) => {
  try {
    const response = await fetch("http://127.0.0.1:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.log("error", error);
  }
};
