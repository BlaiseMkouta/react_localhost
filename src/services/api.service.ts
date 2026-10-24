import { useNavigate } from "react-router";
import { useAuthStore } from "../features/auth/stores/auth.store";

const BASE_URL = "http://127.0.0.1:3000";

const refreshToken = async (): Promise<boolean | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    console.log("Error refreshing token", error);
  }
};

export const apiService = async (path: string, options: RequestInit = {}) => {
  const doFetch = async () => {
    const response = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      credentials: "include",
    });

    return response;
  };

  let response = await doFetch();

  if (response.status === 401 && !path.startsWith("/auth")) {
    const refresh = await refreshToken();

    if (!refresh) {
      useAuthStore.getState().clearUser();
      const navigate = useNavigate();
      navigate("/login");
    } else {
      response = await doFetch();
    }
  }

  return response;
};
