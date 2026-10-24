import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
};

type AuthState = {
  user: User | null;
  isAuthencated: boolean;
  isLoading: boolean;
};

type AuthAction = {
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthencated: false,
      isLoading: false,

      setUser: (user) => set({ user, isAuthencated: true, isLoading: false }),

      clearUser: () =>
        set({ user: null, isAuthencated: false, isLoading: false }),
      getUser: () => get().user,
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
