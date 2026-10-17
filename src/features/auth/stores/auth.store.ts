import { create } from "zustand";

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
};

export const useAuthStore = create<AuthState & AuthAction>()((set, get) => ({
  user: null,
  isAuthencated: false,
  isLoading: false,

  setUser: (user) => set({ user, isAuthencated: true, isLoading: false }),

  clearUser: () => set({ user: null, isAuthencated: false, isLoading: false }),
  getUser: () => get().user,
}));
